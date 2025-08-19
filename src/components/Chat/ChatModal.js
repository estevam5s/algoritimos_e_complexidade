
import React, { useState, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
  Box,
  Typography,
  Paper,
  CircularProgress,
  Chip
} from '@mui/material';
import { Send as SendIcon, Close as CloseIcon } from '@mui/icons-material';
import './ChatModal.css';

const GEMINI_API_KEY = 'AIzaSyCRfarEDTrIlXNPdonkf-KNAU414KrGnEQ';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

const COURSE_CONTEXT = `
Você é um assistente virtual especializado na disciplina "Algoritmos e Complexidade Computacional" (ARA0174) do curso de Sistemas de Informação, ministrada pelo Prof. Vagner Cordeiro.

INFORMAÇÕES DA DISCIPLINA:
- Carga Horária: 80 horas (4 horas/semana)
- Período: 2025.2
- Professor: Vagner Cordeiro

EMENTA:
Unidade I (16h): Fundamentos e Funções - Conceitos básicos de algoritmos, funções, estruturas homogêneas/heterogêneas, ponteiros, análise de complexidade
Unidade II (16h): Recursividade - Definições recursivas, implementação, limitações e alternativas
Unidade III (16h): Algoritmos de Ordenação - Bubble, Selection, Insertion, Merge Sort, Quick Sort, Shell Sort
Unidade IV (16h): Estruturas Avançadas - Árvores binárias de busca, percursos, balanceamento, AVL, grafos
Unidade V (16h): Projetos e Laboratório - Representação de grafos, laboratório prático, projetos finais

AVALIAÇÃO:
- Prova 1: 25% (Fundamentos e análise)
- Prova 2: 25% (Estruturas de dados)
- Prova 3: 25% (Algoritmos fundamentais)
- Exercícios: 15% (Listas práticas)
- Projeto: 10% (Implementação completa)

LINGUAGENS: C e Python

Responda sempre de forma didática, incluindo exemplos práticos quando relevante, e mantenha o foco nos conteúdos da disciplina.
`;

const ChatModal = ({ open, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestions = [
    'O que é análise de complexidade?',
    'Explique recursividade',
    'Diferença entre Bubble Sort e Quick Sort',
    'Como implementar uma árvore binária?',
    'Exercícios da Lista 01',
    'Cronograma da disciplina'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const callGeminiAPI = async (message) => {
    const requestBody = {
      contents: [{
        parts: [{
          text: COURSE_CONTEXT + "\n\nUSUÁRIO: " + message + "\nASSISTENTE:"
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
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Resposta inválida da API');
    }
  };

  const sendMessage = async (text = input) => {
    if (!text.trim()) return;

    const userMessage = { text, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await callGeminiAPI(text);
      const assistantMessage = { text: response, sender: 'assistant', timestamp: new Date() };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erro ao chamar API:', error);
      const errorMessage = { text: 'Desculpe, ocorreu um erro. Tente novamente mais tarde.', sender: 'assistant', timestamp: new Date() };
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
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle className="chat-header">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">🤖 IA Assistant - Algoritmos e Complexidade</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" className="chat-status">
          Pronto para ajudar com suas dúvidas sobre algoritmos!
        </Typography>
      </DialogTitle>
      
      <DialogContent className="chat-content">
        <Box className="chat-messages">
          {messages.length === 0 && (
            <Box className="welcome-message">
              <Typography variant="h6">👋 Olá! Sou seu Assistant Virtual</Typography>
              <Typography>
                Estou aqui para ajudar com dúvidas sobre a disciplina <strong>Algoritmos e Complexidade</strong>. 
                Posso explicar conceitos, ajudar com exercícios, esclarecer sobre as aulas e muito mais!
              </Typography>
              <Box className="suggestions">
                {suggestions.map((suggestion, index) => (
                  <Chip
                    key={index}
                    label={suggestion}
                    onClick={() => sendMessage(suggestion)}
                    className="suggestion-chip"
                  />
                ))}
              </Box>
            </Box>
          )}
          
          {messages.map((message, index) => (
            <Box
              key={index}
              className={`message ${message.sender}`}
            >
              <Box className="message-avatar">
                {message.sender === 'user' ? '👤' : '🤖'}
              </Box>
              <Paper className="message-content" elevation={1}>
                <Typography dangerouslySetInnerHTML={{ __html: message.text.replace(/\n/g, '<br>') }} />
                <Typography variant="caption" className="message-time">
                  {message.timestamp.toLocaleTimeString()}
                </Typography>
              </Paper>
            </Box>
          ))}
          
          {loading && (
            <Box className="typing-indicator">
              <CircularProgress size={20} />
              <Typography variant="body2">Digitando...</Typography>
            </Box>
          )}
          
          <div ref={messagesEndRef} />
        </Box>
        
        <Box className="chat-input-container">
          <TextField
            fullWidth
            multiline
            maxRows={4}
            placeholder="Digite sua pergunta sobre algoritmos, estruturas de dados, exercícios..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
          />
          <IconButton 
            onClick={() => sendMessage()} 
            disabled={loading || !input.trim()}
            className="send-button"
          >
            <SendIcon />
          </IconButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ChatModal;
