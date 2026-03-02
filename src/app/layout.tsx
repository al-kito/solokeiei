
import "./globals.css";

export const metadata = {
  title: "一人経営戦略",
  description: "利益率を守る一人経営の戦略論"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="bg-white text-zinc-900 max-w-3xl mx-auto p-6">
        <header className="mb-10">
          <h1 className="text-2xl font-bold">一人経営戦略</h1>
          <p className="text-sm text-zinc-600">
            拡大しないという戦略。利益率を守る経営。
          </p>
        </header>
        {children}
      </body>
    </html>
  );
}
