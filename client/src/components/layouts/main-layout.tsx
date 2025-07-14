import CssBaseline from '@mui/material/CssBaseline';

import MainAppBar from '@/components/ui/main-app-bar';
import Container from '@mui/material/Container';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <MainAppBar />
      <Container sx={{ my: 10 }}>
        {children}
      </Container>
    </>
  );
}
