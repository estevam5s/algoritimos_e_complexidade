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
      level: 'Fundamentos',
      color: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)'
    },
    {
      id: 'aula02',
      title: '📗 Aula 02: Estruturas de Dados - Homogêneas, Heterogêneas e Ponteiros',
      description: 'Arrays, structs e ponteiros. Gerenciamento de memória e análise de performance.',
      type: 'PDF + MARKDOWN',
      duration: '4 horas',
      level: 'Estruturas',
      color: 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)'
    },
    {
      id: 'aula03',
      title: '📙 Aula 03: Análise de Algoritmos e Prática de Análise',
      description: 'Complexidade, notações assintóticas e análise matemática rigorosa.',
      type: 'PDF + MARKDOWN',
      duration: '4 horas',
      level: 'Análise',
      color: 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)'
    },
    {
      id: 'aula04',
      title: '📕 Aula 04: Definições Recursivas e Como Implementar Recursividade',
      description: 'Conceitos e implementação de recursão. Casos base e otimizações.',
      type: 'PDF + MARKDOWN',
      duration: '4 horas',
      level: 'Recursão',
      color: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)'
    },
    {
      id: 'aula05',
      title: '🔄 Aula 05: Desenvolvendo Algoritmos com Recursividade',
      description: 'Backtracking, permutações, N-rainhas e algoritmos recursivos complexos.',
      type: 'MARKDOWN',
      duration: '4 horas',
      level: 'Recursão Avançada',
      color: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)'
    },
    {
      id: 'aula06',
      title: '⚠️ Aula 06: Quando Não Usar Recursividade',
      description: 'Limitações da recursão, otimizações e conversão para algoritmos iterativos.',
      type: 'MARKDOWN',
      duration: '4 horas',
      level: 'Otimização',
      color: 'linear-gradient(135deg, #e17055 0%, #d63031 100%)'
    },
    {
      id: 'aula07',
      title: '📊 Aula 07: Análise Ordenação Elementar e Mergesort',
      description: 'Bubble Sort, Selection Sort, Insertion Sort e Merge Sort com análise completa.',
      type: 'MARKDOWN',
      duration: '4 horas',
      level: 'Ordenação',
      color: 'linear-gradient(135deg, #00cec9 0%, #55a3ff 100%)'
    },
    {
      id: 'aula08',
      title: '⚡ Aula 08: Quicksort e Shellsort',
      description: 'Quick Sort com diferentes pivôs, Shell Sort e comparação de algoritmos.',
      type: 'MARKDOWN',
      duration: '4 horas',
      level: 'Ordenação Avançada',
      color: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)'
    },
    {
      id: 'aula09',
      title: '🌳 Aula 09: Árvore Binária de Busca',
      description: 'Conceitos, implementação e operações em árvores binárias de busca.',
      type: 'MARKDOWN',
      duration: '4 horas',
      level: 'Estruturas Avançadas',
      color: 'linear-gradient(135deg, #55a3ff 0%, #74b9ff 100%)'
    },
    {
      id: 'aula10',
      title: '🔍 Aula 10: Percurso em Árvores Binárias',
      description: 'Percursos em ordem, pré-ordem, pós-ordem e por nível.',
      type: 'MARKDOWN',
      duration: '4 horas',
      level: 'Árvores',
      color: 'linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%)'
    },
    {
      id: 'aula11',
      title: '⚖️ Aula 11: Balanceamento de Árvore e Árvore AVL',
      description: 'Rotações, fator de balanceamento e implementação de árvores AVL.',
      type: 'MARKDOWN',
      duration: '4 horas',
      level: 'Árvores Balanceadas',
      color: 'linear-gradient(135deg, #00b894 0%, #55efc4 100%)'
    },
    {
      id: 'aula12',
      title: '🕸️ Aula 12: Grafos - Conceitos e Representação',
      description: 'Definições, representações, DFS, BFS e algoritmos em grafos.',
      type: 'MARKDOWN',
      duration: '4 horas',
      level: 'Grafos',
      color: 'linear-gradient(135deg, #e17055 0%, #fab1a0 100%)'
    },
    {
      id: 'aula13',
      title: '🔬 Aula 13: Roteiro de Laboratório',
      description: 'Laboratórios práticos com implementações completas e análises.',
      type: 'PDF + MARKDOWN',
      duration: '4 horas',
      level: 'Laboratório',
      color: 'linear-gradient(135deg, #6c5ce7 0%, #74b9ff 100%)'
    },
    {
      id: 'aula14',
      title: '🚀 Aula 14: Projetos Finais',
      description: 'Desenvolvimento de projetos complexos aplicando todos os conceitos.',
      type: 'PDF + MARKDOWN',
      duration: '4 horas',
      level: 'Projetos',
      color: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)'
    },
    {
      id: 'slides',
      title: '🎯 Slides das Aulas',
      description: 'Apresentações em formato Marp para aulas interativas e dinâmicas.',
      type: 'SLIDES',
      duration: 'Formato Marp',
      level: 'Apresentações',
      color: 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)',
      isSlides: true
    }
  ];

  const openSlidesModal = () => {
    // Criar uma função específica para slides ou redirecionar
    window.open('/slides', '_blank');
  };

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
              onClick={() => aula.isSlides ? openSlidesModal() : onOpenAulaModal(aula.id)}
              sx={{
                background: aula.color,
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
                {aula.type}
              </Box>
              
              <Typography variant="h6" sx={{ 
                marginBottom: '15px', 
                fontWeight: 'bold',
                lineHeight: 1.3
              }}>
                {aula.title}
              </Typography>
              
              <Typography sx={{ 
                marginBottom: '20px', 
                opacity: 0.9, 
                flexGrow: 1,
                lineHeight: 1.5
              }}>
                {aula.description}
              </Typography>
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                paddingTop: '15px',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                marginTop: 'auto'
              }}>
                <Typography sx={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  {aula.duration} • {aula.level}
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
                  {aula.isSlides ? 'Ver Slides' : 'Ver Conteúdo'}
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ 
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
          📥 Downloads PDFs
        </Typography>
        <Typography sx={{ mb: 3, color: '#34495e' }}>
          Todos os PDFs estão disponíveis para download direto:
        </Typography>
        <Grid container spacing={2}>
          {[
            { file: 'aula01.pdf', name: 'Aula 01 PDF' },
            { file: 'aula02.pdf', name: 'Aula 02 PDF' },
            { file: 'aula03.pdf', name: 'Aula 03 PDF' },
            { file: 'aula04.pdf', name: 'Aula 04 PDF' },
            { file: 'aula13.pdf', name: 'Aula 13 PDF' },
            { file: 'aula14.pdf', name: 'Aula 14 PDF' },
            { file: 'aulas09-12.pdf', name: 'Aulas 09-12 PDF' }
          ].map((pdf, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Button
                variant="contained"
                href={`/aulas/pdf/${pdf.file}`}
                target="_blank"
                sx={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
                  color: 'white',
                  padding: '15px',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
                  }
                }}
              >
                📄 {pdf.name}
              </Button>
            </Grid>
          ))}
        </Grid>
        
        <Typography variant="h6" sx={{ 
          mt: 4, 
          mb: 2, 
          color: '#2c3e50', 
          fontWeight: 'bold' 
        }}>
          🎯 Slides em PDF
        </Typography>
        <Grid container spacing={2}>
          {[
            { file: 'slides_aula01.pdf', name: 'Slides Aula 01' },
            { file: 'slides_aula01_premium.pdf', name: 'Slides Aula 01 Premium' },
            { file: 'slides_aula02.pdf', name: 'Slides Aula 02' },
            { file: 'slides_aula02_melhorado.pdf', name: 'Slides Aula 02 Melhorado' }
          ].map((slide, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Button
                variant="contained"
                href={`/aulas/pdf/${slide.file}`}
                target="_blank"
                sx={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)',
                  color: 'white',
                  padding: '15px',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
                  }
                }}
              >
                🎯 {slide.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Paper>
  );
};

export default AulasSection;