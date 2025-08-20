import React from 'react';
import { Paper, Typography, Grid, Button, Box } from '@mui/material';

const ExerciciosSection = ({ onOpenExercicioModal }) => {
  const exercicios = [
    {
      id: 'lista01',
      title: '📝 Lista 01: Análise de Complexidade',
      description: 'Exercícios focados em análise teórica e prática de algoritmos em C e Python.',
      prazo: '25 de agosto de 2025',
      valor: '2,0 pontos',
      type: 'LISTA PRÁTICA',
      color: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
      exerciciosCount: 4,
      difficulty: 'Intermediário'
    },
    {
      id: 'lista02',
      title: '📊 Lista 02: Estruturas de Dados Básicas',
      description: 'Implementação de estruturas lineares, arrays dinâmicos e análise de performance.',
      prazo: '08 de setembro de 2025',
      valor: '2,5 pontos',
      type: 'LISTA PRÁTICA',
      color: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
      exerciciosCount: 5,
      difficulty: 'Avançado'
    },
    {
      id: 'lista03',
      title: '🔄 Lista 03: Algoritmos Recursivos',
      description: 'Implementação e análise de algoritmos recursivos com casos práticos.',
      prazo: '22 de setembro de 2025',
      valor: '2,0 pontos',
      type: 'LISTA PRÁTICA',
      color: 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)',
      exerciciosCount: 6,
      difficulty: 'Intermediário'
    },
    {
      id: 'lista04',
      title: '📈 Lista 04: Algoritmos de Ordenação',
      description: 'Implementação e comparação de diferentes algoritmos de ordenação.',
      prazo: '06 de outubro de 2025',
      valor: '3,0 pontos',
      type: 'LISTA PRÁTICA',
      color: 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)',
      exerciciosCount: 7,
      difficulty: 'Avançado'
    }
  ];

  const estruturaExercicios = [
    { 
      title: '🔬 Implementação', 
      subtitle: 'Código em C e Python com análise de complexidade',
      color: '#74b9ff'
    },
    { 
      title: '📊 Análise', 
      subtitle: 'Comparação de performance e otimizações',
      color: '#6c5ce7'
    },
    { 
      title: '📝 Relatório', 
      subtitle: 'Documentação técnica completa',
      color: '#fd79a8'
    },
    { 
      title: '🧪 Testes', 
      subtitle: 'Casos de teste abrangentes',
      color: '#00b894'
    }
  ];

  const criteriosAvaliacao = [
    { criterio: 'Corretude', peso: '30%', descricao: 'Implementações funcionam corretamente' },
    { criterio: 'Completude', peso: '25%', descricao: 'Todos os exercícios implementados' },
    { criterio: 'Análise', peso: '20%', descricao: 'Análise de complexidade e performance' },
    { criterio: 'Qualidade', peso: '15%', descricao: 'Código limpo, comentado e eficiente' },
    { criterio: 'Documentação', peso: '10%', descricao: 'Relatório claro e bem estruturado' }
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
              elevation={2}
              onClick={() => onOpenExercicioModal(exercicio.id)}
              sx={{
                background: exercicio.color,
                color: 'white',
                padding: '30px',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)'
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100px',
                  height: '100px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  transform: 'translate(30px, -30px)'
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
                fontWeight: 600,
                width: 'fit-content'
              }}>
                {exercicio.type}
              </Box>
              
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                {exercicio.title}
              </Typography>
              
              <Typography sx={{ marginBottom: '20px', opacity: 0.9, flexGrow: 1, lineHeight: 1.6 }}>
                {exercicio.description}
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      📅 <strong>Prazo:</strong>
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {exercicio.prazo}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      🎯 <strong>Valor:</strong>
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {exercicio.valor}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                paddingTop: '15px',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                marginTop: 'auto'
              }}>
                <Box>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    {exercicio.exerciciosCount} exercícios • {exercicio.difficulty}
                  </Typography>
                </Box>
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
        margin: '30px 0', 
        borderRadius: '15px',
        backdropFilter: 'blur(10px)'
      }}>
        <Typography variant="h5" gutterBottom sx={{ 
          color: '#2c3e50', 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          mb: 3
        }}>
          🎯 Estrutura dos Exercícios
        </Typography>
        <Grid container spacing={3}>
          {estruturaExercicios.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper sx={{ 
                padding: '20px', 
                background: 'rgba(255, 255, 255, 0.9)', 
                borderRadius: '15px',
                textAlign: 'center',
                border: `3px solid ${item.color}`,
                transition: 'all 0.3s ease',
                height: '100%',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: `0 10px 30px ${item.color}40`
                }
              }}>
                <Typography variant="h6" gutterBottom sx={{ 
                  color: item.color, 
                  fontWeight: 'bold' 
                }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#2c3e50' }}>
                  {item.subtitle}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper elevation={2} sx={{ 
        background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)', 
        padding: '25px', 
        borderRadius: '15px',
        borderLeft: '5px solid #2196f3'
      }}>
        <Typography variant="h5" gutterBottom sx={{ 
          color: '#1565c0', 
          fontWeight: 'bold',
          mb: 3
        }}>
          📊 Critérios de Avaliação
        </Typography>
        <Grid container spacing={2}>
          {criteriosAvaliacao.map((criterio, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper sx={{ 
                padding: '15px', 
                background: 'rgba(255, 255, 255, 0.9)', 
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)'
                }
              }}>
                <Typography variant="h6" sx={{ 
                  color: '#1565c0', 
                  fontWeight: 'bold',
                  mb: 1
                }}>
                  {criterio.criterio}: {criterio.peso}
                </Typography>
                <Typography variant="body2" sx={{ color: '#424242' }}>
                  {criterio.descricao}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Paper>
  );
};

export default ExerciciosSection;