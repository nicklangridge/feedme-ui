export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-layout">
      <header>
        <h1>FeedMe UI</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}
