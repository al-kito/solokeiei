import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const API_KEY = process.env.MICROCMS_API_KEY;
const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;

const article = {
  title: "一人社長とは？意味と特徴を解説",
  slug: "solo-president-test",
  excerpt: "一人社長の意味や特徴を解説したテスト記事です",
  body: `
<h2>一人社長とは</h2>
<p>一人社長とは会社を設立し一人で経営する社長のことです。</p>
`,
  status: ["published"]
};

async function post() {
  const url = `https://${SERVICE_DOMAIN}.microcms.io/api/v1/posts`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "X-MICROCMS-API-KEY": API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(article)
  });

  const text = await res.text();

  console.log("status:", res.status);
  console.log("response:", text);
}

post();
