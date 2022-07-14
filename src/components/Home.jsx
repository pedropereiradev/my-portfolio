import React from 'react';
import TypeAnimation from 'react-type-animation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Home() {
  return (
    <Box
      component="section"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Container>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: {
              lg: '6rem',
              md: '6rem',
              sm: '6rem',
              xs: '3rem',
            },
            color: 'text.primary',
          }}
        >
          Hi there! I&apos;m
          {' '}
          <Box
            component="span"
            sx={{
              color: 'info.main',
            }}
          >
            Pedro Pereira

          </Box>
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: {
              lg: '3rem',
              md: '2.4em',
              sm: '2rem',
              xs: '1.7rem',
            },
            color: 'text.disabled',
            pl: 2,
          }}
        >
          <TypeAnimation
            cursor
            sequence={[
              'Front-end Developer.',
              5000,
              'Back-end Student.',
              5000,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </Typography>
      </Container>
    </Box>
  );
}

export default Home;
