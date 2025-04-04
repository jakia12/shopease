export default function SpecialLayout({ children }) {
  return (
    <html>
      <body style={{ background: "#111", color: "#fff" }}>
        <div style={{ padding: 40 }}>
          <h1>⚡ Special Layout ⚡</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
