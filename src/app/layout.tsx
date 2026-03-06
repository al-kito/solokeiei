import type React from "react";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "一人経営戦略",
  description: "利益率を守る一人経営の戦略論"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-white text-zinc-900 max-w-3xl mx-auto p-6">
        
        <header className="mb-10 space-y-4">
          
          <div>
            <h1 className="text-2xl font-bold">
              <Link href="/" className="no-underline text-zinc-900">
                一人経営戦略
              </Link>
            </h1>

            <p className="text-sm text-zinc-600">
              拡大しないという戦略。利益率を守る経営。
            </p>
          </div>

          <nav className="flex items-center gap-6 text-sm text-zinc-600">
            <Link
              href="/articles"
              className="no-underline hover:text-zinc-900"
            >
              記事
            </Link>

            <Link
              href="/why"
              className="no-underline hover:text-zinc-900"
            >
              Why
            </Link>
          </nav>

        </header>

        {children}

      </body>
    </html>
  );
}
