// page.tsx
"use client";

import { useState } from "react";

type PageKey =
  | "about"
  | "service"
  | "news"
  | "recruit"
  | "contact";

export default function Page() {
  const [current, setCurrent] = useState<PageKey>("about");

  const renderContent = () => {
    switch (current) {
      case "about":
        return (
          <section className="contact">
            <div className="container">
              <h2>会社概要</h2>
              <p>会社名：Fast LP株式会社</p>
              <p>設立：2026年</p>
              <p>所在地：東京都渋谷区</p>
            </div>
          </section>
        );
      case "service":
        return (
          <section className="contact">
            <div className="container">
              <h2>サービス</h2>
              <p>Webサイト制作</p>
              <p>システム開発</p>
              <p>UI/UXデザイン</p>
            </div>
          </section>
        );
      case "news":
        return (
          <section className="contact">
            <div className="container">
              <h2>お知らせ</h2>
              <p>2026.02 新サービスをリリースしました。</p>
              <p>2026.01 コーポレートサイトを公開しました。</p>
            </div>
          </section>
        );
      case "recruit":
        return (
          <section className="contact">
            <div className="container">
              <h2>採用情報</h2>
              <p>募集職種：フロントエンドエンジニア</p>
              <p>雇用形態：正社員</p>
              <p>勤務地：東京都</p>
            </div>
          </section>
        );
      case "contact":
        return (
          <section className="contact">
            <div className="container">
              <h2>お問い合わせ</h2>
              <p>メール：example@example.com</p>
              <p>電話：03-1234-5678</p>
            </div>
          </section>
        );
    }
  };

  return (
    <main className="main">
      <section className="hero">
        <div className="container">
          <h1 className="title">Fast LP株式会社</h1>
          <p className="subtitle">
            シンプルで高速なWebソリューションを提供します
          </p>
        </div>
      </section>

      <section className="features">
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="button secondary" onClick={() => setCurrent("about")}>
              会社概要
            </button>
            <button className="button secondary" onClick={() => setCurrent("service")}>
              サービス
            </button>
            <button className="button secondary" onClick={() => setCurrent("news")}>
              お知らせ
            </button>
            <button className="button secondary" onClick={() => setCurrent("recruit")}>
              採用情報
            </button>
            <button className="button secondary" onClick={() => setCurrent("contact")}>
              お問い合わせ
            </button>
          </div>
        </div>
      </section>

      {renderContent()}

      <footer className="footer">
        <div className="container">
          <p>© 2026 Fast LP株式会社. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
