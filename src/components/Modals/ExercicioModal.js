import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Paper,
  Button
} from '@mui/material';
import {
  Close as CloseIcon,
  Download as DownloadIcon
} from '@mui/icons-material';

const exerciciosData = {
  'lista01': {
    title: 'Lista de Exercícios 01: Análise de Complexidade',
    description: 'Exercícios focados em análise teórica e prática de algoritmos em C e Python.',
    prazo: '2 semanas',
    valor: '2,0 pontos',
    content: `
    <h1>Lista de Exercícios 01: Análise de Complexidade</h1>
    
    <p><strong>Professor:</strong> Vagner Cordeiro<br>
    <strong>Disciplina:</strong> ARA0174 - Algoritmos e Complexidade<br>
    <strong>Data de Entrega:</strong> 2 semanas<br>
    <strong>Valor:</strong> 2,0 pontos</p>

    <h2>📋 Instruções Gerais</h2>
    <ol>
        <li><strong>Implementar</strong> todos os algoritmos em <strong>C</strong> e <strong>Python</strong></li>
        <li><strong>Analisar</strong> a complexidade de tempo e espaço de cada algoritmo</li>
        <li><strong>Testar</strong> com diferentes tamanhos de entrada</li>
        <li><strong>Documentar</strong> todo o processo no relatório</li>
        <li><strong>Entregar</strong> até a data limite no formato especificado</li>
    </ol>

    <h2>🎯 Objetivos</h2>
    <ul>
        <li>Aplicar conceitos de análise de complexidade</li>
        <li>Praticar implementação em C e Python</li>
        <li>Desenvolver habilidades de análise algorítmica</li>
        <li>Comparar teoria com resultados práticos</li>
    </ul>

    <h2>📝 Exercícios</h2>

    <h3>Exercício 1: Busca do Elemento Máximo (1,0 ponto)</h3>
    <p><strong>Problema:</strong> Implementar um algoritmo que encontre o maior elemento em um array de inteiros.</p>
    
    <h4>Requisitos:</h4>
    <ul>
        <li>Implementar em C e Python</li>
        <li>Analisar complexidade de tempo e espaço</li>
        <li>Testar com arrays de tamanhos: 10, 100, 1000, 10000</li>
    </ul>

    <h3>Exercício 2: Verificação de Array Ordenado (1,5 pontos)</h3>
    <p><strong>Problema:</strong> Implementar um algoritmo que verifique se um array está ordenado em ordem crescente.</p>
    
    <h4>Requisitos:</h4>
    <ul>
        <li>Implementar versão iterativa e recursiva</li>
        <li>Comparar complexidade das duas versões</li>
        <li>Testar com arrays ordenados, desordenados e parcialmente ordenados</li>
    </ul>

    <h3>Exercício 3: Contagem de Elementos Únicos (2,0 pontos)</h3>
    <p><strong>Problema:</strong> Implementar um algoritmo que conte quantos elementos únicos existem em um array.</p>
    
    <h4>Requisitos:</h4>
    <ul>
        <li>Implementar pelo menos duas abordagens diferentes</li>
        <li>Uma abordagem deve ter complexidade O(n²)</li>
        <li>Outra abordagem deve usar estrutura auxiliar</li>
        <li>Comparar as complexidades e tempos de execução</li>
    </ul>
    `
  },
  'lista02': {
    title: 'Lista de Exercícios 02: Estruturas de Dados Básicas',
    description: 'Implementação de estruturas lineares, arrays dinâmicos e análise de performance.',
    prazo: '2 semanas',
    valor: '2,5 pontos',
    content: `
    <h1>Lista de Exercícios 02: Estruturas de Dados Básicas</h1>
    
    <p><strong>Professor:</strong> Vagner Cordeiro<br>
    <strong>Disciplina:</strong> ARA0174 - Algoritmos e Complexidade<br>
    <strong>Data de Entrega:</strong> 2 semanas<br>
    <strong>Valor:</strong> 2,5 pontos</p>

    <h2>📋 Instruções Gerais</h2>
    <ol>
        <li><strong>Implementar</strong> todos os algoritmos em <strong>C</strong> e <strong>Python</strong></li>
        <li><strong>Analisar</strong> a complexidade de tempo e espaço de cada implementação</li>
        <li><strong>Testar</strong> com diferentes cenários de entrada</li>
        <li><strong>Comparar</strong> diferentes abordagens quando aplicável</li>
        <li><strong>Documentar</strong> todo o desenvolvimento no relatório</li>
    </ol>

    <h2>📝 Exercícios</h2>

    <h3>Exercício 1: Array Dinâmico Completo (2,0 pontos)</h3>
    <p><strong>Problema:</strong> Implementar um array dinâmico completo com todas as operações básicas.</p>
    
    <h4>Operações Obrigatórias:</h4>
    <ul>
        <li>create_array(), destroy_array()</li>
        <li>get(), set(), push_back(), push_front()</li>
        <li>pop_back(), pop_front()</li>
        <li>insert(), remove_at(), find()</li>
        <li>resize(), print_array()</li>
    </ul>

    <h3>Exercício 2: Matriz Esparsa (2,0 pontos)</h3>
    <p><strong>Problema:</strong> Implementar uma matriz esparsa usando três representações diferentes.</p>
    `
  }
};

const ExercicioModal = ({ open, onClose, exercicioId }) => {
  const exercicio = exerciciosData[exercicioId];

  if (!exercicio) {
    return null;
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{exercicio.title}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      
      <DialogContent>
        {/* Info Header */}
        <Paper sx={{ 
          p: 2, 
          mb: 2, 
          background: 'linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)', 
          color: 'white' 
        }}>
          <Typography variant="h6" gutterBottom>{exercicio.title}</Typography>
          <Typography><strong>Prazo:</strong> {exercicio.prazo}</Typography>
          <Typography><strong>Valor:</strong> {exercicio.valor}</Typography>
          <Typography sx={{ mt: 1 }}>{exercicio.description}</Typography>
        </Paper>

        {/* Download Link */}
        <Paper sx={{ p: 2, mb: 2, textAlign: 'center' }}>
          <Button
            startIcon={<DownloadIcon />}
            href={`/exercicios/${exercicioId}.md`}
            target="_blank"
            variant="contained"
            color="primary"
          >
            📄 Ver Lista Completa
          </Button>
        </Paper>

        {/* Content */}
        <Paper sx={{ p: 3 }}>
          <Box 
            dangerouslySetInnerHTML={{ __html: exercicio.content }}
            sx={{
              '& h1': { color: '#2c3e50', fontSize: '2rem', mb: 2 },
              '& h2': { color: '#34495e', fontSize: '1.5rem', mt: 3, mb: 2 },
              '& h3': { color: '#2980b9', fontSize: '1.3rem', mt: 2, mb: 1 },
              '& h4': { color: '#8e44ad', fontSize: '1.1rem', mt: 1, mb: 1 },
              '& p': { mb: 2, lineHeight: 1.6 },
              '& ul, & ol': { mb: 2, pl: 3 },
              '& li': { mb: 1 },
              '& strong': { fontWeight: 600 }
            }}
          />
        </Paper>
      </DialogContent>
    </Dialog>
  );
};

export default ExercicioModal;