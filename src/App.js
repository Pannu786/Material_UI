import React from 'react';
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContext,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCameraIcon />
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default App;
