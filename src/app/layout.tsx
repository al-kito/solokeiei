import type React from "react";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "一人経営戦略",
  description: "利益率を守る一人経営の戦略論",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-stone-50 text-zinc-900">
        <div className="max-w-5xl mx-auto px-6 py-8">

          <header className="mb-12 flex items-center justify-between border-b border-zinc-200 pb-6">

            <Link href="/" className="flex items-center gap-3 no-underline">
              <Image
                src="/logo.svg"
                alt="solokeiei"
                width={36}
                height={36}
              />

              <div>
                <h1 className="text-xl font-bold text-zinc-900">
                  一人経営戦略
                </h1>
                <p className="text-sm text-zinc-600">
                  拡大しないという戦略。利益率を守る経営。
                </p>
              </div>
            </Link>

            <nav className="flex items-center gap-6 text-sm text-zinc-600">
              <Link href="/articles" className="hover:text-zinc-900">
                記事
              </Link>
              <Link href="/why" className="hover:text-zinc-900">
                Why
              </Link>
            </nav>

          </header>

          {children}

        </div>
      </body>
    </html>
  );
}
