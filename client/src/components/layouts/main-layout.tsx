import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import MainAppBar from '@/components/ui/main-app-bar';
import ContentBox from '@/components/ui/content-box';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <MainAppBar />
      <Container maxWidth={'xl'}  sx={{ my: 8, contentJustify: 'center', }}>
        <ContentBox>
          {children}
        </ContentBox>  
      </Container>
    </>
  );
}
