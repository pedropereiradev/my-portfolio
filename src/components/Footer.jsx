import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Email from '@mui/icons-material/Email';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Telegram from '@mui/icons-material/Telegram';
import footer from '../assets/footer.svg';

function Footer() {
  return (
    <Box
      component="footer"
      variant="footer"
      sx={{
        backgroundImage: `url(${footer})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: {
          xs: 250,
          md: 300,
          lg: 400,
          xl: 500,
        },
        width: '100%',
      }}
    >
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2 }}
        justifyContent="center"
        mb={3}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Button
          href="https://linkedin.com/in/pedropereiradev"
          target="_blank"
          color="inherit"
        >
          <LinkedIn fontSize="large" />
        </Button>
        <Button
          href="https://github.com/pedropereiradev"
          target="_blank"
          color="inherit"
        >
          <GitHub fontSize="large" />
        </Button>
        <Button
          href="https://t.me/pedropereiradev"
          target="_blank"
          color="inherit"
        >
          <Telegram fontSize="large" />
        </Button>
        <Button
          href="mailto:devpereirapedro@gmail.com"
          target="_blank"
          color="inherit"
        >
          <Email fontSize="large" />
        </Button>
      </Stack>
      <Typography
        variant="overline"
        gutterBottom
        sx={{
          alignSelf: 'center',
          color: 'text.disabled',
        }}
      >
        Pedro Pereira&copy; 2022
      </Typography>
    </Box>
  );
}

export default Footer;
