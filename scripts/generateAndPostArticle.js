import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config({ path: ".env.local" });

const MICROCMS_SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const MICROCMS_API_KEY = process.env.MICROCMS_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-5.4";

if (!MICROCMS_SERVICE_DOMAIN || !MICROCMS_API_KEY || !OPENAI_API_KEY) {
  console.error("環境変数が不足しています。.env.local を確認してください。");
  process.exit(1);
}

const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const ALLOWED_TOPICS = [
  "profit",
  "incorporation",
  "no-hire",
  "leverage",
  "decision",
  "exit",
];

function toSlug(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function getTopicBySlug(topicSlug) {
  const url = new URL(
    `https://${MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/topics`
  );
  url.searchParams.set("filters", `slug[equals]${topicSlug}`);
  url.searchParams.set("limit", "1");

  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": MICROCMS_API_KEY,
    },
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(`topics取得失敗: ${res.status} ${text}`);
  }

  const data = text ? JSON.parse(text) : {};
  if (!data.contents || data.contents.length === 0) {
    throw new Error(`topic slug="${topicSlug}" が見つかりません。`);
  }

  return data.contents[0];
}

async function existsBySlug(slug) {
  const url = new URL(
    `https://${MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/posts`
  );
  url.searchParams.set("filters", `slug[equals]${slug}`);
  url.searchParams.set("limit", "1");

  const res = await fetch(url, {
    headers: {
      "X-MICROCMS-API-KEY": MICROCMS_API_KEY,
    },
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(`slug確認失敗: ${res.status} ${text}`);
  }

  const data = text ? JSON.parse(text) : {};
  return Array.isArray(data.contents) && data.contents.length > 0;
}

async function generateArticle({ keyword, topicName }) {
  const prompt = `
あなたは日本語のSEOライターです。
以下の条件で、SEO記事用のJSONを出力してください。

キーワード: ${keyword}
カテゴリ: ${topicName}

このメディアの読者は次の3層です。
1. 会社員として働きながら副業を始め、独立を考えている人
2. フリーランスとして活動しており、法人化を検討している人
3. 一人で会社を経営している、または一人社長として事業を伸ばしたい人

記事要件:
- 日本語
- SEO記事として自然で読みやすい
- 4000文字前後
- 結論を最初に書く
- 構成は「結論 → 理由 → 具体例 → 実務視点 → まとめ」
- 初心者にもわかるように専門用語は説明する
- 一人社長だけでなく、副業・独立・フリーランスから法人化する読者にも理解できるように書く
- 誇張表現や煽り表現は避ける
- 客観的で信頼性のある内容にする
- 実務で起こりがちな状況や判断ポイントを入れる
- 記事末尾に関連記事は入れない
- タイトルは32文字前後を目安
- excerpt は120〜160文字
- slug は英数字とハイフンのみ
- body は microCMS にそのまま保存・投稿できる HTML で返す
- body では h2, h3, p, ul, li を使う
- h1 は使わない
- HTMLタグが文字列として表示されないよう、本文用HTMLとして自然な構造で返す
- 本文冒頭に短い導入段落を1つ入れる
- 少なくとも h2 を6個以上含める
- 各 h2 の下に h3 を2個程度入れる
- 箇条書きを最低2回使う
- 最後に「まとめ」の h2 を入れる

出力は必ず次のJSON形式にしてください。
{
  "title": "string",
  "slug": "string",
  "excerpt": "string",
  "body": "string"
}
`;

  const response = await openai.responses.create({
    model: OPENAI_MODEL,
    input: prompt,
    text: {
      format: {
        type: "json_schema",
        name: "seo_article",
        schema: {
          type: "object",
          additionalProperties: false,
          properties: {
            title: { type: "string" },
            slug: { type: "string" },
            excerpt: { type: "string" },
            body: { type: "string" },
          },
          required: ["title", "slug", "excerpt", "body"],
        },
      },
    },
  });

  const raw = response.output_text;
  const article = JSON.parse(raw);

  article.slug = toSlug(article.slug || keyword);

  return article;
}

async function postToMicroCMS(article, topicId) {
  const payload = {
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt,
    body: article.body,
    topic: topicId,
    status: ["published"],
  };

  const url = `https://${MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/posts`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "X-MICROCMS-API-KEY": MICROCMS_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const text = await res.text();

  if (!res.ok) {
    throw new Error(`microCMS投稿失敗: ${res.status} ${text}`);
  }

  return text ? JSON.parse(text) : {};
}

async function main() {
  const keyword = process.argv[2];
  const topicSlug = process.argv[3] || "profit";

  if (!keyword) {
    console.error(
      '使い方: node scripts/generateAndPostArticle.js "一人社長 年収" profit'
    );
    process.exit(1);
  }

  if (!ALLOWED_TOPICS.includes(topicSlug)) {
    console.error(
      `topicSlug が不正です。利用可能: ${ALLOWED_TOPICS.join(", ")}`
    );
    process.exit(1);
  }

  const topic = await getTopicBySlug(topicSlug);

  console.log("記事生成中...");
  const article = await generateArticle({
    keyword,
    topicName: topic.name,
  });

  const duplicate = await existsBySlug(article.slug);
  if (duplicate) {
    article.slug = `${article.slug}-${Date.now()}`;
  }

  console.log("microCMS投稿中...");
  const result = await postToMicroCMS(article, topic.id);

  console.log("投稿完了");
  console.log({
    id: result.id,
    title: article.title,
    slug: article.slug,
    previewUrl: `https://solokeiei.jp/articles/${article.slug}`,
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
