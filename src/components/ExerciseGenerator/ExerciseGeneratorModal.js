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
  Card,
  CardContent,
  Alert,
  Radio,
  RadioGroup,
  FormGroup,
  Checkbox,
  LinearProgress,
  Stepper,
  Step,
  StepLabel,
  Divider
} from '@mui/material';
import {
  Close as CloseIcon,
  Settings as SettingsIcon,
  Psychology as PsychologyIcon,
  AutoFixHigh as AutoFixHighIcon,
  History as HistoryIcon,
  Clear as ClearIcon,
  PlayArrow as PlayArrowIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon,
  Analytics as AnalyticsIcon,
  School as SchoolIcon,
  Quiz as QuizIcon,
  NavigateNext as NavigateNextIcon,
  NavigateBefore as NavigateBeforeIcon,
  EmojiEvents as TrophyIcon,
  Assignment as AssignmentIcon
} from '@mui/icons-material';
import { aulasData } from '../../data/aulasData'; // Importar dados reais das aulas
import './ExerciseGeneratorModal.css';

const GEMINI_API_KEY = 'AIzaSyCRfarEDTrIlXNPdonkf-KNAU414KrGnEQ';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const ExerciseGeneratorModal = ({ open, onClose }) => {
  // Estados principais
  const [exerciseConfig, setExerciseConfig] = useState({
    quantidade: 5,
    aulasIncluidas: ['aula01', 'aula02'], // Aulas específicas
    complexidade: 'medio',
    temperatura: 0.7,
    tipoQuestao: 'multipla_escolha',
    focoConteudo: 'geral',
    incluirExplicacoes: true,
    dificuldadeGradual: false,
    topK: 40,
    topP: 0.8
  });

  const [generatedExercises, setGeneratedExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentView, setCurrentView] = useState('config'); // config, quiz, results
  const [errors, setErrors] = useState([]);

  // Estados do quiz
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({}); // { questionId: answer }
  const [quizResults, setQuizResults] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [quizStartTime, setQuizStartTime] = useState(null);
  const [questionStartTime, setQuestionStartTime] = useState(null);

  // Refs
  const scrollRef = useRef(null);

  // Níveis de conhecimento
  const knowledgeLevels = {
    excelente: { min: 90, label: 'Excelente', color: '#27ae60', emoji: '🏆' },
    bom: { min: 75, label: 'Bom', color: '#3498db', emoji: '👍' },
    regular: { min: 60, label: 'Regular', color: '#f39c12', emoji: '📚' },
    insuficiente: { min: 0, label: 'Insuficiente', color: '#e74c3c', emoji: '📖' }
  };

  // Carregar dados salvos
  useEffect(() => {
    const savedConfig = localStorage.getItem('exercise_generator_config');
    if (savedConfig) {
      setExerciseConfig(JSON.parse(savedConfig));
    }
  }, []);

  // Salvar configurações
  useEffect(() => {
    localStorage.setItem('exercise_generator_config', JSON.stringify(exerciseConfig));
  }, [exerciseConfig]);

  // Função para extrair conteúdo das aulas selecionadas
  const getSelectedClassContent = () => {
    let content = '';
    exerciseConfig.aulasIncluidas.forEach(aulaId => {
      if (aulasData[aulaId]) {
        const aula = aulasData[aulaId];
        content += `\n=== ${aula.title} ===\n`;
        // Converter HTML para texto e extrair conceitos principais
        const textContent = aula.content
          .replace(/<[^>]*>/g, ' ')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/\s+/g, ' ')
          .trim();
        content += textContent + '\n\n';
      }
    });
    return content;
  };

  // Função para gerar prompt inteligente baseado no conteúdo real
  const buildIntelligentPrompt = () => {
    const { quantidade, complexidade, tipoQuestao, focoConteudo, incluirExplicacoes, dificuldadeGradual } = exerciseConfig;
    
    // Obter conteúdo das aulas selecionadas
    const classContent = getSelectedClassContent();
    
    let prompt = `Você é um EXPERT em geração de exercícios educacionais para a disciplina "Algoritmos e Complexidade" (ARA0174).

🎯 CONFIGURAÇÃO SOLICITADA:
- Quantidade: ${quantidade} exercícios
- Aulas incluídas: ${exerciseConfig.aulasIncluidas.join(', ')}
- Complexidade: ${complexidade}
- Tipo: ${tipoQuestao}
- Foco: ${focoConteudo}
- Dificuldade gradual: ${dificuldadeGradual ? 'SIM' : 'NÃO'}
- Incluir explicações: ${incluirExplicacoes ? 'SIM' : 'NÃO'}

📚 CONTEÚDO ESPECÍFICO DAS AULAS SELECIONADAS:
${classContent}

🎯 INSTRUÇÕES PARA GERAÇÃO:
1. Use APENAS o conteúdo das aulas fornecidas acima
2. Crie exercícios que testem conceitos específicos dessas aulas
3. NÃO forneça as respostas corretas no JSON (será usado para quiz interativo)
4. Inclua explicações detalhadas para feedback pós-resposta
5. Varie a dificuldade conforme configuração

🎯 DISTRIBUIÇÃO POR CATEGORIA:
- Conceitual: ${Math.ceil(quantidade * 0.4)} exercícios (conceitos fundamentais)
- Aplicativa: ${Math.ceil(quantidade * 0.3)} exercícios (aplicação prática)  
- Analítica: ${Math.ceil(quantidade * 0.3)} exercícios (análise e comparação)

`;

    // Instruções específicas por tipo
    if (tipoQuestao === 'multipla_escolha') {
      prompt += `\n📝 FORMATO MÚLTIPLA ESCOLHA:
- 4 alternativas (A, B, C, D)
- Apenas 1 alternativa correta
- Distratores plausíveis baseados em erros comuns
- Todas as alternativas devem ser da mesma categoria/tema`;
    } else if (tipoQuestao === 'verdadeiro_falso') {
      prompt += `\n📝 FORMATO VERDADEIRO/FALSO:
- Afirmações claras sobre conceitos das aulas
- Evitar palavras absolutas desnecessárias
- Basear em conceitos específicos do conteúdo`;
    }

    prompt += `\n\n🎯 FORMATO JSON OBRIGATÓRIO:
{
  "exercises": [
    {
      "id": "ex1",
      "type": "${tipoQuestao}",
      "category": "conceitual|aplicativa|analitica",
      "difficulty": "basico|medio|avancado",
      "question": "Questão específica baseada no conteúdo das aulas...",
      "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
      "correct_answer": "A",
      "explanation": "Explicação detalhada referenciando o conteúdo da aula...",
      "aula_reference": "aula01|aula02|etc",
      "points": 1
    }
  ]
}

❌ IMPORTANTE: NÃO incluir "correct_answer" no JSON final - será usado para quiz interativo!

Gere exercícios ÚNICOS, PRECISOS e baseados EXCLUSIVAMENTE no conteúdo fornecido das aulas!`;

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

      // Adicionar metadados e processar exercícios
      const enhancedExercises = exercisesData.exercises.map((ex, index) => ({
        ...ex,
        id: `ex_${Date.now()}_${index}`,
        generated_at: new Date().toISOString(),
        config_used: { ...exerciseConfig },
        points: ex.points || 1,
        time_limit: 60 // 60 segundos por questão
      }));

      setGeneratedExercises(enhancedExercises);
      setCurrentView('quiz');
      setCurrentQuestionIndex(0);
      setUserAnswers({});
      setQuizResults(null);
      setShowResult(false);
      setQuizStartTime(new Date());
      setQuestionStartTime(new Date());
      
    } catch (error) {
      console.error('Erro ao gerar exercícios:', error);
      setErrors([error.message]);
    } finally {
      setLoading(false);
    }
  };

  // Função para responder questão
  const answerQuestion = (answer) => {
    const currentQuestion = generatedExercises[currentQuestionIndex];
    const responseTime = new Date() - questionStartTime;
    
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: {
        answer,
        responseTime,
        timestamp: new Date().toISOString()
      }
    }));

    setShowResult(true);
  };

  // Função para próxima questão
  const nextQuestion = () => {
    if (currentQuestionIndex < generatedExercises.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowResult(false);
      setQuestionStartTime(new Date());
    } else {
      // Finalizar quiz
      finishQuiz();
    }
  };

  // Função para questão anterior
  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setShowResult(false);
      setQuestionStartTime(new Date());
    }
  };

  // Função para finalizar quiz
  const finishQuiz = () => {
    const totalTime = new Date() - quizStartTime;
    let correctAnswers = 0;
    let totalPoints = 0;
    let earnedPoints = 0;
    
    const questionResults = generatedExercises.map(question => {
      const userAnswer = userAnswers[question.id];
      const isCorrect = userAnswer && userAnswer.answer === question.correct_answer;
      
      totalPoints += question.points;
      if (isCorrect) {
        correctAnswers++;
        earnedPoints += question.points;
      }
      
      return {
        questionId: question.id,
        question: question.question,
        userAnswer: userAnswer?.answer || 'Não respondida',
        correctAnswer: question.correct_answer,
        isCorrect,
        points: question.points,
        earnedPoints: isCorrect ? question.points : 0,
        responseTime: userAnswer?.responseTime || 0,
        explanation: question.explanation,
        category: question.category
      };
    });

    const percentage = (correctAnswers / generatedExercises.length) * 100;
    const pointsPercentage = (earnedPoints / totalPoints) * 100;
    
    // Determinar nível de conhecimento
    let knowledgeLevel = 'insuficiente';
    Object.entries(knowledgeLevels).forEach(([level, config]) => {
      if (pointsPercentage >= config.min) {
        knowledgeLevel = level;
      }
    });

    // Análise por categoria
    const categoryAnalysis = {};
    questionResults.forEach(result => {
      if (!categoryAnalysis[result.category]) {
        categoryAnalysis[result.category] = { correct: 0, total: 0 };
      }
      categoryAnalysis[result.category].total++;
      if (result.isCorrect) {
        categoryAnalysis[result.category].correct++;
      }
    });

    const results = {
      totalQuestions: generatedExercises.length,
      correctAnswers,
      percentage,
      pointsPercentage,
      knowledgeLevel,
      totalTime,
      averageTime: totalTime / generatedExercises.length,
      questionResults,
      categoryAnalysis,
      completedAt: new Date().toISOString()
    };

    setQuizResults(results);
    setCurrentView('results');

    // Salvar resultado no histórico
    const history = JSON.parse(localStorage.getItem('quiz_history') || '[]');
    history.push(results);
    localStorage.setItem('quiz_history', JSON.stringify(history.slice(-50))); // Manter últimos 50
  };

  // Função para reiniciar quiz
  const restartQuiz = () => {
    setCurrentView('config');
    setGeneratedExercises([]);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setQuizResults(null);
    setShowResult(false);
  };

  // Render da configuração
  const renderConfiguration = () => (
    <Box className="exercise-config">
      <Typography variant="h6" gutterBottom className="config-section-title">
        🎛️ Configurações do Quiz Interativo
      </Typography>

      {/* Seleção de Aulas */}
      <Paper className="config-section" elevation={2}>
        <Typography variant="h6" gutterBottom>
          📚 Selecionar Aulas para o Quiz
        </Typography>
        
        <Typography variant="body2" sx={{ mb: 2, color: '#666' }}>
          Escolha as aulas que serão base para gerar os exercícios:
        </Typography>
        
        <Box className="aulas-selection">
          {Object.entries(aulasData).map(([aulaId, aula]) => (
            <FormControlLabel
              key={aulaId}
              control={
                <Checkbox
                  checked={exerciseConfig.aulasIncluidas.includes(aulaId)}
                  onChange={(e) => {
                    const newAulas = e.target.checked
                      ? [...exerciseConfig.aulasIncluidas, aulaId]
                      : exerciseConfig.aulasIncluidas.filter(id => id !== aulaId);
                    setExerciseConfig(prev => ({ ...prev, aulasIncluidas: newAulas }));
                  }}
                />
              }
              label={
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {aula.title}
                  </Typography>
                </Box>
              }
              sx={{ width: '100%', mb: 1 }}
            />
          ))}
        </Box>
      </Paper>

      {/* Configurações Básicas */}
      <Paper className="config-section" elevation={2}>
        <Typography variant="h6" gutterBottom>
          ⚙️ Configurações do Quiz
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="number"
              label="Número de Questões"
              value={exerciseConfig.quantidade}
              onChange={(e) => setExerciseConfig(prev => ({ ...prev, quantidade: parseInt(e.target.value) }))}
              inputProps={{ min: 3, max: 15 }}
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
                <MenuItem value="analise">Análise e Comparação</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Opções Avançadas */}
        <Box sx={{ mt: 3 }}>
          <FormControlLabel
            control={
              <Switch
                checked={exerciseConfig.dificuldadeGradual}
                onChange={(e) => setExerciseConfig(prev => ({ ...prev, dificuldadeGradual: e.target.checked }))}
              />
            }
            label="Dificuldade Gradual (fácil → difícil)"
          />
        </Box>
      </Paper>

      {/* Controle de Criatividade */}
      <Paper className="config-section" elevation={2}>
        <Typography variant="h6" gutterBottom>
          🧠 Criatividade da IA
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
          
          <Typography variant="body2" className="temp-description" sx={{ textAlign: 'center', mt: 2 }}>
            Temperatura: {exerciseConfig.temperatura} | TopK: {exerciseConfig.topK} | TopP: {exerciseConfig.topP}
          </Typography>
        </Box>
      </Paper>

      {/* Botão de Geração */}
      <Box className="generate-button-container">
        <Button
          variant="contained"
          size="large"
          onClick={generateExercises}
          disabled={loading || exerciseConfig.aulasIncluidas.length === 0}
          className="generate-button"
          startIcon={loading ? <CircularProgress size={20} /> : <PlayArrowIcon />}
        >
          {loading ? 'Gerando Quiz...' : 'Iniciar Quiz Interativo'}
        </Button>
        
        {exerciseConfig.aulasIncluidas.length === 0 && (
          <Typography variant="body2" color="error" sx={{ mt: 2, textAlign: 'center' }}>
            Selecione pelo menos uma aula para gerar o quiz
          </Typography>
        )}
      </Box>
    </Box>
  );

  // Render do quiz
  const renderQuiz = () => {
    const currentQuestion = generatedExercises[currentQuestionIndex];
    const isAnswered = userAnswers[currentQuestion?.id];
    const progress = ((currentQuestionIndex + 1) / generatedExercises.length) * 100;

    return (
      <Box className="quiz-container">
        {/* Header do Quiz */}
        <Paper className="quiz-header" elevation={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <Typography variant="h6">
              📝 Quiz Interativo - Questão {currentQuestionIndex + 1} de {generatedExercises.length}
            </Typography>
            <Chip 
              label={currentQuestion?.category} 
              color="primary" 
              variant="outlined"
            />
          </Box>
          
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ height: 8, borderRadius: 4 }}
          />
          
          <Typography variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
            Progresso: {Math.round(progress)}%
          </Typography>
        </Paper>

        {/* Questão */}
        <Paper className="question-card" elevation={2}>
          <CardContent>
            <Typography variant="h6" className="question-text" gutterBottom>
              {currentQuestion?.question}
            </Typography>

            {/* Opções de Resposta */}
            {currentQuestion?.type === 'multipla_escolha' && (
              <RadioGroup
                value={isAnswered?.answer || ''}
                onChange={(e) => !showResult && answerQuestion(e.target.value)}
                disabled={showResult}
              >
                {currentQuestion.options?.map((option, index) => {
                  const optionLetter = option.charAt(0);
                  const isCorrect = optionLetter === currentQuestion.correct_answer;
                  const isSelected = isAnswered?.answer === optionLetter;
                  
                  return (
                    <FormControlLabel
                      key={index}
                      value={optionLetter}
                      control={<Radio />}
                      label={option}
                      className={`option-item ${showResult ? (isCorrect ? 'correct' : isSelected ? 'incorrect' : '') : ''}`}
                      disabled={showResult}
                    />
                  );
                })}
              </RadioGroup>
            )}

            {currentQuestion?.type === 'verdadeiro_falso' && (
              <RadioGroup
                value={isAnswered?.answer || ''}
                onChange={(e) => !showResult && answerQuestion(e.target.value)}
                disabled={showResult}
                row
              >
                <FormControlLabel
                  value="V"
                  control={<Radio />}
                  label="✅ Verdadeiro"
                  className={`option-item ${showResult ? (currentQuestion.correct_answer === 'V' ? 'correct' : isAnswered?.answer === 'V' ? 'incorrect' : '') : ''}`}
                />
                <FormControlLabel
                  value="F"
                  control={<Radio />}
                  label="❌ Falso"
                  className={`option-item ${showResult ? (currentQuestion.correct_answer === 'F' ? 'correct' : isAnswered?.answer === 'F' ? 'incorrect' : '') : ''}`}
                />
              </RadioGroup>
            )}

            {/* Feedback da Resposta */}
            {showResult && (
              <Box className="answer-feedback" sx={{ mt: 3 }}>
                <Alert 
                  severity={isAnswered?.answer === currentQuestion.correct_answer ? 'success' : 'error'}
                  icon={isAnswered?.answer === currentQuestion.correct_answer ? <CheckCircleIcon /> : <CancelIcon />}
                >
                  <Typography variant="h6" gutterBottom>
                    {isAnswered?.answer === currentQuestion.correct_answer ? '🎉 Correto!' : '❌ Incorreto'}
                  </Typography>
                  
                  <Typography variant="body2">
                    <strong>Resposta correta:</strong> {currentQuestion.correct_answer}
                  </Typography>
                  
                  {currentQuestion.explanation && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2">
                        <strong>📖 Explicação:</strong> {currentQuestion.explanation}
                      </Typography>
                    </Box>
                  )}
                  
                  {currentQuestion.aula_reference && (
                    <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
                      📚 Referência: {currentQuestion.aula_reference}
                    </Typography>
                  )}
                </Alert>
              </Box>
            )}
          </CardContent>
        </Paper>

        {/* Navegação */}
        <Box className="quiz-navigation">
          <Button
            startIcon={<NavigateBeforeIcon />}
            onClick={previousQuestion}
            disabled={currentQuestionIndex === 0}
            variant="outlined"
          >
            Anterior
          </Button>

          {showResult && (
            <Button
              endIcon={currentQuestionIndex === generatedExercises.length - 1 ? <TrophyIcon /> : <NavigateNextIcon />}
              onClick={nextQuestion}
              variant="contained"
              color="primary"
            >
              {currentQuestionIndex === generatedExercises.length - 1 ? 'Ver Resultados' : 'Próxima'}
            </Button>
          )}

          {!showResult && !isAnswered && (
            <Button
              onClick={() => answerQuestion('')}
              variant="outlined"
              color="warning"
            >
              Pular Questão
            </Button>
          )}
        </Box>
      </Box>
    );
  };

  // Render dos resultados
  const renderResults = () => {
    if (!quizResults) return null;

    const level = knowledgeLevels[quizResults.knowledgeLevel];
    const minutes = Math.floor(quizResults.totalTime / 60000);
    const seconds = Math.floor((quizResults.totalTime % 60000) / 1000);

    return (
      <Box className="results-container">
        {/* Resultado Principal */}
        <Paper className="main-result" elevation={3}>
          <Box className="result-header">
            <Typography variant="h4" className="result-emoji">
              {level.emoji}
            </Typography>
            <Typography variant="h5" className="result-title" sx={{ color: level.color }}>
              Nível: {level.label}
            </Typography>
            <Typography variant="h3" className="result-score" sx={{ color: level.color }}>
              {Math.round(quizResults.percentage)}%
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Estatísticas */}
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <Box className="stat-box">
                <Typography variant="h6">{quizResults.correctAnswers}</Typography>
                <Typography variant="caption">Acertos</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box className="stat-box">
                <Typography variant="h6">{quizResults.totalQuestions - quizResults.correctAnswers}</Typography>
                <Typography variant="caption">Erros</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box className="stat-box">
                <Typography variant="h6">{minutes}:{seconds.toString().padStart(2, '0')}</Typography>
                <Typography variant="caption">Tempo Total</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box className="stat-box">
                <Typography variant="h6">{Math.round(quizResults.averageTime / 1000)}s</Typography>
                <Typography variant="caption">Tempo Médio</Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* Análise por Categoria */}
        <Paper className="category-analysis" elevation={2}>
          <Typography variant="h6" gutterBottom>
            📊 Análise por Categoria
          </Typography>
          
          <Grid container spacing={2}>
            {Object.entries(quizResults.categoryAnalysis).map(([category, data]) => {
              const percentage = (data.correct / data.total) * 100;
              return (
                <Grid item xs={12} sm={4} key={category}>
                  <Box className="category-result">
                    <Typography variant="subtitle1" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                      {category}
                    </Typography>
                    <LinearProgress 
                      variant="determinate" 
                      value={percentage}
                      sx={{ height: 8, borderRadius: 4, my: 1 }}
                    />
                    <Typography variant="body2">
                      {data.correct}/{data.total} ({Math.round(percentage)}%)
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Paper>

        {/* Recomendações */}
        <Paper className="recommendations" elevation={2}>
          <Typography variant="h6" gutterBottom>
            💡 Recomendações de Estudo
          </Typography>
          
          {quizResults.knowledgeLevel === 'excelente' && (
            <Alert severity="success">
              🏆 Excelente desempenho! Você domina muito bem os conceitos. Continue praticando com exercícios mais avançados.
            </Alert>
          )}
          
          {quizResults.knowledgeLevel === 'bom' && (
            <Alert severity="info">
              👍 Bom trabalho! Você tem uma base sólida. Foque nas categorias onde teve mais dificuldade para aprimorar ainda mais.
            </Alert>
          )}
          
          {quizResults.knowledgeLevel === 'regular' && (
            <Alert severity="warning">
              📚 Performance regular. Revise os conceitos fundamentais e pratique mais exercícios. Foque especialmente em conceitos básicos.
            </Alert>
          )}
          
          {quizResults.knowledgeLevel === 'insuficiente' && (
            <Alert severity="error">
              📖 É importante revisar o material das aulas. Recomendo voltar ao conteúdo teórico antes de tentar novos exercícios.
            </Alert>
          )}
        </Paper>

        {/* Ações */}
        <Box className="result-actions">
          <Button
            variant="contained"
            onClick={restartQuiz}
            startIcon={<AssignmentIcon />}
            size="large"
          >
            Novo Quiz
          </Button>
          
          <Button
            variant="outlined"
            onClick={() => setCurrentView('config')}
            startIcon={<SettingsIcon />}
            size="large"
          >
            Configurar Novo
          </Button>
        </Box>
      </Box>
    );
  };

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
            <QuizIcon sx={{ mr: 1 }} />
            <Typography variant="h6">
              Quiz Interativo com IA - Algoritmos e Complexidade
            </Typography>
          </Box>
          <IconButton onClick={onClose} className="close-button">
            <CloseIcon />
          </IconButton>
        </Box>
        
        {/* Stepper de Progresso */}
        <Box sx={{ mt: 2 }}>
          <Stepper activeStep={currentView === 'config' ? 0 : currentView === 'quiz' ? 1 : 2} alternativeLabel>
            <Step>
              <StepLabel>Configuração</StepLabel>
            </Step>
            <Step>
              <StepLabel>Quiz</StepLabel>
            </Step>
            <Step>
              <StepLabel>Resultados</StepLabel>
            </Step>
          </Stepper>
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
        {currentView === 'quiz' && renderQuiz()}
        {currentView === 'results' && renderResults()}
      </DialogContent>
    </Dialog>
  );
};

export default ExerciseGeneratorModal;