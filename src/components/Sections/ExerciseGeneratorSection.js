import React from 'react';
import { Paper, Typography, Button, Box, Grid } from '@mui/material';
import { 
  Quiz as QuizIcon,
  Psychology as PsychologyIcon,
  Analytics as AnalyticsIcon,
  School as SchoolIcon,
  Assignment as AssignmentIcon,
  EmojiEvents as TrophyIcon 
} from '@mui/icons-material';

const ExerciseGeneratorSection = ({ onOpenExerciseGenerator }) => {
  const features = [
    {
      icon: <QuizIcon />,
      title: 'Quiz Interativo',
      description: 'Sistema de quiz onde você responde e recebe feedback imediato',
      color: '#667eea'
    },
    {
      icon: <PsychologyIcon />,
      title: 'IA Adaptativa',
      description: 'IA que gera exercícios baseados no conteúdo real das aulas',
      color: '#e74c3c'
    },
    {
      icon: <TrophyIcon />,
      title: 'Avaliação de Nível',
      description: 'Sistema que avalia seu nível de conhecimento automaticamente',
      color: '#2ecc71'
    },
    {
      icon: <AnalyticsIcon />,
      title: 'Análise Detalhada',
      description: 'Feedback completo com análise por categoria e recomendações',
      color: '#f39c12'
    },
    {
      icon: <SchoolIcon />,
      title: 'Conteúdo Real',
      description: 'Exercícios baseados no material real das aulas da disciplina',
      color: '#9b59b6'
    },
    {
      icon: <AssignmentIcon />,
      title: 'Correção Automática',
      description: 'Sistema inteligente de correção com explicações detalhadas',
      color: '#1abc9c'
    }
  ];

  return (
    <Paper className="content-section" elevation={3}>
      <Typography variant="h4" className="section-title">
        🎯 Quiz Interativo com IA
      </Typography>

      {/* Hero Section */}
      <Paper elevation={2} sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '40px',
        borderRadius: '20px',
        textAlign: 'center',
        mb: 4
      }}>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          🧠 Teste Seus Conhecimentos
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
          Sistema inteligente que gera exercícios baseados no conteúdo real das aulas,
          corrige automaticamente e avalia seu nível de conhecimento
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={onOpenExerciseGenerator}
          startIcon={<QuizIcon />}
          sx={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '30px',
            padding: '15px 30px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.3)',
              transform: 'translateY(-3px)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }
          }}
        >
          Iniciar Quiz Interativo
        </Button>
      </Paper>

      {/* Como Funciona */}
      <Paper elevation={2} sx={{
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '30px',
        borderRadius: '15px',
        mb: 4,
        backdropFilter: 'blur(10px)'
      }}>
        <Typography variant="h5" gutterBottom sx={{ 
          color: '#2c3e50', 
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 3
        }}>
          🎯 Como Funciona o Quiz
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2" sx={{ color: '#667eea', mb: 2 }}>1️⃣</Typography>
              <Typography variant="h6" gutterBottom sx={{ color: '#2c3e50', fontWeight: 'bold' }}>
                Configure
              </Typography>
              <Typography sx={{ color: '#34495e' }}>
                Escolha as aulas, número de questões e nível de dificuldade
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2" sx={{ color: '#e74c3c', mb: 2 }}>2️⃣</Typography>
              <Typography variant="h6" gutterBottom sx={{ color: '#2c3e50', fontWeight: 'bold' }}>
                Responda
              </Typography>
              <Typography sx={{ color: '#34495e' }}>
                Responda as questões uma por uma e receba feedback imediato
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2" sx={{ color: '#2ecc71', mb: 2 }}>3️⃣</Typography>
              <Typography variant="h6" gutterBottom sx={{ color: '#2c3e50', fontWeight: 'bold' }}>
                Avalie
              </Typography>
              <Typography sx={{ color: '#34495e' }}>
                Veja seu desempenho, nível de conhecimento e recomendações
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Features Grid */}
      <Typography variant="h5" gutterBottom sx={{ 
        color: '#2c3e50', 
        fontWeight: 'bold', 
        mb: 3, 
        textAlign: 'center' 
      }}>
        🚀 Recursos Avançados
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={2}
              sx={{
                padding: '25px',
                height: '100%',
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '15px',
                border: `3px solid ${feature.color}20`,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: `0 15px 40px ${feature.color}40`,
                  borderColor: feature.color
                }
              }}
            >
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                textAlign: 'center',
                height: '100%'
              }}>
                <Box sx={{ 
                  fontSize: '3rem', 
                  color: feature.color, 
                  mb: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom sx={{ 
                  color: feature.color, 
                  fontWeight: 'bold',
                  mb: 2
                }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: '#34495e',
                  lineHeight: 1.6,
                  flexGrow: 1
                }}>
                  {feature.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Níveis de Conhecimento */}
      <Paper elevation={2} sx={{
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '30px',
        borderRadius: '15px',
        mb: 4,
        backdropFilter: 'blur(10px)'
      }}>
        <Typography variant="h5" gutterBottom sx={{ 
          color: '#2c3e50', 
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 3
        }}>
          🏆 Níveis de Conhecimento
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center', p: 2, background: 'rgba(231, 76, 60, 0.1)', borderRadius: '10px' }}>
              <Typography variant="h4" sx={{ mb: 1 }}>📖</Typography>
              <Typography variant="h6" sx={{ color: '#e74c3c', fontWeight: 'bold' }}>
                Insuficiente
              </Typography>
              <Typography variant="body2" sx={{ color: '#34495e' }}>
                Abaixo de 60%
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center', p: 2, background: 'rgba(243, 156, 18, 0.1)', borderRadius: '10px' }}>
              <Typography variant="h4" sx={{ mb: 1 }}>📚</Typography>
              <Typography variant="h6" sx={{ color: '#f39c12', fontWeight: 'bold' }}>
                Regular
              </Typography>
              <Typography variant="body2" sx={{ color: '#34495e' }}>
                60% - 74%
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center', p: 2, background: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px' }}>
              <Typography variant="h4" sx={{ mb: 1 }}>👍</Typography>
              <Typography variant="h6" sx={{ color: '#3498db', fontWeight: 'bold' }}>
                Bom
              </Typography>
              <Typography variant="body2" sx={{ color: '#34495e' }}>
                75% - 89%
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center', p: 2, background: 'rgba(46, 204, 113, 0.1)', borderRadius: '10px' }}>
              <Typography variant="h4" sx={{ mb: 1 }}>🏆</Typography>
              <Typography variant="h6" sx={{ color: '#2ecc71', fontWeight: 'bold' }}>
                Excelente
              </Typography>
              <Typography variant="body2" sx={{ color: '#34495e' }}>
                90% ou mais
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#2c3e50' }}>
          Pronto para testar seus conhecimentos em Algoritmos e Complexidade?
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={onOpenExerciseGenerator}
          startIcon={<PsychologyIcon />}
          sx={{
            background: 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)',
            color: 'white',
            borderRadius: '25px',
            padding: '12px 30px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              background: 'linear-gradient(135deg, #00a085 0%, #00b8b8 100%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 8px 25px rgba(0, 184, 148, 0.4)'
            }
          }}
        >
          Começar Quiz Agora
        </Button>
      </Box>
    </Paper>
  );
};

export default ExerciseGeneratorSection;