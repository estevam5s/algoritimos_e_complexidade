import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  Paper
} from '@mui/material';
import {
  Close as CloseIcon,
  ArrowBack as PrevIcon,
  ArrowForward as NextIcon,
  Download as DownloadIcon
} from '@mui/icons-material';

const aulasData = {
  'aula01': {
    title: '📘 Aula 01: Algoritmos - Funções e Passagem de Parâmetros',
    pdf: '/aulas/pdf/aula01.pdf',
    content: `
    <h1>Aula 01: Algoritmos - Funções e Passagem de Parâmetros</h1>
    
    <p><strong>Disciplina:</strong> Algoritmos e Complexidade<br>
    <strong>Professor:</strong> Vagner Cordeiro<br>
    <strong>Carga Horária:</strong> 4 horas</p>

    <h2>Objetivos de Aprendizagem</h2>
    <p>Ao final desta aula, o estudante será capaz de:</p>
    <ul>
        <li>Compreender conceitos fundamentais de algoritmos</li>
        <li>Dominar a criação e uso de funções</li>
        <li>Aplicar diferentes formas de passagem de parâmetros</li>
        <li>Analisar o escopo de variáveis em funções</li>
    </ul>

    <h2>1. Conceitos Fundamentais de Algoritmos</h2>

    <h3>1.1 Definição de Algoritmo</h3>
    <p>Um <strong>algoritmo</strong> é uma sequência finita e ordenada de instruções não ambíguas que resolve um problema específico ou realiza uma tarefa computacional.</p>

    <h3>1.2 Características Essenciais</h3>
    <ul>
        <li><strong>Finitude</strong>: Deve terminar após um número finito de passos</li>
        <li><strong>Definição</strong>: Cada instrução deve ser clara e precisa</li>
        <li><strong>Entrada</strong>: Zero ou mais valores de entrada</li>
        <li><strong>Saída</strong>: Um ou mais valores de saída</li>
        <li><strong>Efetividade</strong>: Cada operação deve ser realizável</li>
    </ul>

    <h2>2. Funções em Algoritmos</h2>

    <h3>2.1 Conceito de Função</h3>
    <p>Uma <strong>função</strong> é um bloco de código que executa uma tarefa específica e pode ser reutilizado em diferentes partes do programa.</p>

    <h3>2.2 Vantagens das Funções</h3>
    <ul>
        <li><strong>Modularidade</strong>: Divisão do problema em partes menores</li>
        <li><strong>Reutilização</strong>: Código pode ser usado múltiplas vezes</li>
        <li><strong>Manutenibilidade</strong>: Facilita correções e melhorias</li>
        <li><strong>Legibilidade</strong>: Torna o código mais compreensível</li>
    </ul>
    `
  },
  'aula02': {
    title: '📗 Aula 02: Estruturas de Dados - Homogêneas, Heterogêneas e Ponteiros',
    pdf: '/aulas/pdf/aula02.pdf',
    content: `
    <h1>Aula 02: Estruturas de Dados - Homogêneas, Heterogêneas e Ponteiros</h1>
    
    <p><strong>Disciplina:</strong> Algoritmos e Complexidade<br>
    <strong>Professor:</strong> Vagner Cordeiro<br>
    <strong>Carga Horária:</strong> 4 horas</p>

    <h2>Objetivos de Aprendizagem</h2>
    <ul>
        <li>Compreender estruturas de dados homogêneas e heterogêneas</li>
        <li>Dominar conceitos avançados de ponteiros</li>
        <li>Implementar arrays e matrizes eficientemente</li>
        <li>Aplicar structs para organização de dados complexos</li>
    </ul>

    <h2>1. Estruturas de Dados: Conceitos Fundamentais</h2>

    <h3>Definição Formal de Estrutura de Dados</h3>
    <p>Uma estrutura de dados é um sistema matemático organizado:</p>
    <p><strong>S = (D, O, R)</strong></p>
    <p>Onde:</p>
    <ul>
        <li><strong>D</strong> = Conjunto finito de dados armazenados</li>
        <li><strong>O</strong> = Conjunto de operações primitivas permitidas</li>
        <li><strong>R</strong> = Conjunto de relações e invariantes entre elementos</li>
    </ul>
    `
  },
  'aula03': {
    title: '📙 Aula 03: Análise de Algoritmos e Prática de Análise',
    pdf: '/aulas/pdf/aula03.pdf',
    content: `
    <h1>Aula 03: Análise de Algoritmos e Prática de Análise</h1>
    
    <p><strong>Tópicos Abordados:</strong></p>
    <ul>
        <li>Análise de complexidade de tempo e espaço</li>
        <li>Notações assintóticas (Big-O, Ω, Θ)</li>
        <li>Análise de melhor, pior e caso médio</li>
        <li>Técnicas de análise prática</li>
        <li>Benchmarking e medição de performance</li>
    </ul>
    `
  },
  'aula04': {
    title: '📕 Aula 04: Definições Recursivas e Como Implementar Recursividade',
    pdf: '/aulas/pdf/aula04.pdf',
    content: `
    <h1>Aula 04: Definições Recursivas e Como Implementar Recursividade</h1>
    
    <p><strong>Objetivos:</strong></p>
    <ul>
        <li>Compreender conceitos de recursividade</li>
        <li>Implementar funções recursivas corretamente</li>
        <li>Identificar casos base e recursivos</li>
        <li>Aplicar recursão em problemas práticos</li>
    </ul>

    <h2>1. Conceitos Fundamentais</h2>

    <h3>1.1 Definição de Recursividade</h3>
    <p>Uma função é <strong>recursiva</strong> quando chama a si mesma para resolver uma versão menor do mesmo problema.</p>
    `
  },
  'aulas05-14': {
    title: '📚 Aulas 05-14: Conteúdo Avançado',
    content: `
    <h1>Aulas 05-14: Conteúdo Avançado</h1>
    
    <h2>📚 Índice das Aulas</h2>
    <ul>
        <li>Aula 05: Desenvolvendo Algoritmos com Recursividade</li>
        <li>Aula 06: Quando Não Usar Recursividade</li>
        <li>Aula 07: Análise Ordenação Elementar e Mergesort</li>
        <li>Aula 08: Quicksort e Shellsort</li>
        <li>Aulas 09-12: Árvores e Grafos</li>
        <li>Aula 13: Roteiro de Laboratório</li>
        <li>Aula 14: Projetos Finais</li>
    </ul>
    `
  }
};

