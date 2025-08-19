
import React from 'react';
import { Paper, Typography, Grid, Button, Box } from '@mui/material';
import './AulasSection.css';

const AulasSection = ({ onOpenAulaModal }) => {
  const aulas = [
    {
      id: 'aula01',
      title: '📘 Aula 01: Algoritmos - Funções e Passagem de Parâmetros',
      description: 'Conceitos fundamentais, funções e parâmetros. Análise matemática e implementação prática.',
      type: 'PDF + MARKDOWN',
      duration: '4 horas',
      level: 'Fundamentos'
    },
    {
      id: 'aula02',
      title: '📗 Aula 02: Estruturas de Dados - Homogêneas, Heterogêneas e Ponteiros',
      description: 'Arrays, structs e ponteiros. Gerenciamento de memória e análise de performance.',
      type: 'PDF + MARKDOWN',
      duration: '4 horas',
      level: 'Estruturas'
    },
    {
      id: 'aula03',
      title: '📙 Aula 03: Análise de Algoritmos e Prática de Análise',
      description: 'Complexidade, notações assintóticas e análise matemática rigorosa.',
      type: 'PDF + MARKDOWN',
      duration: '4 horas',
      level: 'Análise'
    },
    {
      id: 'aula04',
      title: '📕 Aula 04: Definições Recursivas e Como Implementar Recursividade',
      description: 'Conceitos e implementação de recursão. Casos base e otimizações.',
      type: 'PDF + MARKDOWN',
      duration: '4 horas',
      level: 'Recursão'
    },
    {
      id: 'aulas05-14',
      title: '📚 Aulas 05-14: Conteúdo Avançado',
      description: 'Recursividade avançada, algoritmos de ordenação, árvores, grafos e projetos práticos.',
      type: 'MARKDOWN',
      duration: '40 horas',
      level: 'Avançado'
    }
  ];

  return (
    <Paper className="content-section" elevation={3}>
      <Typography variant="h4" className="section-title">
        🎓 Material das Aulas
      </Typography>
      
      <Grid container spacing={3}>
        {aulas.map((aula) => (
          <Grid item xs={12} md={6} lg={4} key={aula.id}>
            <Paper 
              className="aula-card" 
              elevation={2}
              onClick={() => onOpenAulaModal(aula.id)}
            >
              <Box className="card-type">{aula.type}</Box>
              <Typography variant="h6" className="aula-title">
                {aula.title}
              </Typography>
              <Typography className="aula-description">
                {aula.description}
              </Typography>
              <Box className="aula-footer">
                <Typography className="aula-meta">
                  {aula.duration} • {aula.level}
                </Typography>
                <Button variant="contained" className="aula-action">
                  Ver Conteúdo
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper className="pdf-downloads" elevation={2}>
        <Typography variant="h5">📥 Downloads PDFs</Typography>
        <Typography>Todos os PDFs estão disponíveis para download direto:</Typography>
        <Grid container spacing={2} className="pdf-grid">
          {['aula01', 'aula02', 'aula03', 'aula04', 'aula13', 'aula14', 'aulas09-12'].map((pdf) => (
            <Grid item xs={12} sm={6} md={4} key={pdf}>
              <Button
                variant="contained"
                className="pdf-download-btn"
                href={`/aulas/pdf/${pdf}.pdf`}
                target="_blank"
              >
                📄 {pdf.charAt(0).toUpperCase() + pdf.slice(1)} PDF
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Paper>
  );
};

export default AulasSection;
