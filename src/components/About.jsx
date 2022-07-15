import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { Container, Typography } from '@mui/material';
import PortfolioImage from '../assets/portfolioImage.png';

function About() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#fcfcfc',
        p: 3,
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        align="center"
        sx={{
          color: 'info.main',
          mb: 5,
        }}
      >
        About me
      </Typography>
      <Container
        sx={{
          minHeight: {
            xs: '100vh',
            sm: 500,
          },
        }}
      >
        <Stack direction={{ xs: 'column', sm: 'row' }}>
          <Box
            sx={{
              width: {
                xs: '95%',
                sm: 350,
              },
              borderRadius: 8,
            }}
            boxShadow={5}
            component="img"
            alt="Me"
            src={PortfolioImage}
          />
          <Box
            sx={{
              color: 'text.secondary',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginLeft: {
                sm: '8rem',
              },
              marginTop: {
                xs: '5rem',
              },
            }}
          >
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontSize: '1.3rem',
              }}
            >
              I am a front-end developer and back-end development student at Trybe.
              Here is my portfolio page where you can learn about my journey
              as a full stack web developer.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontSize: '1.3rem',
              }}
            >
              I have a certificate in Eletronics and I&apos;m also studying Mechatronic
              Enginneer at Federal University of Pelotas.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default About;