const AulaModal = ({ open, onClose, aulaId, onAulaChange }) => {
  const [currentAula, setCurrentAula] = useState(aulaId || 'aula01');
  
  const aulaKeys = Object.keys(aulasData);
  const currentIndex = aulaKeys.indexOf(currentAula);
  const aula = aulasData[currentAula];

  useEffect(() => {
    if (aulaId) {
      setCurrentAula(aulaId);
    }
  }, [aulaId]);

  const navigateAula = (direction) => {
    let newIndex;
    if (direction === 'prev' && currentIndex > 0) {
      newIndex = currentIndex - 1;
    } else if (direction === 'next' && currentIndex < aulaKeys.length - 1) {
      newIndex = currentIndex + 1;
    } else {
      return;
    }
    
    const newAulaId = aulaKeys[newIndex];
    setCurrentAula(newAulaId);
    if (onAulaChange) {
      onAulaChange(newAulaId);
    }
  };

  if (!aula) {
    return null;
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{aula.title}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      
      <DialogContent>
        {/* Navigation */}
        <Paper sx={{ p: 2, mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            startIcon={<PrevIcon />}
            onClick={() => navigateAula('prev')}
            disabled={currentIndex === 0}
            variant="outlined"
          >
            Anterior
          </Button>
          
          <Typography variant="h6" sx={{ mx: 2, textAlign: 'center' }}>
            {aula.title}
          </Typography>
          
          <Button
            endIcon={<NextIcon />}
            onClick={() => navigateAula('next')}
            disabled={currentIndex === aulaKeys.length - 1}
            variant="outlined"
          >
            Próxima
          </Button>
        </Paper>

        {/* PDF Download */}
        {aula.pdf && (
          <Paper sx={{ p: 2, mb: 2, textAlign: 'center', background: 'linear-gradient(135deg, #fd79a8 0%, #e84393 100%)', color: 'white' }}>
            <Button
              startIcon={<DownloadIcon />}
              href={aula.pdf}
              target="_blank"
              variant="contained"
              sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
            >
              📄 Download PDF Completo
            </Button>
          </Paper>
        )}

        {/* Content */}
        <Paper sx={{ p: 3 }}>
          <Box 
            dangerouslySetInnerHTML={{ __html: aula.content }}
            sx={{
              '& h1': { color: '#2c3e50', fontSize: '2rem', mb: 2 },
              '& h2': { color: '#34495e', fontSize: '1.5rem', mt: 3, mb: 2 },
              '& h3': { color: '#2980b9', fontSize: '1.3rem', mt: 2, mb: 1 },
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

export default AulaModal;