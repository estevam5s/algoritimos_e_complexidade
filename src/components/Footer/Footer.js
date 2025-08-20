import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        mt: 4,
        py: 3,
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.8)'
      }}
    >
      <Container>
        <Typography variant="body1" gutterBottom>
          © 2025 - Algoritmos e Complexidade | Prof. Vagner Cordeiro - ARA0174
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Link 
            href="https://github.com/cordeirotelecom/algoritimos_e_complexidade" 
            target="_blank" 
            sx={{ color: 'rgba(255, 255, 255, 0.9)', mx: 2, textDecoration: 'none' }}
          >
            📂 GitHub
          </Link>
          <Link 
            href="#" 
            sx={{ color: 'rgba(255, 255, 255, 0.9)', mx: 2, textDecoration: 'none' }}
          >
            📧 Email
          </Link>
          <Link 
            href="#" 
            sx={{ color: 'rgba(255, 255, 255, 0.9)', mx: 2, textDecoration: 'none' }}
          >
            🕐 Atendimento
          </Link>
          <Link 
            href="#" 
            sx={{ color: 'rgba(255, 255, 255, 0.9)', mx: 2, textDecoration: 'none' }}
          >
            💬 Fórum
          </Link>
        </Box>
        <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
          "A única maneira de aprender algoritmos é programando algoritmos." - Prof. Vagner Cordeiro
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;