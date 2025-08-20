import React from 'react';
import { Paper, Typography, Grid, Box } from '@mui/material';

const EmentaSection = () => {
  const unidades = [
    {
      title: '📚 Unidade I: Fundamentos e Funções (16h)',
      items: [
        'Conceitos básicos de algoritmos e funções',
        'Estruturas de dados homogêneas e heterogêneas',
        'Ponteiros e gerenciamento de memória',
        'Análise de complexidade e notações assintóticas'
      ],
      color: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)'
    },
    {
      title: '🔄 Unidade II: Recursividade (16h)',
      items: [
        'Definições recursivas e implementação',
        'Desenvolvimento de algoritmos recursivos',
        'Limitações e alternativas à recursão',
        'Casos práticos e otimizações'
      ],
      color: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)'
    },
    {
      title: '📊 Unidade III: Algoritmos de Ordenação (16h)',
      items: [
        'Ordenação elementar (Bubble, Selection, Insertion)',
        'Algoritmos avançados (Merge Sort, Quick Sort)',
        'Shell Sort e análise comparativa',
        'Complexidade e escolha de algoritmos'
      ],
      color: 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)'
    },
    {
      title: '🌳 Unidade IV: Estruturas Avançadas (16h)',
      items: [
        'Árvores binárias de busca',
        'Percursos em árvores',
        'Balanceamento e árvores AVL',
        'Introdução a grafos'
      ],
      color: 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)'
    },
    {
      title: '🔬 Unidade V: Projetos e Laboratório (16h)',
      items: [
        'Conceitos e representação de grafos',
        'Roteiro de laboratório prático',
        'Desenvolvimento de projetos',
        'Apresentações e avaliações'
      ],
      color: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)'
    }
  ];

  const avaliacoes = [
    { title: 'Prova 1: 35%', subtitle: 'Fundamentos e estruturas de dados', color: '#74b9ff' },
    { title: 'Prova 2: 35%', subtitle: 'Algoritmos fundamentais', color: '#6c5ce7' },
    { title: 'Exercícios: 20%', subtitle: 'Listas práticas', color: '#00b894' },
    { title: 'Projeto: 10%', subtitle: 'Implementação completa', color: '#fdcb6e' }
  ];

  return (
    <Paper className="content-section" elevation={3}>
      <Typography variant="h4" className="section-title">
        📋 Ementa da Disciplina
      </Typography>
      
      <Grid container spacing={3}>
        {unidades.map((unidade, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper 
              elevation={2}
              sx={{
                background: unidade.color,
                color: 'white',
                padding: '25px',
                borderRadius: '15px',
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                {unidade.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {unidade.items.map((item, itemIndex) => (
                  <Box 
                    component="li" 
                    key={itemIndex} 
                    sx={{ 
                      marginBottom: '8px', 
                      paddingLeft: '20px', 
                      position: 'relative',
                      '&::before': {
                        content: '"▶"',
                        position: 'absolute',
                        left: 0,
                        color: 'rgba(255, 255, 255, 0.7)'
                      }
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper elevation={2} sx={{ 
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', 
        padding: '25px', 
        margin: '30px 0', 
        borderRadius: '15px',
        borderLeft: '5px solid #e17055'
      }}>
        <Typography variant="h5" gutterBottom sx={{ 
          color: '#2d3436', 
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          mb: 3
        }}>
          📊 Sistema de Avaliação
        </Typography>
        <Grid container spacing={2}>
          {avaliacoes.map((avaliacao, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper sx={{ 
                textAlign: 'center', 
                padding: '20px', 
                background: 'rgba(255, 255, 255, 0.9)', 
                borderRadius: '15px',
                border: `3px solid ${avaliacao.color}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: `0 10px 30px ${avaliacao.color}40`
                }
              }}>
                <Typography variant="h6" sx={{ 
                  fontWeight: 'bold', 
                  color: avaliacao.color,
                  mb: 1 
                }}>
                  {avaliacao.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#2c3e50' }}>
                  {avaliacao.subtitle}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Paper>
  );
};

export default EmentaSection;