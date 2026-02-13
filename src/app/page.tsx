// page.tsx
export default function Page() {
  return (
    <main className="main">
      <section className="hero">
        <div className="container">
          <h1 className="title">Fast & Simple LP</h1>
          <p className="subtitle">
            一般的な静的ランディングページ
          </p>
          <a href="#contact" className="button">
            お問い合わせ
          </a>
        </div>
      </section>

      <section className="features">
        <div className="container grid">
          <div className="card">
            <h2>私たちについて</h2>
            <p>我々は一般的な企業です。</p>
          </div>
          <div className="card">
            <h2>サービス</h2>
            <p>一般的なサービスを提供いたします。</p>
          </div>
          <div className="card">
            <h2>所在地</h2>
            <p>一般的な場所に拠点を置いています。</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact</h2>
          <p>お気軽にお問い合わせください。</p>
          <a href="mailto:example@example.com" className="button secondary">
            メールを送る
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Fast LP. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
