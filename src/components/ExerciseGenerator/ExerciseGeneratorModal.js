import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Grid,
  Paper,
  Switch,
  FormControlLabel,
  TextField,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  LinearProgress,
  Card,
  CardContent,
  Alert,
  Tooltip
} from '@mui/material';
import {
  Close as CloseIcon,
  Settings as SettingsIcon,
  Psychology as PsychologyIcon,
  AutoFixHigh as AutoFixHighIcon,
  History as HistoryIcon,
  Clear as ClearIcon,
  Download as DownloadIcon,
  ExpandMore as ExpandMoreIcon,
  PlayArrow as PlayArrowIcon,
  Refresh as RefreshIcon,
  Analytics as AnalyticsIcon,
  School as SchoolIcon,
  Quiz as QuizIcon
} from '@mui/icons-material';
import './ExerciseGeneratorModal.css';

const GEMINI_API_KEY = 'AIzaSyCRfarEDTrIlXNPdonkf-KNAU414KrGnEQ';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const ExerciseGeneratorModal = ({ open, onClose }) => {
  // Estados principais
  const [exerciseConfig, setExerciseConfig] = useState({
    quantidade: 5,
    materias: ['algoritmos', 'estruturas'],
    complexidade: 'medio',
    temperatura: 0.7,
    tipoQuestao: 'multipla_escolha',
    focoConteudo: 'geral',
    evitarRepetidas: true,
    incluirExplicacoes: true,
    dificuldadeGradual: false,
    topK: 40,
    topP: 0.8
  });

  const [generatedExercises, setGeneratedExercises] = useState([]);
  const [exerciseHistory, setExerciseHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentView, setCurrentView] = useState('config'); // config, exercises, analysis
  const [analysisData, setAnalysisData] = useState(null);
  const [errors, setErrors] = useState([]);

  // Refs
  const scrollRef = useRef(null);

  // Configurações de temperatura
  const temperatureLabels = {
    0.1: { label: 'Muito Conservadora', description: 'Exercícios padrão e previsíveis' },
    0.3: { label: 'Conservadora', description: 'Exercícios bem estruturados' },
    0.5: { label: 'Equilibrada', description: 'Mix de criatividade e estrutura' },
    0.7: { label: 'Criativa', description: 'Exercícios inovadores' },
    0.9: { label: 'Muito Criativa', description: 'Exercícios únicos e desafiadores' }
  };

  // Categorias de exercícios
  const categories = {
    conceitual: { 
      name: 'Conceitual', 
      color: '#3498db',
      description: 'Exercícios sobre conceitos teóricos fundamentais'
    },
    comparativa: { 
      name: 'Comparativa', 
      color: '#e74c3c',
      description: 'Comparação entre diferentes algoritmos e estruturas'
    },
    aplicativa: { 
      name: 'Aplicativa', 
      color: '#2ecc71',
      description: 'Aplicação prática de algoritmos em problemas reais'
    },
    analitica: { 
      name: 'Analítica', 
      color: '#f39c12',
      description: 'Análise de complexidade e performance'
    },
    estrategica: { 
      name: 'Estratégica', 
      color: '#9b59b6',
      description: 'Escolha de algoritmos e estratégias de solução'
    }
  };

  // Carregar dados salvos
  useEffect(() => {
    const savedConfig = localStorage.getItem('exercise_generator_config');
    const savedHistory = localStorage.getItem('exercise_generator_history');
    
    if (savedConfig) {
      setExerciseConfig(JSON.parse(savedConfig));
    }
    
    if (savedHistory) {
      setExerciseHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Salvar configurações
  useEffect(() => {
    localStorage.setItem('exercise_generator_config', JSON.stringify(exerciseConfig));
  }, [exerciseConfig]);

  // Salvar histórico
  useEffect(() => {
    localStorage.setItem('exercise_generator_history', JSON.stringify(exerciseHistory));
  }, [exerciseHistory]);

  // Atualizar configurações automaticamente baseadas na temperatura
  useEffect(() => {
    const temp = exerciseConfig.temperatura;
    setExerciseConfig(prev => ({
      ...prev,
      topK: Math.round(20 + (temp * 40)), // 20-60
      topP: Math.round((0.6 + (temp * 0.4)) * 100) / 100 // 0.6-1.0
    }));
  }, [exerciseConfig.temperatura]);

  // Função para gerar prompt inteligente
  const buildIntelligentPrompt = () => {
    const { quantidade, materias, complexidade, tipoQuestao, focoConteudo, incluirExplicacoes, dificuldadeGradual } = exerciseConfig;
    
    let prompt = `Você é um EXPERT em geração de exercícios educacionais para a disciplina "Algoritmos e Complexidade" (ARA0174).

🎯 CONFIGURAÇÃO SOLICITADA:
- Quantidade: ${quantidade} exercícios
- Matérias: ${materias.join(', ')}
- Complexidade: ${complexidade}
- Tipo: ${tipoQuestao}
- Foco: ${focoConteudo}
- Dificuldade gradual: ${dificuldadeGradual ? 'SIM' : 'NÃO'}
- Incluir explicações: ${incluirExplicacoes ? 'SIM' : 'NÃO'}

📚 CONTEÚDO ESPECÍFICO DA DISCIPLINA:
- Algoritmos fundamentais e análise de complexidade
- Estruturas de dados homogêneas e heterogêneas
- Recursividade e backtracking
- Algoritmos de ordenação (Bubble, Selection, Merge, Quick, Shell)
- Árvores binárias, BST, AVL
- Grafos e algoritmos de busca (DFS, BFS)
- Análise de performance e otimização

🎯 DISTRIBUIÇÃO OBRIGATÓRIA POR CATEGORIA:
- Conceitual: ${Math.ceil(quantidade * 0.3)} exercícios
- Aplicativa: ${Math.ceil(quantidade * 0.3)} exercícios  
- Analítica: ${Math.ceil(quantidade * 0.2)} exercícios
- Comparativa: ${Math.ceil(quantidade * 0.1)} exercícios
- Estratégica: ${Math.ceil(quantidade * 0.1)} exercícios

`;

    // Adicionar histórico para evitar repetições
    if (exerciseConfig.evitarRepetidas && exerciseHistory.length > 0) {
      const recentExercises = exerciseHistory.slice(-20).map(ex => ex.question).join('\n- ');
      prompt += `\n❌ EVITAR QUESTÕES SIMILARES A ESTAS RECENTES:\n- ${recentExercises}\n`;
    }

    // Instruções específicas por tipo
    if (tipoQuestao === 'multipla_escolha') {
      prompt += `\n📝 FORMATO MÚLTIPLA ESCOLHA:
- 4 alternativas (A, B, C, D)
- Apenas 1 alternativa correta
- Distratores plausíveis e educativos
- Alternativas balanceadas em tamanho`;
    } else if (tipoQuestao === 'verdadeiro_falso') {
      prompt += `\n📝 FORMATO VERDADEIRO/FALSO:
- Afirmações claras e precisas
- Evitar palavras absolutas (sempre, nunca)
- Incluir justificativa para a resposta`;
    } else {
      prompt += `\n📝 FORMATO DISSERTATIVO:
- Questões abertas que exigem análise
- Critérios claros de avaliação
- Possibilidade de múltiplas abordagens corretas`;
    }

    prompt += `\n\n🎯 INSTRUÇÃO FINAL:
Gere EXATAMENTE ${quantidade} exercícios únicos, inovadores e tecnicamente precisos. 
Distribua entre as categorias especificadas.
Use o formato JSON estruturado conforme exemplo:

{
  "exercises": [
    {
      "id": "ex1",
      "type": "${tipoQuestao}",
      "category": "conceitual",
      "difficulty": "basico",
      "question": "Questão específica e técnica...",
      "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
      "correct_answer": "A",
      "explanation": "Explicação detalhada...",
      "reference": "Aula 01 - Algoritmos Fundamentais",
      "complexity": "O(n)",
      "tags": ["algoritmos", "complexidade"]
    }
  ]
}

Seja CRIATIVO, TÉCNICO e EDUCATIVO. Gere exercícios que realmente testem o conhecimento profundo dos estudantes!`;

    return prompt;
  };

  // Função para chamar a API Gemini
  const callGeminiAPI = async (prompt) => {
    const requestBody = {
      contents: [{
        parts: [{ text: prompt }]
      }],
      generationConfig: {
        temperature: exerciseConfig.temperatura,
        topK: exerciseConfig.topK,
        topP: exerciseConfig.topP,
        maxOutputTokens: 4000,
        candidateCount: 1
      }
    };

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Resposta inválida da API');
    }
  };

  // Função para gerar exercícios
  const generateExercises = async () => {
    setLoading(true);
    setErrors([]);
    
    try {
      const prompt = buildIntelligentPrompt();
      const response = await callGeminiAPI(prompt);
      
      // Extrair JSON da resposta
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('Formato JSON não encontrado na resposta');
      }
      
      const exercisesData = JSON.parse(jsonMatch[0]);
      
      if (!exercisesData.exercises || !Array.isArray(exercisesData.exercises)) {
        throw new Error('Estrutura de exercícios inválida');
      }

      // Adicionar metadados
      const enhancedExercises = exercisesData.exercises.map((ex, index) => ({
        ...ex,
        id: `ex_${Date.now()}_${index}`,
        generated_at: new Date().toISOString(),
        config_used: { ...exerciseConfig }
      }));

      setGeneratedExercises(enhancedExercises);
      
      // Adicionar ao histórico
      const newHistoryEntry = {
        timestamp: new Date().toISOString(),
        config: { ...exerciseConfig },
        exercises: enhancedExercises,
        count: enhancedExercises.length
      };
      
      setExerciseHistory(prev => [...prev.slice(-49), newHistoryEntry]);
      
      // Gerar análise
      generateAnalysis(enhancedExercises);
      
      // Mudar para visualização dos exercícios
      setCurrentView('exercises');
      
    } catch (error) {
      console.error('Erro ao gerar exercícios:', error);
      setErrors([error.message]);
    } finally {
      setLoading(false);
    }
  };

  // Função para gerar análise
  const generateAnalysis = (exercises) => {
    const categoryCount = {};
    const difficultyCount = {};
    const typeCount = {};
    
    exercises.forEach(ex => {
      categoryCount[ex.category] = (categoryCount[ex.category] || 0) + 1;
      difficultyCount[ex.difficulty] = (difficultyCount[ex.difficulty] || 0) + 1;
      typeCount[ex.type] = (typeCount[ex.type] || 0) + 1;
    });

    setAnalysisData({
      totalExercises: exercises.length,
      categoryDistribution: categoryCount,
      difficultyDistribution: difficultyCount,
      typeDistribution: typeCount,
      averageComplexity: exercises.length > 0 ? 'O(n log n)' : 'N/A',
      generationTime: new Date().toLocaleTimeString(),
      configUsed: { ...exerciseConfig }
    });
  };

  // Função para limpar histórico
  const clearHistory = () => {
    setExerciseHistory([]);
    localStorage.removeItem('exercise_generator_history');
  };

  // Função para exportar exercícios
  const exportExercises = () => {
    const dataStr = JSON.stringify(generatedExercises, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `exercicios_${Date.now()}.json`;
    link.click();
  };

  // Render da configuração
  const renderConfiguration = () => (
    <Box className="exercise-config">
      <Typography variant="h6" gutterBottom className="config-section-title">
        🎛️ Configurações Avançadas
      </Typography>

      {/* Controle de Criatividade */}
      <Paper className="config-section" elevation={2}>
        <Typography variant="h6" gutterBottom>
          🧠 Controle de Criatividade da IA
        </Typography>
        
        <Box className="temperature-container">
          <Slider
            value={exerciseConfig.temperatura}
            onChange={(e, value) => setExerciseConfig(prev => ({ ...prev, temperatura: value }))}
            min={0.1}
            max={1.0}
            step={0.1}
            marks={[
              { value: 0.1, label: 'Conservadora' },
              { value: 0.5, label: 'Equilibrada' },
              { value: 1.0, label: 'Criativa' }
            ]}
            className="temperature-slider"
          />
          
          <Box className="temp-info">
            <Typography variant="h6" className="temp-value">
              {exerciseConfig.temperatura}
            </Typography>
            <Typography variant="body2" className="temp-description">
              {temperatureLabels[exerciseConfig.temperatura]?.description || 'Configuração personalizada'}
            </Typography>
            <Typography variant="caption" className="temp-technical">
              topK: {exerciseConfig.topK} | topP: {exerciseConfig.topP}
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* Configurações de Conteúdo */}
      <Paper className="config-section" elevation={2}>
        <Typography variant="h6" gutterBottom>
          📚 Configurações de Conteúdo
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Quantidade de Exercícios"
              value={exerciseConfig.quantidade}
              onChange={(e) => setExerciseConfig(prev => ({ ...prev, quantidade: parseInt(e.target.value) }))}
              inputProps={{ min: 1, max: 20 }}
              fullWidth
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Complexidade</InputLabel>
              <Select
                value={exerciseConfig.complexidade}
                onChange={(e) => setExerciseConfig(prev => ({ ...prev, complexidade: e.target.value }))}
              >
                <MenuItem value="basico">Básico</MenuItem>
                <MenuItem value="medio">Médio</MenuItem>
                <MenuItem value="avancado">Avançado</MenuItem>
                <MenuItem value="misto">Misto</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Tipo de Questão</InputLabel>
              <Select
                value={exerciseConfig.tipoQuestao}
                onChange={(e) => setExerciseConfig(prev => ({ ...prev, tipoQuestao: e.target.value }))}
              >
                <MenuItem value="multipla_escolha">Múltipla Escolha</MenuItem>
                <MenuItem value="verdadeiro_falso">Verdadeiro/Falso</MenuItem>
                <MenuItem value="dissertativa">Dissertativa</MenuItem>
                <MenuItem value="misto">Misto</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Foco do Conteúdo</InputLabel>
              <Select
                value={exerciseConfig.focoConteudo}
                onChange={(e) => setExerciseConfig(prev => ({ ...prev, focoConteudo: e.target.value }))}
              >
                <MenuItem value="geral">Mix Geral</MenuItem>
                <MenuItem value="conceitos">Conceitos Fundamentais</MenuItem>
                <MenuItem value="aplicacao">Aplicação Prática</MenuItem>
                <MenuItem value="casos_praticos">Casos Práticos</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Matérias Selecionadas */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1" gutterBottom>Seções/Aulas:</Typography>
          <Box className="materias-chips">
            {['algoritmos', 'estruturas', 'recursividade', 'ordenacao', 'arvores', 'grafos'].map(materia => (
              <Chip
                key={materia}
                label={materia.charAt(0).toUpperCase() + materia.slice(1)}
                variant={exerciseConfig.materias.includes(materia) ? 'filled' : 'outlined'}
                onClick={() => {
                  const newMaterias = exerciseConfig.materias.includes(materia)
                    ? exerciseConfig.materias.filter(m => m !== materia)
                    : [...exerciseConfig.materias, materia];
                  setExerciseConfig(prev => ({ ...prev, materias: newMaterias }));
                }}
                className={exerciseConfig.materias.includes(materia) ? 'chip-selected' : 'chip-unselected'}
              />
            ))}
          </Box>
        </Box>
      </Paper>

      {/* Opções Avançadas */}
      <Paper className="config-section" elevation={2}>
        <Typography variant="h6" gutterBottom>
          ⚙️ Opções Avançadas
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={exerciseConfig.evitarRepetidas}
                  onChange={(e) => setExerciseConfig(prev => ({ ...prev, evitarRepetidas: e.target.checked }))}
                />
              }
              label="Sistema Anti-Repetição"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={exerciseConfig.incluirExplicacoes}
                  onChange={(e) => setExerciseConfig(prev => ({ ...prev, incluirExplicacoes: e.target.checked }))}
                />
              }
              label="Incluir Explicações"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Switch
                  checked={exerciseConfig.dificuldadeGradual}
                  onChange={(e) => setExerciseConfig(prev => ({ ...prev, dificuldadeGradual: e.target.checked }))}
                />
              }
              label="Dificuldade Gradual"
            />
          </Grid>
        </Grid>
        
        {/* Histórico */}
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2">
            Histórico: {exerciseHistory.length} sessões salvas
          </Typography>
          <Button
            startIcon={<ClearIcon />}
            onClick={clearHistory}
            variant="outlined"
            color="warning"
            size="small"
          >
            Limpar Histórico
          </Button>
        </Box>
      </Paper>

      {/* Botão de Geração */}
      <Box className="generate-button-container">
        <Button
          variant="contained"
          size="large"
          onClick={generateExercises}
          disabled={loading}
          className="generate-button"
          startIcon={loading ? <CircularProgress size={20} /> : <PsychologyIcon />}
        >
          {loading ? 'Gerando Exercícios Inteligentes...' : 'Gerar Exercícios com IA'}
        </Button>
      </Box>
    </Box>
  );

  // Render dos exercícios gerados
  const renderExercises = () => (
    <Box className="exercises-container">
      <Box className="exercises-header">
        <Typography variant="h6">
          📝 Exercícios Gerados ({generatedExercises.length})
        </Typography>
        <Box>
          <Button
            startIcon={<AnalyticsIcon />}
            onClick={() => setCurrentView('analysis')}
            variant="outlined"
            sx={{ mr: 1 }}
          >
            Ver Análise
          </Button>
          <Button
            startIcon={<DownloadIcon />}
            onClick={exportExercises}
            variant="contained"
            color="success"
          >
            Exportar
          </Button>
        </Box>
      </Box>

      <Box className="exercises-list">
        {generatedExercises.map((exercise, index) => (
          <Card key={exercise.id} className="exercise-card" elevation={2}>
            <CardContent>
              <Box className="exercise-header">
                <Box className="exercise-meta">
                  <Chip
                    label={categories[exercise.category]?.name || exercise.category}
                    sx={{
                      backgroundColor: categories[exercise.category]?.color || '#gray',
                      color: 'white',
                      mr: 1
                    }}
                    size="small"
                  />
                  <Chip
                    label={exercise.difficulty}
                    variant="outlined"
                    size="small"
                  />
                  {exercise.complexity && (
                    <Chip
                      label={exercise.complexity}
                      variant="outlined"
                      size="small"
                      sx={{ ml: 1 }}
                    />
                  )}
                </Box>
                <Typography variant="h6" className="exercise-number">
                  #{index + 1}
                </Typography>
              </Box>

              <Typography variant="body1" className="exercise-question">
                {exercise.question}
              </Typography>

              {exercise.options && (
                <Box className="exercise-options">
                  {exercise.options.map((option, optIndex) => (
                    <Typography
                      key={optIndex}
                      variant="body2"
                      className={`exercise-option ${option.startsWith(exercise.correct_answer) ? 'correct-option' : ''}`}
                    >
                      {option}
                    </Typography>
                  ))}
                </Box>
              )}

              {exercise.explanation && (
                <Accordion className="exercise-explanation">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>📖 Explicação</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      {exercise.explanation}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )}

              {exercise.reference && (
                <Typography variant="caption" className="exercise-reference">
                  📚 Referência: {exercise.reference}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );

  // Render da análise
  const renderAnalysis = () => (
    <Box className="analysis-container">
      <Typography variant="h6" gutterBottom>
        📊 Análise Avançada dos Exercícios
      </Typography>

      {analysisData && (
        <Grid container spacing={3}>
          {/* Estatísticas gerais */}
          <Grid item xs={12} md={6}>
            <Paper className="analysis-card" elevation={2}>
              <Typography variant="h6" gutterBottom>📈 Estatísticas Gerais</Typography>
              <Box className="stat-item">
                <Typography>Total de Exercícios: {analysisData.totalExercises}</Typography>
                <Typography>Tempo de Geração: {analysisData.generationTime}</Typography>
                <Typography>Complexidade Média: {analysisData.averageComplexity}</Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Distribuição por categoria */}
          <Grid item xs={12} md={6}>
            <Paper className="analysis-card" elevation={2}>
              <Typography variant="h6" gutterBottom>🎯 Distribuição por Categoria</Typography>
              {Object.entries(analysisData.categoryDistribution).map(([category, count]) => (
                <Box key={category} className="category-analysis-item">
                  <Box className="category-info">
                    <Chip
                      label={categories[category]?.name || category}
                      sx={{
                        backgroundColor: categories[category]?.color || '#gray',
                        color: 'white',
                        mr: 1
                      }}
                      size="small"
                    />
                    <Typography>{count} exercícios</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={(count / analysisData.totalExercises) * 100}
                    className="category-progress"
                  />
                </Box>
              ))}
            </Paper>
          </Grid>

          {/* Configuração utilizada */}
          <Grid item xs={12}>
            <Paper className="analysis-card" elevation={2}>
              <Typography variant="h6" gutterBottom>⚙️ Configuração Utilizada</Typography>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                  <Typography variant="body2">
                    <strong>Temperatura:</strong> {analysisData.configUsed.temperatura}
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="body2">
                    <strong>Tipo:</strong> {analysisData.configUsed.tipoQuestao}
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="body2">
                    <strong>Complexidade:</strong> {analysisData.configUsed.complexidade}
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Typography variant="body2">
                    <strong>TopK:</strong> {analysisData.configUsed.topK}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      )}

      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Button
          startIcon={<RefreshIcon />}
          onClick={() => setCurrentView('config')}
          variant="outlined"
          sx={{ mr: 2 }}
        >
          Nova Geração
        </Button>
        <Button
          startIcon={<QuizIcon />}
          onClick={() => setCurrentView('exercises')}
          variant="contained"
        >
          Ver Exercícios
        </Button>
      </Box>
    </Box>
  );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      className="exercise-generator-modal"
    >
      <DialogTitle className="modal-header">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center">
            <AutoFixHighIcon sx={{ mr: 1 }} />
            <Typography variant="h6">
              Gerador Avançado de Exercícios com IA
            </Typography>
          </Box>
          <IconButton onClick={onClose} className="close-button">
            <CloseIcon />
          </IconButton>
        </Box>
        
        {/* Navegação */}
        <Box className="view-navigation">
          <Button
            variant={currentView === 'config' ? 'contained' : 'outlined'}
            onClick={() => setCurrentView('config')}
            startIcon={<SettingsIcon />}
            className="nav-button"
          >
            Configuração
          </Button>
          <Button
            variant={currentView === 'exercises' ? 'contained' : 'outlined'}
            onClick={() => setCurrentView('exercises')}
            startIcon={<SchoolIcon />}
            className="nav-button"
            disabled={generatedExercises.length === 0}
          >
            Exercícios ({generatedExercises.length})
          </Button>
          <Button
            variant={currentView === 'analysis' ? 'contained' : 'outlined'}
            onClick={() => setCurrentView('analysis')}
            startIcon={<AnalyticsIcon />}
            className="nav-button"
            disabled={!analysisData}
          >
            Análise
          </Button>
        </Box>
      </DialogTitle>

      <DialogContent className="modal-content" ref={scrollRef}>
        {/* Exibir erros */}
        {errors.length > 0 && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errors.map((error, index) => (
              <Typography key={index}>{error}</Typography>
            ))}
          </Alert>
        )}

        {/* Conteúdo baseado na visualização atual */}
        {currentView === 'config' && renderConfiguration()}
        {currentView === 'exercises' && renderExercises()}
        {currentView === 'analysis' && renderAnalysis()}
      </DialogContent>
    </Dialog>
  );
};

export default ExerciseGeneratorModal;