import React from 'react';
import { Paper, Typography, Grid, Button, Box } from '@mui/material';

const ExerciciosSection = ({ onOpenExercicioModal }) => {
  const exercicios = [
    {
      id: 'lista01',
      title: '📝 Lista 01: Análise de Complexidade',
      description: 'Exercícios focados em análise teórica e prática de algoritmos em C e Python.',
      prazo: '2 semanas',
      valor: '2,0 pts',
      type: 'LISTA PRÁTICA'
    },
    {
      id: 'lista02',
      title: '📊 Lista 02: Estruturas de Dados Básicas',
      description: 'Implementação de estruturas lineares, arrays dinâmicos e análise de performance.',
      prazo: '2 semanas',
      valor: '2,5 pts',
      type: 'LISTA PRÁTICA'
    }
  ];

  return (
    <Paper className="content-section" elevation={3}>
      <Typography variant="h4" className="section-title">
        💻 Exercícios Práticos
      </Typography>
      
      <Grid container spacing={3}>
        {exercicios.map((exercicio) => (
          <Grid item xs={12} md={6} key={exercicio.id}>
            <Paper 
              className="exercicio-card" 
              elevation={2}
              onClick={() => onOpenExercicioModal(exercicio.id)}
              sx={{
                background: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
                color: 'white',
                padding: '30px',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              <Box sx={{ 
                background: 'rgba(255, 255, 255, 0.2)', 
                padding: '5px 12px', 
                borderRadius: '20px', 
                fontSize: '0.9rem', 
                display: 'inline-block', 
                marginBottom: '15px', 
                fontWeight: 600 
              }}>
                {exercicio.type}
              </Box>
              
              <Typography variant="h6" gutterBottom>
                {exercicio.title}
              </Typography>
              
              <Typography sx={{ marginBottom: '15px', opacity: 0.9 }}>
                {exercicio.description}
              </Typography>
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                paddingTop: '15px',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <Typography sx={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  Prazo: {exercicio.prazo} • Valor: {exercicio.valor}
                </Typography>
                <Button 
                  variant="contained" 
                  sx={{ 
                    background: 'rgba(255, 255, 255, 0.2)', 
                    color: 'white',
                    borderRadius: '20px',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.3)',
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  Ver Exercícios
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper elevation={2} sx={{ 
        background: 'rgba(255, 255, 255, 0.1)', 
        padding: '25px', 
        margin: '20px 0', 
        borderRadius: '15px' 
      }}>
        <Typography variant="h5" gutterBottom>🎯 Estrutura dos Exercícios</Typography>
        <Grid container spacing={2}>
          {[
            { title: '🔬 Implementação', subtitle: 'Código em C e Python com análise de complexidade' },
            { title: '📊 Análise', subtitle: 'Comparação de performance e otimizações' },
            { title: '📝 Relatório', subtitle: 'Documentação técnica completa' },
            { title: '🧪 Testes', subtitle: 'Casos de teste abrangentes' }
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper sx={{ 
                padding: '15px', 
                background: 'rgba(255, 255, 255, 0.7)', 
                borderRadius: '10px',
                textAlign: 'center'
              }}>
                <Typography variant="h6" gutterBottom>{item.title}</Typography>
                <Typography variant="body2">{item.subtitle}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Paper>
  );
};

export default ExerciciosSection;