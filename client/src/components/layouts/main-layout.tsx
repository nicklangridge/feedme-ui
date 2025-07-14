import CssBaseline from '@mui/material/CssBaseline';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <div className="main-layout">
        <header>
          <h1>FeedMe UI</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>footer</p>
        </footer>
      </div>
    </>
  );
}
