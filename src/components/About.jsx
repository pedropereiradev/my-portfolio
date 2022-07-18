import React, { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PortfolioImage from '../assets/portfolioImage.png';
import Context from '../context/Context';

function About() {
  const { mode } = useContext(Context);
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: mode === 'ligth' ? '#fcfcfc' : '#101010',
        p: 3,
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        align="center"
        sx={{
          color: 'info.main',
          py: 3,
          fontSize: {
            xs: '3rem',
          },
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
        <Stack direction={{ xs: 'column', md: 'row' }}>
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
                md: '8rem',
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
