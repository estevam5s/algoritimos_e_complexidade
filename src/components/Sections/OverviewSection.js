
import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';
import './OverviewSection.css';

const OverviewSection = () => {
  return (
    <Paper className="content-section" elevation={3}>
      <Typography variant="h4" className="section-title">
        📚 Visão Geral do Curso
      </Typography>
      
      <Paper className="highlight-box" elevation={2}>
        <Typography variant="h5" className="highlight-title">
          🎯 Por que estudar Algoritmos?
        </Typography>
        <Typography paragraph>
          A disciplina de Algoritmos e Complexidade é <strong>fundamental</strong> para qualquer profissional de Sistemas de Informação, fornecendo:
        </Typography>
        <Box component="ul" className="highlight-list">
          <li><strong>Base sólida</strong> para desenvolvimento de software eficiente</li>
          <li><strong>Capacidade analítica</strong> para resolver problemas computacionais</li>
          <li><strong>Conhecimento essencial</strong> para entrevistas técnicas</li>
          <li><strong>Fundamentos</strong> para áreas avançadas como IA, Big Data e Sistemas Distribuídos</li>
        </Box>
      </Paper>

      <Grid container spacing={3} className="stats-grid">
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="stat-item" elevation={2}>
            <Typography variant="h3" className="stat-number">14+</Typography>
            <Typography className="stat-label">Aulas Completas</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="stat-item" elevation={2}>
            <Typography variant="h3" className="stat-number">2</Typography>
            <Typography className="stat-label">Listas de Exercícios</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="stat-item" elevation={2}>
            <Typography variant="h3" className="stat-number">2</Typography>
            <Typography className="stat-label">Linguagens (C/Python)</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="stat-item" elevation={2}>
            <Typography variant="h3" className="stat-number">100%</Typography>
            <Typography className="stat-label">Material Prático</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Paper className="highlight-box methodology" elevation={2}>
        <Typography variant="h5" className="highlight-title">
          🚀 Metodologia do Curso
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper className="methodology-card" elevation={2}>
              <Typography variant="h6">🔬 Teoria Fundamentada</Typography>
              <Typography>Conceitos matemáticos rigorosos com análise formal de complexidade</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className="methodology-card" elevation={2}>
              <Typography variant="h6">💻 Prática Intensiva</Typography>
              <Typography>Implementação em C e Python com foco em performance</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper className="methodology-card" elevation={2}>
              <Typography variant="h6">📊 Análise Comparativa</Typography>
              <Typography>Benchmarks reais e comparação entre diferentes abordagens</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  );
};

export default OverviewSection;
