import React from 'react';
import { Paper, Typography, Box, Grid } from '@mui/material';

const CronogramaSection = () => {
  const cronogramaitems = [
    {
      periodo: 'Semanas 1-4: Fundamentos',
      titulo: '🏗️ Bases Sólidas',
      descricao: 'Aulas 01-04: Algoritmos, funções, estruturas de dados e análise de complexidade. Primeira lista de exercícios.',
      color: '#667eea'
    },
    {
      periodo: 'Semanas 5-8: Recursividade',
      titulo: '🔄 Pensamento Recursivo',
      descricao: 'Aulas 05-06: Recursividade avançada, otimizações e limitações. Prova 1 na semana 8.',
      color: '#764ba2'
    },
    {
      periodo: 'Semanas 9-12: Ordenação',
      titulo: '📊 Algoritmos de Ordenação',
      descricao: 'Aulas 07-08: Algoritmos elementares, Merge Sort, Quick Sort e Shell Sort. Segunda lista de exercícios.',
      color: '#fd79a8'
    },
    {
      periodo: 'Semanas 13-16: Estruturas Avançadas',
      titulo: '🌳 Árvores e Grafos',
      descricao: 'Aulas 09-12: Árvores binárias, AVL e introdução a grafos. Prova 2 na semana 16.',
      color: '#00b894'
    },
    {
      periodo: 'Semanas 17-20: Laboratório',
      titulo: '🔬 Prática Intensiva',
      descricao: 'Aulas 13-14: Laboratório prático e desenvolvimento de projetos finais. Prova 3 na semana 20.',
      color: '#fdcb6e'
    }
  ];

  const distribuicao = [
    { label: 'Aulas Teóricas', horas: '32h', color: '#74b9ff' },
    { label: 'Laboratório Prático', horas: '32h', color: '#00b894' },
    { label: 'Projetos', horas: '16h', color: '#fd79a8' }
  ];

  return (
    <Paper className="content-section" elevation={3}>
      <Typography variant="h4" className="section-title">
        📅 Cronograma do Curso
      </Typography>
      
      {/* Timeline personalizada */}
      <Box sx={{ position: 'relative', mt: 4, mb: 4 }}>
        {/* Linha principal da timeline */}
        <Box
          sx={{
            position: 'absolute',
            left: '30px',
            top: 0,
            bottom: 0,
            width: '3px',
            background: 'linear-gradient(to bottom, #667eea, #764ba2)',
            zIndex: 1
          }}
        />

        {cronogramaitems.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              marginBottom: '30px',
              marginLeft: '70px',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '-50px',
                top: '20px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: item.color,
                border: '4px solid white',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                zIndex: 2
              }
            }}
          >
            <Paper
              elevation={2}
              sx={{
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '20px',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                }
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#e74c3c',
                  marginBottom: '10px'
                }}
              >
                {item.periodo}
              </Typography>
              <Typography variant="h5" gutterBottom sx={{ color: '#2c3e50' }}>
                {item.titulo}
              </Typography>
              <Typography variant="body1" sx={{ color: '#34495e', lineHeight: 1.6 }}>
                {item.descricao}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>

      <Paper elevation={2} sx={{ 
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', 
        padding: '25px', 
        margin: '30px 0', 
        borderRadius: '15px',
        borderLeft: '5px solid #e17055'
      }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2d3436', fontWeight: 'bold' }}>
          📊 Distribuição da Carga Horária
        </Typography>
        <Grid container spacing={3} sx={{ marginTop: '15px' }}>
          {distribuicao.map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper sx={{
                textAlign: 'center',
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '15px',
                border: `3px solid ${item.color}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: `0 10px 30px ${item.color}40`
                }
              }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: 'bold', 
                  color: item.color, 
                  marginBottom: '10px' 
                }}>
                  {item.horas}
                </Typography>
                <Typography variant="h6" sx={{ color: '#2c3e50' }}>
                  {item.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Seção adicional de marcos importantes */}
      <Paper elevation={2} sx={{ 
        background: 'rgba(255, 255, 255, 0.1)', 
        padding: '25px', 
        margin: '20px 0', 
        borderRadius: '15px' 
      }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2c3e50', fontWeight: 'bold' }}>
          🎯 Marcos Importantes
        </Typography>
        <Grid container spacing={2}>
          {[
            { semana: 'Semana 8', evento: 'Prova 1', descricao: 'Fundamentos e análise', color: '#e74c3c' },
            { semana: 'Semana 16', evento: 'Prova 2', descricao: 'Estruturas de dados', color: '#f39c12' },
            { semana: 'Semana 20', evento: 'Prova 3', descricao: 'Algoritmos fundamentais', color: '#27ae60' },
            { semana: 'Final', evento: 'Projeto', descricao: 'Apresentação final', color: '#8e44ad' }
          ].map((marco, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper sx={{
                padding: '15px',
                background: `${marco.color}15`,
                borderRadius: '10px',
                borderLeft: `5px solid ${marco.color}`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateX(5px)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }
              }}>
                <Typography variant="h6" sx={{ color: marco.color, fontWeight: 'bold' }}>
                  {marco.semana}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#2c3e50', fontWeight: '600' }}>
                  {marco.evento}
                </Typography>
                <Typography variant="body2" sx={{ color: '#7f8c8d' }}>
                  {marco.descricao}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Paper>
  );
};

export default CronogramaSection;