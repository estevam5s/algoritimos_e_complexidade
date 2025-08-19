
import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

const EmentaSection = () => {
  const unidades = [
    {
      title: '📚 Unidade I: Fundamentos e Funções (16h)',
      items: [
        'Conceitos básicos de algoritmos e funções',
        'Estruturas de dados homogêneas e heterogêneas',
        'Ponteiros e gerenciamento de memória',
        'Análise de complexidade e notações assintóticas'
      ]
    },
    {
      title: '🔄 Unidade II: Recursividade (16h)',
      items: [
        'Definições recursivas e implementação',
        'Desenvolvimento de algoritmos recursivos',
        'Limitações e alternativas à recursão',
        'Casos práticos e otimizações'
      ]
    },
    {
      title: '📊 Unidade III: Algoritmos de Ordenação (16h)',
      items: [
        'Ordenação elementar (Bubble, Selection, Insertion)',
        'Algoritmos avançados (Merge Sort, Quick Sort)',
        'Shell Sort e análise comparativa',
        'Complexidade e escolha de algoritmos'
      ]
    },
    {
      title: '🌳 Unidade IV: Estruturas Avançadas (16h)',
      items: [
        'Árvores binárias de busca',
        'Percursos em árvores',
        'Balanceamento e árvores AVL',
        'Introdução a grafos'
      ]
    },
    {
      title: '🔬 Unidade V: Projetos e Laboratório (16h)',
      items: [
        'Conceitos e representação de grafos',
        'Roteiro de laboratório prático',
        'Desenvolvimento de projetos',
        'Apresentações e avaliações'
      ]
    }
  ];

  return (
    <Paper className="content-section" elevation={3}>
      <Typography variant="h4" className="section-title">
        📋 Ementa da Disciplina
      </Typography>
      
      <Grid container spacing={3}>
        {unidades.map((unidade, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper className="unidade-card" elevation={2}>
              <Typography variant="h6" gutterBottom>
                {unidade.title}
              </Typography>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {unidade.items.map((item, itemIndex) => (
                  <li key={itemIndex} style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'rgba(255, 255, 255, 0.7)' }}>▶</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper className="highlight-box" elevation={2} style={{ marginTop: '30px' }}>
        <Typography variant="h5" className="highlight-title">
          📊 Sistema de Avaliação
        </Typography>
        <Grid container spacing={2} style={{ marginTop: '15px' }}>
          {[
            { title: 'Prova 1: 25%', subtitle: 'Fundamentos e análise' },
            { title: 'Prova 2: 25%', subtitle: 'Estruturas de dados' },
            { title: 'Prova 3: 25%', subtitle: 'Algoritmos fundamentais' },
            { title: 'Exercícios: 15%', subtitle: 'Listas práticas' },
            { title: 'Projeto: 10%', subtitle: 'Implementação completa' }
          ].map((avaliacao, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <Paper style={{ 
                textAlign: 'center', 
                padding: '15px', 
                background: `rgba(${index * 60 + 100}, ${index * 40 + 150}, 255, 0.1)`, 
                borderRadius: '10px' 
              }}>
                <Typography variant="h6">{avaliacao.title}</Typography>
                <Typography variant="body2">{avaliacao.subtitle}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Paper>
  );
};

export default EmentaSection;
