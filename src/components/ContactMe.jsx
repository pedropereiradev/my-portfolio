/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Send from '@mui/icons-material/Send';
import { Alert, AlertTitle, Fade } from '@mui/material';

function ContactMe() {
  const {
    handleSubmit, register, formState: { errors }, reset,
  } = useForm();
  const [showAlert, setShowAlert] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (showAlert) {
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  }

  const sendEmail = (formData) => {
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setIsSuccess(true);
        setShowAlert(true);
        reset({
          name: '',
          email: '',
          message: '',
        });
        // console.log('SUCCESS!', response.status, response.text);
      }, () => {
        setIsSuccess(false);
        setShowAlert(true);
        // console.log('FAILED...', err);
      });
  };

  return (
    <Box>
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
        Contact me
      </Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
      >
        <Box
          component="form"
          sx={{
            '& > :not(style)': {
              m: 1,
            },
          }}
          noValidate
          autoComplete="off"
        >
          <Stack
            sx={{ width: { xs: '95vw', sm: 600 } }}
            spacing={2}
            alignItems="center"
          >
            <FormControl fullWidth>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                {...register('name', { required: 'Name is required', maxLength: 40 })}
              />
              <FormHelperText error>{errors.name?.message}</FormHelperText>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                fullWidth
                id="email"
                label="Email"
                variant="outlined"
                {...register('email', { required: 'Email Address is required', pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]/i })}
              />
              <FormHelperText error>
                {errors.email?.message}
                { (errors.email?.type) === 'pattern' && 'Email format invalid' }
              </FormHelperText>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                fullWidth
                id="message"
                label="Message"
                variant="outlined"
                multiline
                rows={6}
                {...register('message', { required: 'Message is required' })}
              />
              <FormHelperText error>{errors.message?.message}</FormHelperText>
            </FormControl>

            <Button variant="contained" loading onClick={handleSubmit(sendEmail)}>
              Send
              <Send sx={{ ml: 2 }} />
            </Button>
            <Fade in={showAlert}>
              <Alert severity={isSuccess ? 'success' : 'error'}>
                <AlertTitle>{isSuccess ? 'Success' : 'Error'}</AlertTitle>
                {isSuccess ? 'Message send! Thanks for the feedback.' : 'Ops! Something wrong. Please, try again later.'}
              </Alert>
            </Fade>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default ContactMe;
