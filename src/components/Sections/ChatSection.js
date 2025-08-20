import React, { useState, useRef, useEffect } from 'react';
import {
  Paper,
  Typography,
  TextField,
  IconButton,
  Box,
  CircularProgress,
  Chip
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import './ChatSection.css';

const GEMINI_API_KEY = 'AIzaSyCRfarEDTrIlXNPdonkf-KNAU414KrGnEQ';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const COURSE_CONTEXT = `
Você é um assistente virtual especializado na disciplina "Algoritmos e Complexidade Computacional" (ARA0174) do curso de Sistemas de Informação, ministrada pelo Prof. Vagner Cordeiro.

INFORMAÇÕES DA DISCIPLINA:
- Carga Horária: 80 horas (4 horas/semana)
- Período: 2025.2
- Professor: Vagner Cordeiro

EMENTA COMPLETA:
Unidade I (16h): Fundamentos e Funções - Conceitos básicos de algoritmos, funções, estruturas homogêneas/heterogêneas, ponteiros, análise de complexidade
Unidade II (16h): Recursividade - Definições recursivas, implementação, limitações e alternativas
Unidade III (16h): Algoritmos de Ordenação - Bubble, Selection, Insertion, Merge Sort, Quick Sort, Shell Sort
Unidade IV (16h): Estruturas Avançadas - Árvores binárias de busca, percursos, balanceamento, AVL, grafos
Unidade V (16h): Projetos e Laboratório - Representação de grafos, laboratório prático, projetos finais

CONTEÚDO DAS AULAS:
Aula 01: Algoritmos - Funções e Passagem de Parâmetros
Aula 02: Estruturas de Dados - Homogêneas, Heterogêneas e Ponteiros  
Aula 03: Análise de Algoritmos e Prática de Análise
Aula 04: Definições Recursivas e Como Implementar Recursividade
Aula 05: Desenvolvendo Algoritmos com Recursividade
Aula 06: Quando Não Usar Recursividade
Aula 07: Análise Ordenação Elementar e Mergesort
Aula 08: Quicksort e Shellsort
Aulas 09-12: Árvores Binárias, Percursos, AVL e Grafos
Aula 13: Roteiro de Laboratório
Aula 14: Projetos Finais

EXERCÍCIOS DISPONÍVEIS:
- Lista 01: Análise de Complexidade (2,0 pontos, prazo 25/08/2025)
- Lista 02: Estruturas de Dados Básicas (2,5 pontos, prazo 08/09/2025)
- Lista 03: Algoritmos Recursivos (2,0 pontos, prazo 22/09/2025)  
- Lista 04: Algoritmos de Ordenação (3,0 pontos, prazo 06/10/2025)

AVALIAÇÃO:
- Prova 1: 25% (Fundamentos e análise)
- Prova 2: 25% (Estruturas de dados)
- Prova 3: 25% (Algoritmos fundamentais)
- Exercícios: 15% (Listas práticas)
- Projeto: 10% (Implementação completa)

LINGUAGENS: C e Python

CRONOGRAMA:
- Semanas 1-4: Fundamentos (Aulas 01-04)
- Semanas 5-8: Recursividade (Aulas 05-06) + Prova 1
- Semanas 9-12: Ordenação (Aulas 07-08)
- Semanas 13-16: Estruturas Avançadas (Aulas 09-12) + Prova 2
- Semanas 17-20: Laboratório (Aulas 13-14) + Prova 3

METODOLOGIA:
- Teoria fundamentada com conceitos matemáticos rigorosos
- Prática intensiva com implementação em C e Python
- Análise comparativa com benchmarks reais

Responda sempre de forma didática e prática, incluindo exemplos de código quando relevante. Mantenha o foco nos conteúdos da disciplina. Seja claro, objetivo e educativo. Use emojis relevantes para tornar as respostas mais engajadoras.
`;

const ChatSection = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const messagesEndRef = useRef(null);

  const suggestions = [
    'O que é análise de complexidade?',
    'Explique recursividade com exemplos',
    'Diferença entre Bubble Sort e Quick Sort',
    'Como implementar uma árvore binária?',
    'Exercícios da Lista 01',
    'Cronograma da disciplina',
    'Quando usar recursão vs iteração?',
    'Complexidade O(n) vs O(log n)',
    'Como estudar para as provas?',
    'Projetos finais disponíveis'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const callGeminiAPI = async (message) => {
    let contextWithHistory = COURSE_CONTEXT + "\n\nHISTÓRICO DA CONVERSA:\n";
    chatHistory.slice(-10).forEach(item => {
      contextWithHistory += `${item.role}: ${item.content}\n`;
    });
    contextWithHistory += `\nUSUÁRIO: ${message}\nASSISTENTE:`;

    const requestBody = {
      contents: [{
        parts: [{
          text: contextWithHistory
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 2048,
      }
    };

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      const aiResponse = data.candidates[0].content.parts[0].text;
      
      // Atualizar histórico
      setChatHistory(prev => [
        ...prev.slice(-18), // Manter últimas 18 mensagens
        { role: 'user', content: message },
        { role: 'assistant', content: aiResponse }
      ]);
      
      return aiResponse;
    } else {
      throw new Error('Resposta inválida da API');
    }
  };

  const formatMessage = (content) => {
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code style="background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-family: monospace; color: #e83e8c;">$1</code>')
      .replace(/\n/g, '<br>')
      .replace(/```(\w+)?\n?([\s\S]*?)```/g, (match, lang, code) => {
        return `<pre style="background: #2d3748; color: #e2e8f0; padding: 15px; border-radius: 8px; overflow-x: auto; margin: 10px 0;"><code>${code.trim()}</code></pre>`;
      });
  };

  const sendMessage = async (text = input) => {
    if (!text.trim()) return;

    const userMessage = { 
      text, 
      sender: 'user', 
      timestamp: new Date(),
      formatted: text
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await callGeminiAPI(text);
      const assistantMessage = { 
        text: response, 
        sender: 'assistant', 
        timestamp: new Date(),
        formatted: formatMessage(response)
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erro ao chamar API:', error);
      const errorMessage = { 
        text: 'Desculpe, ocorreu um erro. Tente novamente mais tarde.', 
        sender: 'assistant', 
        timestamp: new Date(),
        formatted: 'Desculpe, ocorreu um erro. Tente novamente mais tarde.'
      };
      setMessages(prev => [...prev, errorMessage]);
    }

    setLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Paper className="content-section" elevation={3}>
      <Typography variant="h4" className="section-title">
        🤖 IA Assistant - Algoritmos e Complexidade
      </Typography>

      <Paper sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white', 
        p: 3, 
        mb: 3, 
        borderRadius: '15px' 
      }}>
        <Typography variant="h6" gutterBottom>
          👋 Olá! Sou seu Assistant Virtual
        </Typography>
        <Typography>
          Estou aqui para ajudar com dúvidas sobre a disciplina <strong>Algoritmos e Complexidade</strong>. 
          Posso explicar conceitos, ajudar com exercícios, esclarecer sobre as aulas e muito mais!
        </Typography>
      </Paper>

      <Box sx={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ 
          flex: 1, 
          overflowY: 'auto', 
          padding: '20px', 
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '15px',
          mb: 2
        }}>
          {messages.length === 0 && (
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                💡 Sugestões de Perguntas
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                {suggestions.map((suggestion, index) => (
                  <Chip
                    key={index}
                    label={suggestion}
                    onClick={() => sendMessage(suggestion)}
                    sx={{
                      background: 'rgba(102, 126, 234, 0.1)',
                      color: '#667eea',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: '#667eea',
                        color: 'white',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}
          
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                marginBottom: '15px',
                alignItems: 'flex-start',
                flexDirection: message.sender === 'user' ? 'row-reverse' : 'row'
              }}
            >
              <Box sx={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                margin: '0 10px',
                flexShrink: 0,
                background: message.sender === 'user' 
                  ? 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)'
                  : 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)',
                color: 'white'
              }}>
                {message.sender === 'user' ? '👤' : '🤖'}
              </Box>
              <Paper sx={{
                maxWidth: '70%',
                padding: '15px 20px',
                borderRadius: '20px',
                position: 'relative',
                lineHeight: 1.5,
                background: message.sender === 'user'
                  ? 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)'
                  : 'white',
                color: message.sender === 'user' ? 'white' : '#2c3e50',
                borderBottomRightRadius: message.sender === 'user' ? '5px' : '20px',
                borderBottomLeftRadius: message.sender === 'assistant' ? '5px' : '20px',
                boxShadow: message.sender === 'assistant' ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'
              }}>
                <Typography 
                  component="div"
                  dangerouslySetInnerHTML={{ __html: message.formatted || message.text }} 
                />
                <Typography variant="caption" sx={{ 
                  opacity: 0.7,
                  marginTop: '5px',
                  display: 'block'
                }}>
                  {message.timestamp.toLocaleTimeString()}
                </Typography>
              </Paper>
            </Box>
          ))}
          
          {loading && (
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 20px',
              background: 'white',
              borderRadius: '20px',
              borderBottomLeftRadius: '5px',
              marginLeft: '50px',
              marginBottom: '15px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
            }}>
              <CircularProgress size={20} />
              <Typography variant="body2">Pensando... 🤔</Typography>
            </Box>
          )}
          
          <div ref={messagesEndRef} />
        </Box>
        
        <Box sx={{ 
          display: 'flex', 
          gap: '10px', 
          alignItems: 'flex-end',
          paddingTop: '20px',
          borderTop: '1px solid #e2e8f0'
        }}>
          <TextField
            fullWidth
            multiline
            maxRows={4}
            placeholder="Digite sua pergunta sobre algoritmos, estruturas de dados, exercícios..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '25px',
                '&:hover fieldset': {
                  borderColor: '#667eea',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#667eea',
                },
              },
            }}
          />
          <IconButton 
            onClick={() => sendMessage()} 
            disabled={loading || !input.trim()}
            sx={{
              width: 50,
              height: 50,
              ml: 1,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                transform: 'scale(1.05)',
              },
              '&:disabled': {
                opacity: 0.5,
                transform: 'none',
              }
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default ChatSection;