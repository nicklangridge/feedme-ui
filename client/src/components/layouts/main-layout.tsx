import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import MainAppBar from '@/components/ui/main-app-bar';
import ScrollTop from '@/components/ui/scroll-top';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <div id="scroll-top-anchor" />
      <MainAppBar />
      <Container maxWidth={'xl'}  sx={{ mt: 8, mb: 4, contentJustify: 'center', }}>
        {children}
      </Container>
      <ScrollTop />
    </>
  );
}
