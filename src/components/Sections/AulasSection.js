import React, { useState } from 'react';
import { Paper, Typography, Grid, Button, Box, Snackbar, Alert, Link } from '@mui/material';
import { Download as DownloadIcon, OpenInNew as OpenIcon } from '@mui/icons-material';
import './AulasSection.css';

const AulasSection = ({ onOpenAulaModal }) => {
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'info' });

  // Função para mostrar notificações
  const showNotification = (message, severity = 'info') => {
    setNotification({ open: true, message, severity });
  };

  // Função para fechar notificações
  const handleCloseNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotification({ ...notification, open: false });
  };

  // Função para abrir código fonte diretamente no GitHub
  const openSourceCode = (codePath, codeName) => {
    try {
      const githubRawUrl = `https://raw.githubusercontent.com/cordeirotelecom/algoritimos_e_complexidade/main${codePath}`;
      showNotification(`🔄 Abrindo código: ${codeName}`, 'info');
      window.open(githubRawUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Erro ao abrir código:', error);
      showNotification(`❌ Erro ao abrir código: ${codeName}`, 'error');
    }
  };

  const aulas = [
    {
      id: 'aula01',
      title: '📘 Aula 01: Algoritmos - Funções e Passagem de Parâmetros',
      description: 'Conceitos fundamentais, funções e parâmetros. Análise matemática e implementação prática.',
      type: 'PDF + MARKDOWN',
      duration: '4 horas',
      level: 'Fundamentos',
      color: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
      isPdf: true
    },
    {
      id: 'aula02',
      title: '📗 Aula 02: Estruturas de Dados - Homogêneas, Heterogêneas e Ponteiros',
      description: 'Arrays, structs e ponteiros. Gerenciamento de memória e análise de performance.',
      type: 'PDF + MARKDOWN',
      duration: '4 horas',
      level: 'Estruturas',
      color: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
      isPdf: true
    },
    {
      id: 'aula03',
      title: '📙 Aula 03: Análise de Algoritmos e Prática de Análise',
      description: 'Complexidade, notações assintóticas e análise matemática rigorosa.',
      type: 'PDF + MARKDOWN',
      duration: '4 horas',
      level: 'Análise',
      color: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
      isPdf: true
    },
    {
      id: 'aula04',
      title: '📕 Aula 04: Definições Recursivas e Como Implementar Recursividade',
      description: 'Conceitos e implementação de recursão. Casos base e otimizações.',
      type: 'PDF + MARKDOWN',
      duration: '4 horas',
      level: 'Recursão',
      color: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
      isPdf: true
    },
    {
      id: 'aulas05-14',
      title: '📚 Aulas 05-14: Conteúdo Avançado',
      description: 'Recursividade avançada, algoritmos de ordenação, árvores, grafos e projetos práticos.',
      type: 'MARKDOWN',
      duration: '40 horas',
      level: 'Avançado',
      color: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
      isPdf: false
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
    window.open('/slides', '_blank');
  };

  const handleCardClick = (aula) => {
    if (aula.isSlides) {
      openSlidesModal();
    } else {
      onOpenAulaModal(aula.id);
    }
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
              onClick={() => handleCardClick(aula)}
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
          📥 Downloads PDFs - Acesso Direto
        </Typography>
        <Typography sx={{ mb: 3, color: '#34495e' }}>
          Clique nos links abaixo para abrir diretamente os PDFs das aulas:
        </Typography>
        
        <Box sx={{ 
          mb: 3, 
          p: 2, 
          bgcolor: 'rgba(52, 152, 219, 0.1)', 
          borderRadius: '8px',
          border: '1px solid rgba(52, 152, 219, 0.2)'
        }}>
          <Typography variant="body2" sx={{ color: '#2c3e50', display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            💡 <strong>Como usar:</strong>
          </Typography>
          <Typography variant="body2" sx={{ color: '#34495e', ml: 3 }}>
            • Clique nos links para abrir os PDFs diretamente em nova aba
          </Typography>
          <Typography variant="body2" sx={{ color: '#34495e', ml: 3 }}>
            • Os PDFs abrirão automaticamente no visualizador do seu navegador
          </Typography>
          <Typography variant="body2" sx={{ color: '#34495e', ml: 3 }}>
            • Use Ctrl+S (ou Cmd+S) para salvar após abrir
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {[
            { file: 'aula01.pdf', name: 'Aula 01 - Algoritmos e Funções' },
            { file: 'aula02.pdf', name: 'Aula 02 - Estruturas de Dados' },
            { file: 'aula03.pdf', name: 'Aula 03 - Análise de Algoritmos' },
            { file: 'aula04.pdf', name: 'Aula 04 - Recursividade' },
            { file: 'aula13.pdf', name: 'Aula 13 - Laboratório' },
            { file: 'aula14.pdf', name: 'Aula 14 - Projetos Finais' },
            { file: 'aulas09-12.pdf', name: 'Aulas 09-12 - Árvores e Grafos' }
          ].map((pdf, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Link
                href={`aulas/pdf/${pdf.file}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'block',
                  width: '100%',
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)',
                  color: 'white',
                  padding: '15px 20px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                    background: 'linear-gradient(135deg, #e84393 0%, #d63384 100%)',
                    textDecoration: 'none'
                  }
                }}
                onClick={() => showNotification(`📖 Abrindo: ${pdf.name}`, 'info')}
              >
                📄 {pdf.name}
              </Link>
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
              <Link
                href={`aulas/pdf/${slide.file}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'block',
                  width: '100%',
                  textDecoration: 'none',
                  background: 'linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)',
                  color: 'white',
                  padding: '15px 20px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                    background: 'linear-gradient(135deg, #e17055 0%, #d63031 100%)',
                    textDecoration: 'none'
                  }
                }}
                onClick={() => showNotification(`🎯 Abrindo: ${slide.name}`, 'info')}
              >
                🎯 {slide.name}
              </Link>
            </Grid>
          ))}
        </Grid>
        
        {/* Seção de exemplos de código */}
        <Typography variant="h6" sx={{ 
          mt: 4, 
          mb: 2, 
          color: '#2c3e50', 
          fontWeight: 'bold' 
        }}>
          💻 Códigos de Exemplo
        </Typography>
        <Grid container spacing={2}>
          {[
            { 
              file: '/exemplos/c/complexidade/exemplos_complexidade.c', 
              name: 'Exemplos C - Complexidade',
              type: 'C'
            },
            { 
              file: '/exemplos/python/complexidade/exemplos_complexidade.py', 
              name: 'Exemplos Python - Complexidade',
              type: 'Python'
            },
            { 
              file: '/exemplos/c/estruturas/array_dinamico.c', 
              name: 'Array Dinâmico em C',
              type: 'C'
            },
            { 
              file: '/exemplos/python/estruturas/array_dinamico.py', 
              name: 'Array Dinâmico em Python',
              type: 'Python'
            }
          ].map((code, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Button
                variant="contained"
                onClick={(e) => {
                  e.stopPropagation();
                  openSourceCode(code.file, code.name);
                }}
                startIcon={<OpenIcon />}
                sx={{
                  width: '100%',
                  background: code.type === 'C' 
                    ? 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)'
                    : 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  fontSize: '0.85rem',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
                  }
                }}
              >
                {code.type === 'C' ? '⚙️' : '🐍'} Ver Código {code.type}
              </Button>
            </Grid>
          ))}
        </Grid>
        
        {/* Aviso sobre disponibilidade dos materiais */}
        <Box sx={{ 
          mt: 4, 
          p: 3, 
          bgcolor: 'rgba(34, 139, 34, 0.1)', 
          borderRadius: '10px',
          border: '1px solid rgba(34, 139, 34, 0.3)',
          textAlign: 'center'
        }}>
          <Typography variant="h6" sx={{ color: '#228b22', mb: 2, fontWeight: 'bold' }}>
            ✅ Status dos Materiais
          </Typography>
          <Typography variant="body2" sx={{ color: '#2d5a2d', mb: 2 }}>
            Os PDFs estão disponíveis e devem abrir diretamente em nova aba ao clicar nos links. 
            Se algum arquivo não abrir, verifique se o seu navegador está bloqueando popups.
          </Typography>
          <Typography variant="body2" sx={{ color: '#228b22', fontWeight: 'bold' }}>
            💡 Dica: Use a IA do ChatBot para tirar dúvidas sobre qualquer conteúdo das aulas!
          </Typography>
        </Box>
      </Paper>

      {/* Snackbar para notificações */}
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity} 
          sx={{ width: '100%' }}
          variant="filled"
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default AulasSection;