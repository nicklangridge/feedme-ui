import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import MainAppBar from '@/components/ui/main-app-bar';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <MainAppBar />
      <Container maxWidth={'xl'}  sx={{ mt: 8, mb: 4, contentJustify: 'center', }}>
        {children}
      </Container>
    </>
  );
}
