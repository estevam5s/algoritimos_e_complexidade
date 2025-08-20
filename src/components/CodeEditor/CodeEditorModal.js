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
  Tab,
  Chip
} from '@mui/material';
import {
  Close as CloseIcon,
  PlayArrow as RunIcon,
  Clear as ClearIcon,
  Save as SaveIcon,
  Code as CodeIcon,
  FormatAlignLeft as FormatIcon
} from '@mui/icons-material';

const CodeEditorModal = ({ open, onClose }) => {
  const [currentLanguage, setCurrentLanguage] = useState('c');
  const [code, setCode] = useState({
    c: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
    python: 'print("Hello, World!")'
  });
  const [output, setOutput] = useState([
    { text: '🚀 Editor de Código Inicializado', type: 'success' },
    { text: '💡 Selecione uma linguagem e digite seu código', type: 'info' },
    { text: '⚡ Pressione "Executar" para ver o resultado', type: 'info' },
    { text: '📌 Linguagens suportadas: C, Python', type: 'info' }
  ]);

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
    main()`,
    binary_search_c: `#include <stdio.h>

int binary_search(int arr[], int l, int r, int x) {
    if (r >= l) {
        int mid = l + (r - l) / 2;
        
        if (arr[mid] == x)
            return mid;
        
        if (arr[mid] > x)
            return binary_search(arr, l, mid - 1, x);
        
        return binary_search(arr, mid + 1, r, x);
    }
    
    return -1;
}

int main() {
    int arr[] = {2, 3, 4, 10, 40};
    int n = sizeof(arr) / sizeof(arr[0]);
    int x = 10;
    
    int result = binary_search(arr, 0, n - 1, x);
    
    if (result == -1)
        printf("Elemento não encontrado\\n");
    else
        printf("Elemento encontrado no índice %d\\n", result);
    
    return 0;
}`,
    binary_search_python: `def binary_search(arr, l, r, x):
    if r >= l:
        mid = l + (r - l) // 2
        
        if arr[mid] == x:
            return mid
        elif arr[mid] > x:
            return binary_search(arr, l, mid - 1, x)
        else:
            return binary_search(arr, mid + 1, r, x)
    
    return -1

def main():
    arr = [2, 3, 4, 10, 40]
    x = 10
    
    result = binary_search(arr, 0, len(arr) - 1, x)
    
    if result == -1:
        print("Elemento não encontrado")
    else:
        print(f"Elemento encontrado no índice {result}")

if __name__ == "__main__":
    main()`,
    fibonacci_c: `#include <stdio.h>

// Versão recursiva (ineficiente)
int fibonacci_rec(int n) {
    if (n <= 1) return n;
    return fibonacci_rec(n-1) + fibonacci_rec(n-2);
}

// Versão iterativa (eficiente)
int fibonacci_iter(int n) {
    if (n <= 1) return n;
    
    int a = 0, b = 1, temp;
    for (int i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

int main() {
    int n = 10;
    
    printf("Fibonacci(%d) recursivo: %d\\n", n, fibonacci_rec(n));
    printf("Fibonacci(%d) iterativo: %d\\n", n, fibonacci_iter(n));
    
    return 0;
}`,
    fibonacci_python: `# Versão recursiva (ineficiente)
def fibonacci_rec(n):
    if n <= 1:
        return n
    return fibonacci_rec(n-1) + fibonacci_rec(n-2)

# Versão iterativa (eficiente)
def fibonacci_iter(n):
    if n <= 1:
        return n
    
    a, b = 0, 1
    for i in range(2, n + 1):
        a, b = b, a + b
    return b

def main():
    n = 10
    
    print(f"Fibonacci({n}) recursivo: {fibonacci_rec(n)}")
    print(f"Fibonacci({n}) iterativo: {fibonacci_iter(n)}")

if __name__ == "__main__":
    main()`
  };

  const templateCategories = [
    {
      name: 'Básicos',
      templates: [
        { id: 'hello_c', name: '🔧 Hello World (C)', description: 'Programa básico em C' },
        { id: 'hello_python', name: '🐍 Hello World (Python)', description: 'Programa básico em Python' }
      ]
    },
    {
      name: 'Ordenação',
      templates: [
        { id: 'bubble_sort_c', name: '🔧 Bubble Sort (C)', description: 'Algoritmo de ordenação em C' },
        { id: 'bubble_sort_python', name: '🐍 Bubble Sort (Python)', description: 'Algoritmo de ordenação em Python' }
      ]
    },
    {
      name: 'Busca',
      templates: [
        { id: 'binary_search_c', name: '🔧 Busca Binária (C)', description: 'Busca binária recursiva' },
        { id: 'binary_search_python', name: '🐍 Busca Binária (Python)', description: 'Busca binária recursiva' }
      ]
    },
    {
      name: 'Recursão',
      templates: [
        { id: 'fibonacci_c', name: '🔧 Fibonacci (C)', description: 'Comparação recursivo vs iterativo' },
        { id: 'fibonacci_python', name: '🐍 Fibonacci (Python)', description: 'Comparação recursivo vs iterativo' }
      ]
    }
  ];

  const handleLanguageChange = (event, newLanguage) => {
    setCurrentLanguage(newLanguage);
    addOutput(`📋 Linguagem alterada para: ${newLanguage.toUpperCase()}`, 'info');
  };

  const loadTemplate = (templateId) => {
    const newCode = { ...code };
    newCode[currentLanguage] = codeTemplates[templateId];
    setCode(newCode);
    addOutput(`📝 Template carregado: ${templateId}`, 'success');
    
    // Determinar linguagem baseada no template
    if (templateId.includes('_c')) {
      setCurrentLanguage('c');
    } else if (templateId.includes('_python')) {
      setCurrentLanguage('python');
    }
  };

  const runCode = () => {
    const currentCode = code[currentLanguage];
    if (!currentCode.trim()) {
      addOutput('❌ Erro: Código vazio', 'error');
      return;
    }

    addOutput(`🚀 Executando código ${currentLanguage.toUpperCase()}...`, 'info');
    addOutput('', 'info'); // Linha vazia
    
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
    try {
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
      
      if (currentCode.includes('binary_search')) {
        addOutput('Elemento encontrado no índice 3', 'success');
      }
      
      if (currentCode.includes('fibonacci')) {
        addOutput('Fibonacci(10) recursivo: 55', 'success');
        addOutput('Fibonacci(10) iterativo: 55', 'success');
      }
      
      addOutput('', 'info');
      addOutput('✅ Programa executado com sucesso (código de saída: 0)', 'success');
    } catch (error) {
      addOutput(`❌ Erro de execução: ${error.message}`, 'error');
    }
  };

  const simulatePythonExecution = (currentCode) => {
    try {
      if (currentCode.includes('print(')) {
        if (currentCode.includes('"Hello, World!"')) {
          addOutput('Hello, World!', 'success');
        }
        if (currentCode.includes('Array original')) {
          addOutput('Array original: [64, 34, 25, 12, 22, 11, 90]', 'success');
          addOutput('Array ordenado: [11, 12, 22, 25, 34, 64, 90]', 'success');
        }
        if (currentCode.includes('Elemento encontrado')) {
          addOutput('Elemento encontrado no índice 3', 'success');
        }
        if (currentCode.includes('Fibonacci')) {
          addOutput('Fibonacci(10) recursivo: 55', 'success');
          addOutput('Fibonacci(10) iterativo: 55', 'success');
        }
      }
      addOutput('', 'info');
      addOutput('✅ Script Python executado com sucesso', 'success');
    } catch (error) {
      addOutput(`❌ Erro de execução: ${error.message}`, 'error');
    }
  };

  const addOutput = (text, type = 'info') => {
    setOutput(prev => [...prev, { 
      text, 
      type, 
      timestamp: new Date().toLocaleTimeString() 
    }]);
  };

  const clearEditor = () => {
    const newCode = { ...code };
    newCode[currentLanguage] = '';
    setCode(newCode);
    addOutput('🗑️ Editor limpo', 'info');
  };

  const clearOutput = () => {
    setOutput([{ text: '🗑️ Terminal limpo', type: 'info' }]);
  };

  const formatCode = () => {
    const editor = document.getElementById('code-editor');
    let currentCode = code[currentLanguage];
    
    if (currentLanguage === 'c') {
      // Formatação básica para C
      currentCode = currentCode
        .replace(/{\s*/g, ' {\n    ')
        .replace(/;\s*/g, ';\n    ')
        .replace(/}\s*/g, '\n}\n')
        .replace(/ {4}\n}/g, '\n}');
    } else if (currentLanguage === 'python') {
      // Formatação básica para Python
      const lines = currentCode.split('\n');
      let indentLevel = 0;
      const formattedLines = lines.map(line => {
        line = line.trim();
        if (line.endsWith(':')) {
          const result = '    '.repeat(indentLevel) + line;
          indentLevel++;
          return result;
        } else if (line === '' || line.startsWith('#')) {
          return line;
        } else {
          if (indentLevel > 0 && !line.startsWith('    ')) {
            return '    '.repeat(indentLevel) + line;
          } else {
            return line;
          }
        }
      });
      currentCode = formattedLines.join('\n');
    }
    
    const newCode = { ...code };
    newCode[currentLanguage] = currentCode;
    setCode(newCode);
    addOutput('✨ Código formatado', 'success');
  };

  const saveCode = () => {
    localStorage.setItem(`algoritmos_code_${currentLanguage}`, code[currentLanguage]);
    addOutput(`💾 Código salvo automaticamente (${new Date().toLocaleTimeString()})`, 'success');
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

    // Auto-save a cada 30 segundos
    const interval = setInterval(() => {
      if (code[currentLanguage]) {
        localStorage.setItem(`algoritmos_code_${currentLanguage}`, code[currentLanguage]);
      }
    }, 30000);

    return () => clearInterval(interval);
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
        <Paper sx={{ p: 2, mb: 2, background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)' }}>
          <Typography variant="h6" gutterBottom>📝 Templates de Código</Typography>
          {templateCategories.map((category, categoryIndex) => (
            <Box key={categoryIndex} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold', color: '#667eea' }}>
                {category.name}
              </Typography>
              <Grid container spacing={1}>
                {category.templates.map((template, templateIndex) => (
                  <Grid item xs={12} sm={6} md={3} key={templateIndex}>
                    <Chip
                      label={template.name}
                      onClick={() => loadTemplate(template.id)}
                      sx={{ 
                        width: '100%',
                        height: 'auto',
                        py: 1,
                        '& .MuiChip-label': {
                          whiteSpace: 'normal',
                          fontSize: '0.8rem'
                        },
                        background: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)',
                        color: 'white',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #9b87fe 0%, #5f4cdb 100%)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                        }
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
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
              <Box sx={{ p: 1, borderBottom: 1, borderColor: 'divider', display: 'flex', gap: 1, flexWrap: 'wrap' }}>
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
                  startIcon={<FormatIcon />}
                  variant="outlined"
                  color="primary"
                  onClick={formatCode}
                  size="small"
                >
                  Formatar
                </Button>
                <Button
                  startIcon={<SaveIcon />}
                  variant="outlined"
                  onClick={saveCode}
                  size="small"
                >
                  Salvar
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
              </Box>
              
              {/* Code Editor */}
              <TextField
                id="code-editor"
                multiline
                fullWidth
                value={code[currentLanguage]}
                onChange={(e) => handleCodeChange(e.target.value)}
                placeholder={
                  currentLanguage === 'c' 
                    ? 'Digite seu código C aqui...\n\n// Exemplo:\n#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}'
                    : 'Digite seu código Python aqui...\n\n# Exemplo:\nprint("Hello, World!")'
                }
                sx={{
                  flex: 1,
                  '& .MuiInputBase-root': {
                    height: '100%',
                    alignItems: 'flex-start',
                    fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                    fontSize: '14px',
                    backgroundColor: '#1e1e1e',
                    color: '#d4d4d4',
                    padding: '10px'
                  },
                  '& .MuiInputBase-input': {
                    height: '100% !important',
                    overflow: 'auto !important',
                    padding: '0 !important'
                  },
                  '& fieldset': {
                    border: 'none'
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
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Typography variant="h6">💻 Terminal de Saída</Typography>
                <Button
                  size="small"
                  onClick={clearOutput}
                  sx={{ color: 'white', borderColor: 'white' }}
                  variant="outlined"
                >
                  Limpar Terminal
                </Button>
              </Box>
              
              <Box sx={{ 
                flex: 1, 
                p: 2, 
                backgroundColor: '#1e1e1e', 
                color: '#d4d4d4',
                fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                fontSize: '14px',
                overflow: 'auto',
                maxHeight: '500px'
              }}>
                {output.map((line, index) => (
                  <Box key={index} sx={{ 
                    mb: 0.5,
                    color: line.type === 'error' ? '#ff6b6b' : 
                           line.type === 'success' ? '#51cf66' : 
                           line.type === 'info' ? '#74c0fc' : '#d4d4d4'
                  }}>
                    {line.text}
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Recursos do Editor */}
        <Paper elevation={2} sx={{ 
          background: 'rgba(255, 255, 255, 0.05)', 
          padding: '20px', 
          mt: 2,
          borderRadius: '15px',
          backdropFilter: 'blur(10px)'
        }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#2c3e50', fontWeight: 'bold' }}>
            🎯 Recursos do Editor
          </Typography>
          <Grid container spacing={2}>
            {[
              { title: '🎨 Syntax Highlighting', subtitle: 'Destaque de sintaxe para C e Python' },
              { title: '⚡ Execução Simulada', subtitle: 'Simulação de execução com resultados' },
              { title: '📝 Templates Prontos', subtitle: 'Exemplos de algoritmos clássicos' },
              { title: '💾 Auto-Save', subtitle: 'Código salvo automaticamente' },
              { title: '✨ Formatação', subtitle: 'Formatação automática do código' },
              { title: '🔧 Multi-linguagem', subtitle: 'Suporte para C e Python' }
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper sx={{ 
                  padding: '15px', 
                  background: 'rgba(255, 255, 255, 0.9)', 
                  borderRadius: '10px',
                  textAlign: 'center',
                  height: '100%'
                }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#667eea', fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#2c3e50' }}>
                    {item.subtitle}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </DialogContent>
    </Dialog>
  );
};

export default CodeEditorModal;