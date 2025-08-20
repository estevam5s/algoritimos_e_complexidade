
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <Paper className="header" elevation={3}>
      <Typography variant="h3" component="h1" className="header-title">
        Algoritmos e Complexidade
      </Typography>
      <Typography variant="h5" className="header-subtitle">
        ARA0174 - Sistemas de Informação
      </Typography>
      
      <Grid container spacing={2} className="course-info">
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="info-card" elevation={2}>
            <Typography variant="h6">Professor</Typography>
            <Typography>Vagner Cordeiro</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="info-card" elevation={2}>
            <Typography variant="h6">Período</Typography>
            <Typography>2025.2</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="info-card" elevation={2}>
            <Typography variant="h6">Carga Horária</Typography>
            <Typography>80 horas</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="info-card" elevation={2}>
            <Typography variant="h6">Modalidade</Typography>
            <Typography>4 horas/semana</Typography>
          </Paper>
        </Grid>
      </Grid>
      
      <Paper className="professor-info" elevation={2}>
        <Typography variant="h6" component="h3" className="professor-title">
          👨‍🏫 Prof. Vagner Cordeiro
        </Typography>
        <Typography>
          <strong>Experiência:</strong> Professor especialista em Algoritmos, Estruturas de Dados e Complexidade Computacional
        </Typography>
        <Typography>
          <strong>Foco:</strong> Desenvolvimento de habilidades analíticas e implementação eficiente de algoritmos
        </Typography>
      </Paper>
    </Paper>
  );
};

export default Header;
