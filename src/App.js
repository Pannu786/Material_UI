import React from 'react';
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  Box,
  Stack,
  Link,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Copyright = () => {
  return (
    <Typography variant='body2' color='GrayText.secondary' align='center'>
      {'Copyright 😛'}
      <Link color='inherit' href='https://pannu-portfolio.vercel.app/'>
        My Portfolio
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
};

const theme = createTheme();

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar sx={{ margin: 'auto' }}>
          <PhotoCameraIcon sx={{ mr: 2 }} />
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth='sm'>
            <Typography
              variant='h2'
              align='center'
              color='textPrimary'
              paragraph
              gutterBottom
            >
              Photo Collection
            </Typography>
            <Typography
              variant='h5'
              align='center'
              color='textSecondary'
              paragraph
            >
              Hi fellas this is me Harpreet Singh Pannu trying to learn MateriaL
              UI AKA MUI, lets see how it does look and I hope it will look
              good. So thanks for stick around 😀
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction='column'
              spacing={2}
              justifyContent='center'
            >
              <Button
                variant='contained'
                sx={{
                  background: '#006064',
                }}
              >
                Check Out These Random Pics
              </Button>
              <Button variant='outlined'>Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth='md'>
          {/*//! Grid another way of doing the same thing as above but longer.*/}
          {/* <div>
                <Grid container spacing={2} justify='center'>
                  <Grid item>
                    <Button
                      variant='contained'
                      sx={{
                        background: '#006064',
                      }}
                    >
                      Check Out These Random Pics
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant='contained' color='primary'>
                      Secondary Action
                    </Button>
                  </Grid>
                </Grid>
              </div> */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid key={card} item xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component='img'
                    sx={{ pt: '56.25%' }}
                    image='https://source.unsplash.com/random'
                    alt='random'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant='h5' component='h6'>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>View</Button>
                    <Button size='small'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component='footer'>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='GrayText.secondary'
          component='p'
        >
          Well something here to give the footer a purpose!!
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
};

export default App;
