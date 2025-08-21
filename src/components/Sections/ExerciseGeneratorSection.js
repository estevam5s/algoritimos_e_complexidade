import React from 'react';
import { Paper, Typography, Button, Box, Grid } from '@mui/material';
import { 
  AutoFixHigh as AutoFixHighIcon,
  Psychology as PsychologyIcon,
  Analytics as AnalyticsIcon,
  School as SchoolIcon,
  Settings as SettingsIcon,
  History as HistoryIcon 
} from '@mui/icons-material';

const ExerciseGeneratorSection = ({ onOpenExerciseGenerator }) => {
  const features = [
    {
      icon: <PsychologyIcon />,
      title: 'IA Avançada',
      description: 'Motor de IA com controle de criatividade (temperatura 0.1-1.0)',
      color: '#667eea'
    },
    {
      icon: <AnalyticsIcon />,
      title: 'Análise Inteligente',
      description: 'Categorização automática e análise de resultados',
      color: '#e74c3c'
    },
    {
      icon: <SettingsIcon />,
      title: 'Configuração Avançada',
      description: 'Múltiplas opções de personalização e configuração',
      color: '#2ecc71'
    },
    {
      icon: <HistoryIcon />,
      title: 'Sistema Anti-Repetição',
      description: 'Histórico inteligente para evitar exercícios duplicados',
      color: '#f39c12'
    },
    {
      icon: <SchoolIcon />,
      title: 'Categorização Automática',
      description: 'Exercícios categorizados automaticamente (Conceitual, Aplicativa, etc.)',
      color: '#9b59b6'
    },
    {
      icon: <AutoFixHighIcon />,
      title: 'Prompt Builder',
      description: 'Construção inteligente de prompts baseada em configurações',
      color: '#1abc9c'
    }
  ];

  return (
    <Paper className="content-section" elevation={3}>
      <Typography variant="h4" className="section-title">
        🤖 Gerador Avançado de Exercícios com IA
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
          🚀 Sistema Inteligente
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
          Crie exercícios únicos e personalizados usando Inteligência Artificial avançada
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={onOpenExerciseGenerator}
          startIcon={<AutoFixHighIcon />}
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
          Abrir Gerador Avançado
        </Button>
      </Paper>

      {/* Features Grid */}
      <Typography variant="h5" gutterBottom sx={{ 
        color: '#2c3e50', 
        fontWeight: 'bold', 
        mb: 3, 
        textAlign: 'center' 
      }}>
        🎯 Funcionalidades Avançadas
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

      {/* Technical Specs */}
      <Paper elevation={2} sx={{
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '30px',
        borderRadius: '15px',
        backdropFilter: 'blur(10px)'
      }}>
        <Typography variant="h5" gutterBottom sx={{ 
          color: '#2c3e50', 
          fontWeight: 'bold',
          textAlign: 'center',
          mb: 3
        }}>
          ⚙️ Especificações Técnicas
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ color: '#667eea', fontWeight: 'bold' }}>
              🧠 Motor de IA
            </Typography>
            <ul style={{ color: '#34495e', lineHeight: 1.8 }}>
              <li><strong>Modelo:</strong> Gemini 2.0 Flash</li>
              <li><strong>Controle de Temperatura:</strong> 0.1 - 1.0</li>
              <li><strong>TopK/TopP:</strong> Configuração automática</li>
              <li><strong>Tokens:</strong> Até 4000 tokens por geração</li>
              <li><strong>Contexto:</strong> Material completo da disciplina</li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ color: '#e74c3c', fontWeight: 'bold' }}>
              📊 Categorias de Exercícios
            </Typography>
            <ul style={{ color: '#34495e', lineHeight: 1.8 }}>
              <li><strong>Conceitual:</strong> Fundamentos teóricos</li>
              <li><strong>Comparativa:</strong> Análise entre algoritmos</li>
              <li><strong>Aplicativa:</strong> Problemas práticos</li>
              <li><strong>Analítica:</strong> Complexidade e performance</li>
              <li><strong>Estratégica:</strong> Escolha de soluções</li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ color: '#2ecc71', fontWeight: 'bold' }}>
              🎛️ Configurações Disponíveis
            </Typography>
            <ul style={{ color: '#34495e', lineHeight: 1.8 }}>
              <li><strong>Quantidade:</strong> 1-20 exercícios</li>
              <li><strong>Tipo:</strong> Múltipla escolha, V/F, Dissertativa</li>
              <li><strong>Complexidade:</strong> Básico, Médio, Avançado</li>
              <li><strong>Foco:</strong> Conceitos, Aplicação, Casos práticos</li>
              <li><strong>Dificuldade Gradual:</strong> Progressão automática</li>
            </ul>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ color: '#f39c12', fontWeight: 'bold' }}>
              💾 Funcionalidades Extras
            </Typography>
            <ul style={{ color: '#34495e', lineHeight: 1.8 }}>
              <li><strong>Histórico Persistente:</strong> LocalStorage</li>
              <li><strong>Anti-Repetição:</strong> Análise de similaridade</li>
              <li><strong>Exportação:</strong> JSON estruturado</li>
              <li><strong>Análise:</strong> Métricas detalhadas</li>
              <li><strong>Auto-Save:</strong> Configurações salvas</li>
            </ul>
          </Grid>
        </Grid>
      </Paper>

      {/* Call to Action */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ color: '#2c3e50' }}>
          Pronto para gerar exercícios únicos e inteligentes?
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
          Começar a Gerar Exercícios
        </Button>
      </Box>
    </Paper>
  );
};

export default ExerciseGeneratorSection;