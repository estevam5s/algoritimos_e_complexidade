import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  IconButton,
  Paper
} from '@mui/material';
import {
  Close as CloseIcon
} from '@mui/icons-material';

const docsData = {
  'compilacao': {
    title: 'Guia de Compilação e Execução',
    content: `
    <h1>Guia de Compilação e Execução</h1>
    
    <h2>📋 Pré-requisitos</h2>

    <h3>Para C:</h3>
    <ul>
        <li><strong>GCC</strong> (GNU Compiler Collection)</li>
        <li><strong>Windows:</strong> MinGW-w64 ou Visual Studio</li>
        <li><strong>Linux/Mac:</strong> gcc instalado via package manager</li>
    </ul>

    <h3>Para Python:</h3>
    <ul>
        <li><strong>Python 3.8+</strong></li>
        <li><strong>Bibliotecas:</strong> time, random (built-in)</li>
    </ul>

    <h2>🔧 Compilação dos Exemplos em C</h2>

    <h3>Compilação Básica</h3>
    <pre><code># Exemplo de complexidade
gcc -o exemplos_complexidade exemplos/c/complexidade/exemplos_complexidade.c

# Com flags de otimização e debug
gcc -Wall -g -O2 -o exemplos_complexidade exemplos/c/complexidade/exemplos_complexidade.c</code></pre>

    <h3>Compilação em Lote (Windows PowerShell)</h3>
    <pre><code># Compilar todos os exemplos C
Get-ChildItem -Path "exemplos/c" -Filter "*.c" -Recurse | ForEach-Object {
    $outputName = $_.BaseName
    $inputPath = $_.FullName
    gcc -Wall -g -o "bin/$outputName" $inputPath
}</code></pre>

    <h2>▶️ Execução dos Exemplos</h2>

    <h3>C (após compilação):</h3>
    <pre><code># Windows
.\\bin\\exemplos_complexidade.exe

# Linux/Mac
./bin/exemplos_complexidade</code></pre>

    <h3>Python:</h3>
    <pre><code># Executar diretamente
python exemplos/python/complexidade/exemplos_complexidade.py

# Com medição de tempo
python -m cProfile exemplos/python/complexidade/exemplos_complexidade.py</code></pre>

    <h2>🐛 Debugging</h2>

    <h3>Flags Úteis para Compilação C</h3>
    <pre><code># Debug completo
gcc -Wall -Wextra -g -fsanitize=address -o programa programa.c

# Análise estática
gcc -Wall -Wextra -Wpedantic -g -o programa programa.c

# Otimização máxima
gcc -Wall -O3 -DNDEBUG -o programa programa.c</code></pre>

    <h2>📁 Estrutura de Diretórios Recomendada</h2>
    <pre><code>algoritimos_github/
├── bin/                    # Executáveis compilados
├── exemplos/
│   ├── c/
│   │   ├── complexidade/
│   │   ├── estruturas/
│   │   └── algoritmos/
│   └── python/
│       ├── complexidade/
│       ├── estruturas/
│       └── algoritmos/
├── tests/                  # Scripts de teste
├── docs/                   # Documentação adicional
├── assets/                 # Recursos (imagens, etc.)
└── tools/                  # Ferramentas auxiliares</code></pre>
    `
  }
};

const DocsModal = ({ open, onClose, docId }) => {
  const doc = docsData[docId];

  if (!doc) {
    return null;
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{doc.title}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      
      <DialogContent>
        <Paper sx={{ p: 3 }}>
          <Box 
            dangerouslySetInnerHTML={{ __html: doc.content }}
            sx={{
              '& h1': { color: '#2c3e50', fontSize: '2rem', mb: 2 },
              '& h2': { color: '#34495e', fontSize: '1.5rem', mt: 3, mb: 2 },
              '& h3': { color: '#2980b9', fontSize: '1.3rem', mt: 2, mb: 1 },
              '& p': { mb: 2, lineHeight: 1.6 },
              '& ul, & ol': { mb: 2, pl: 3 },
              '& li': { mb: 1 },
              '& strong': { fontWeight: 600 },
              '& pre': { 
                background: '#2d3748', 
                color: '#e2e8f0', 
                p: 2, 
                borderRadius: 1, 
                overflow: 'auto',
                fontFamily: 'Monaco, Consolas, "Courier New", monospace'
              },
              '& code': { 
                background: '#f8f9fa', 
                color: '#e83e8c', 
                p: 0.5, 
                borderRadius: 0.5,
                fontFamily: 'Monaco, Consolas, "Courier New", monospace'
              },
              '& pre code': {
                background: 'transparent',
                color: '#e2e8f0',
                p: 0
              }
            }}
          />
        </Paper>
      </DialogContent>
    </Dialog>
  );
};

export default DocsModal;