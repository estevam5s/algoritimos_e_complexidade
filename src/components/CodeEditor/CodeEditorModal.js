import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Paper,
  IconButton,
  Tabs,
  Tab
} from '@mui/material';
import {
  Close as CloseIcon,
  PlayArrow as RunIcon,
  Clear as ClearIcon,
  Save as SaveIcon,
  Code as CodeIcon
} from '@mui/icons-material';

const CodeEditorModal = ({ open, onClose }) => {
  const [currentLanguage, setCurrentLanguage] = useState('c');
  const [code, setCode] = useState({
    c: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
    python: 'print("Hello, World!")'
  });
  const [output, setOutput] = useState(['🚀 Editor de Código Inicializado', '💡 Selecione uma linguagem e digite seu código', '⚡ Pressione "Executar" para ver o resultado']);

  const codeTemplates = {
    hello_c: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
    hello_python: 'print("Hello, World!")',
    bubble_sort_c: `#include <stdio.h>

void bubble_sort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

void print_array(int arr[], int size) {
    for (int i = 0; i < size; i++)
        printf("%d ", arr[i]);
    printf("\\n");
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    printf("Array original: ");
    print_array(arr, n);
    
    bubble_sort(arr, n);
    
    printf("Array ordenado: ");
    print_array(arr, n);
    
    return 0;
}`,
    bubble_sort_python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n-1):
        for j in range(n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

def main():
    arr = [64, 34, 25, 12, 22, 11, 90]
    
    print("Array original:", arr)
    bubble_sort(arr)
    print("Array ordenado:", arr)

if __name__ == "__main__":
    main()`
  };

  const handleLanguageChange = (event, newLanguage) => {
    setCurrentLanguage(newLanguage);
  };

  const loadTemplate = (templateId) => {
    const newCode = { ...code };
    newCode[currentLanguage] = codeTemplates[templateId];
    setCode(newCode);
    addOutput(`📝 Template carregado: ${templateId}`, 'success');
  };

  const runCode = () => {
    const currentCode = code[currentLanguage];
    if (!currentCode.trim()) {
      addOutput('❌ Erro: Código vazio', 'error');
      return;
    }

    addOutput(`🚀 Executando código ${currentLanguage.toUpperCase()}...`, 'info');
    
    // Simular execução
    setTimeout(() => {
      if (currentLanguage === 'c') {
        simulateCExecution(currentCode);
      } else {
        simulatePythonExecution(currentCode);
      }
    }, 1000);
  };

  const simulateCExecution = (currentCode) => {
    if (currentCode.includes('printf')) {
      const printfMatches = currentCode.match(/printf\s*\(\s*"([^"]+)"/g);
      if (printfMatches) {
        printfMatches.forEach(match => {
          const outputText = match.match(/"([^"]+)"/)[1];
          const processedOutput = outputText.replace(/\\n/g, '\n').replace(/\\t/g, '    ');
          addOutput(processedOutput, 'success');
        });
      }
    }
    
    if (currentCode.includes('bubble_sort')) {
      addOutput('Array original: 64 34 25 12 22 11 90', 'success');
      addOutput('Array ordenado: 11 12 22 25 34 64 90', 'success');
    }
    
    addOutput('✅ Programa executado com sucesso (código de saída: 0)', 'success');
  };

  const simulatePythonExecution = (currentCode) => {
    if (currentCode.includes('print(')) {
      if (currentCode.includes('Hello, World!')) {
        addOutput('Hello, World!', 'success');
      }
      if (currentCode.includes('Array original')) {
        addOutput('Array original: [64, 34, 25, 12, 22, 11, 90]', 'success');
        addOutput('Array ordenado: [11, 12, 22, 25, 34, 64, 90]', 'success');
      }
    }
    addOutput('✅ Script Python executado com sucesso', 'success');
  };

  const addOutput = (text, type = 'info') => {
    setOutput(prev => [...prev, { text, type, timestamp: new Date().toLocaleTimeString() }]);
  };

  const clearEditor = () => {
    const newCode = { ...code };
    newCode[currentLanguage] = '';
    setCode(newCode);
    addOutput('🗑️ Editor limpo', 'info');
  };

  const saveCode = () => {
    localStorage.setItem(`algoritmos_code_${currentLanguage}`, code[currentLanguage]);
    addOutput(`💾 Código salvo (${new Date().toLocaleTimeString()})`, 'success');
  };

  const handleCodeChange = (newCode) => {
    const updatedCode = { ...code };
    updatedCode[currentLanguage] = newCode;
    setCode(updatedCode);
  };

  useEffect(() => {
    // Carregar código salvo
    const savedC = localStorage.getItem('algoritmos_code_c');
    const savedPython = localStorage.getItem('algoritmos_code_python');
    
    if (savedC || savedPython) {
      setCode({
        c: savedC || code.c,
        python: savedPython || code.python
      });
    }
  }, []);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xl" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">⚡ Editor de Código - C & Python</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      
      <DialogContent>
        {/* Templates */}
        <Paper sx={{ p: 2, mb: 2, background: 'rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="h6" gutterBottom>📝 Templates Rápidos</Typography>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={4} md={2}>
              <Button 
                fullWidth 
                variant="outlined" 
                onClick={() => loadTemplate('hello_c')}
                sx={{ fontSize: '0.8rem' }}
              >
                🔧 Hello (C)
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button 
                fullWidth 
                variant="outlined" 
                onClick={() => loadTemplate('hello_python')}
                sx={{ fontSize: '0.8rem' }}
              >
                🐍 Hello (Python)
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button 
                fullWidth 
                variant="outlined" 
                onClick={() => loadTemplate('bubble_sort_c')}
                sx={{ fontSize: '0.8rem' }}
              >
                🔧 Bubble Sort (C)
              </Button>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Button 
                fullWidth 
                variant="outlined" 
                onClick={() => loadTemplate('bubble_sort_python')}
                sx={{ fontSize: '0.8rem' }}
              >
                🐍 Bubble Sort (Python)
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={2} sx={{ height: '600px' }}>
          {/* Editor Panel */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              {/* Header */}
              <Box sx={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                color: 'white', 
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Typography variant="h6">💻 Editor de Código</Typography>
                <Tabs value={currentLanguage} onChange={handleLanguageChange} textColor="inherit">
                  <Tab value="c" label="C" sx={{ color: 'white', minWidth: 60 }} />
                  <Tab value="python" label="Python" sx={{ color: 'white', minWidth: 80 }} />
                </Tabs>
              </Box>
              
              {/* Toolbar */}
              <Box sx={{ p: 1, borderBottom: 1, borderColor: 'divider', display: 'flex', gap: 1 }}>
                <Button
                  startIcon={<RunIcon />}
                  variant="contained"
                  color="success"
                  onClick={runCode}
                  size="small"
                >
                  Executar
                </Button>
                <Button
                  startIcon={<ClearIcon />}
                  variant="outlined"
                  color="error"
                  onClick={clearEditor}
                  size="small"
                >
                  Limpar
                </Button>
                <Button
                  startIcon={<SaveIcon />}
                  variant="outlined"
                  onClick={saveCode}
                  size="small"
                >
                  Salvar
                </Button>
              </Box>
              
              {/* Code Editor */}
              <TextField
                multiline
                fullWidth
                value={code[currentLanguage]}
                onChange={(e) => handleCodeChange(e.target.value)}
                placeholder={currentLanguage === 'c' ? 'Digite seu código C aqui...' : 'Digite seu código Python aqui...'}
                sx={{
                  flex: 1,
                  '& .MuiInputBase-root': {
                    height: '100%',
                    alignItems: 'flex-start',
                    fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                    fontSize: '14px',
                    backgroundColor: '#1e1e1e',
                    color: '#d4d4d4'
                  },
                  '& .MuiInputBase-input': {
                    height: '100% !important',
                    overflow: 'auto !important'
                  }
                }}
              />
            </Paper>
          </Grid>

          {/* Terminal Panel */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ 
                background: '#2d3748', 
                color: 'white', 
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}>
                <Typography variant="h6">💻 Terminal de Saída</Typography>
              </Box>
              
              <Box sx={{ 
                flex: 1, 
                p: 2, 
                backgroundColor: '#1e1e1e', 
                color: '#d4d4d4',
                fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                fontSize: '14px',
                overflow: 'auto'
              }}>
                {output.map((line, index) => (
                  <Box key={index} sx={{ 
                    mb: 0.5,
                    color: line.type === 'error' ? '#ff6b6b' : 
                           line.type === 'success' ? '#51cf66' : 
                           line.type === 'info' ? '#74c0fc' : '#d4d4d4'
                  }}>
                    {typeof line === 'string' ? line : line.text}
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default CodeEditorModal;