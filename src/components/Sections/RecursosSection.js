import React from 'react';
import { Paper, Typography, Grid, Button, Box } from '@mui/material';

const RecursosSection = ({ onOpenDocsModal }) => {
  // Função melhorada para abrir código fonte
  const openSourceCode = (codeFile, codeName) => {
    try {
      // Tentar GitHub Raw primeiro (mais confiável)
      const githubRawUrl = `https://raw.githubusercontent.com/cordeirotelecom/algoritimos_e_complexidade/main${codeFile}`;
      
      console.log(`Tentando abrir: ${githubRawUrl}`);
      
      const newWindow = window.open(githubRawUrl, '_blank', 'noopener,noreferrer');
      
      if (newWindow) {
        // Verificar se abriu com sucesso após um breve delay
        setTimeout(() => {
          if (newWindow.closed) {
            console.log('Tentativa GitHub falhou, tentando local...');
            // Fallback: tentar caminho local
            window.open(`${window.location.origin}${codeFile}`, '_blank', 'noopener,noreferrer');
          }
        }, 1000);
      } else {
        // Se popup foi bloqueado, tentar local
        window.open(`${window.location.origin}${codeFile}`, '_blank', 'noopener,noreferrer');
      }
    } catch (error) {
      console.error('Erro ao abrir código:', error);
      // Último recurso: copiar URL para clipboard
      navigator.clipboard.writeText(`https://raw.githubusercontent.com/cordeirotelecom/algoritimos_e_complexidade/main${codeFile}`)
        .then(() => alert(`Não foi possível abrir automaticamente. URL copiada para o clipboard: ${codeFile}`))
        .catch(() => alert(`Não foi possível abrir: ${codeFile}`));
    }
  };

  const recursos = [
    {
      id: 'exemplos-c',
      title: '⚙️ Códigos de Exemplo em C',
      description: 'Implementações completas com análise de complexidade e otimizações.',
      type: 'EXEMPLOS C',
      complexity: 'Complexidade: O(log n)',
      link: '/exemplos/c/complexidade/exemplos_complexidade.c'
    },
    {
      id: 'exemplos-python',
      title: '🐍 Códigos de Exemplo em Python',
      description: 'Implementações elegantes e comparações de performance com C.',
      type: 'EXEMPLOS PYTHON',
      complexity: 'Complexidade: O(n log n)',
      link: '/exemplos/python/complexidade/exemplos_complexidade.py'
    },
    {
      id: 'configuracao',
      title: '📚 Guia de Configuração',
      description: 'Instruções completas para configurar ambiente de desenvolvimento.',
      type: 'DOCUMENTAÇÃO',
      complexity: 'C + Python + Tools',
      action: () => onOpenDocsModal('compilacao')
    },
    {
      id: 'ferramentas',
      title: '🛠️ Ferramentas de Desenvolvimento',
      description: 'GCC, Python 3.8+, VS Code, Git e ferramentas de debugging.',
      type: 'FERRAMENTAS',
      complexity: 'Ambiente Completo',
      link: '/docs/compilacao_execucao.md'
    }
  ];

  const recursosOnline = [
    { name: 'VisuAlgo', description: 'Visualização de Algoritmos', url: 'https://visualgo.net/', emoji: '🎨' },
    { name: 'HackerRank', description: 'Prática de Programação', url: 'https://www.hackerrank.com/', emoji: '💻' },
    { name: 'LeetCode', description: 'Problemas Avançados', url: 'https://leetcode.com/', emoji: '🧠' },
    { name: 'GitHub', description: 'Repositório Oficial', url: 'https://github.com/cordeirotelecom/algoritimos_e_complexidade', emoji: '📂' }
  ];

  return (
    <Paper className="content-section" elevation={3}>
      <Typography variant="h4" className="section-title">
        🔧 Recursos e Ferramentas
      </Typography>
      
      <Grid container spacing={3}>
        {recursos.map((recurso) => (
          <Grid item xs={12} md={6} key={recurso.id}>
            <Paper 
              className="recurso-card" 
              elevation={2}
              sx={{
                background: 'linear-gradient(135deg, #00b894 0%, #00cec9 100%)',
                color: 'white',
                padding: '30px',
                borderRadius: '15px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)'
                }
              }}
            >
              <Box sx={{ 
                background: 'rgba(255, 255, 255, 0.2)', 
                padding: '5px 12px', 
                borderRadius: '20px', 
                fontSize: '0.9rem', 
                display: 'inline-block', 
                marginBottom: '15px', 
                fontWeight: 600,
                width: 'fit-content'
              }}>
                {recurso.type}
              </Box>
              
              <Typography variant="h6" gutterBottom>
                {recurso.title}
              </Typography>
              
              <Typography sx={{ marginBottom: '15px', opacity: 0.9, flexGrow: 1 }}>
                {recurso.description}
              </Typography>

              {recurso.id === 'exemplos-c' && (
                <Box sx={{ 
                  background: '#2d3748', 
                  color: '#e2e8f0', 
                  padding: '15px', 
                  borderRadius: '10px', 
                  fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                  fontSize: '0.9rem',
                  marginBottom: '15px',
                  overflow: 'auto'
                }}>
                  {`// Exemplo: Busca Binária em C
int busca_binaria(int arr[], int l, int r, int x) {
    if (r >= l) {
        int mid = l + (r - l) / 2;
        if (arr[mid] == x) return mid;
        if (arr[mid] > x) 
            return busca_binaria(arr, l, mid-1, x);
        return busca_binaria(arr, mid+1, r, x);
    }
    return -1;
}`}
                </Box>
              )}

              {recurso.id === 'exemplos-python' && (
                <Box sx={{ 
                  background: '#2d3748', 
                  color: '#e2e8f0', 
                  padding: '15px', 
                  borderRadius: '10px', 
                  fontFamily: 'Monaco, Consolas, "Courier New", monospace',
                  fontSize: '0.9rem',
                  marginBottom: '15px',
                  overflow: 'auto'
                }}>
                  {`# Exemplo: Merge Sort em Python
def merge_sort(lista):
    if len(lista) <= 1:
        return lista
    
    meio = len(lista) // 2
    esquerda = merge_sort(lista[:meio])
    direita = merge_sort(lista[meio:])
    
    return merge(esquerda, direita)`}
                </Box>
              )}
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                paddingTop: '15px',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                marginTop: 'auto'
              }}>
                <Typography sx={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  {recurso.complexity}
                </Typography>
                {recurso.link ? (
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openSourceCode(recurso.link, recurso.title);
                    }}
                    variant="contained" 
                    sx={{ 
                      background: 'rgba(255, 255, 255, 0.2)', 
                      color: 'white',
                      borderRadius: '20px',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.3)',
                        transform: 'scale(1.05)'
                      }
                    }}
                  >
                    Ver Código
                  </Button>
                ) : (
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (recurso.action) {
                        recurso.action();
                      }
                    }}
                    variant="contained" 
                    sx={{ 
                      background: 'rgba(255, 255, 255, 0.2)', 
                      color: 'white',
                      borderRadius: '20px',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.3)',
                        transform: 'scale(1.05)'
                      }
                    }}
                  >
                    Ver Guia
                  </Button>
                )}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Seção adicional com mais códigos de exemplo */}
      <Paper elevation={2} sx={{ 
        background: 'rgba(255, 255, 255, 0.1)', 
        padding: '25px', 
        margin: '20px 0', 
        borderRadius: '15px' 
      }}>
        <Typography variant="h5" gutterBottom>💻 Biblioteca de Códigos</Typography>
        <Typography variant="body1" sx={{ mb: 3, color: '#34495e' }}>
          Acesse diretamente os códigos de exemplo organizados por categoria:
        </Typography>
        
        <Grid container spacing={2}>
          {[
            { 
              name: 'Algoritmos Básicos (C)', 
              path: '/exemplos/c/basicos/',
              files: ['busca_linear.c', 'busca_binaria.c', 'ordenacao.c'],
              color: '#00b894'
            },
            { 
              name: 'Algoritmos Básicos (Python)', 
              path: '/exemplos/python/basicos/',
              files: ['busca_linear.py', 'busca_binaria.py', 'ordenacao.py'],
              color: '#6c5ce7'
            },
            { 
              name: 'Estruturas de Dados (C)', 
              path: '/exemplos/c/estruturas/',
              files: ['array_dinamico.c', 'lista_ligada.c', 'pilha.c'],
              color: '#fd79a8'
            },
            { 
              name: 'Estruturas de Dados (Python)', 
              path: '/exemplos/python/estruturas/',
              files: ['array_dinamico.py', 'lista_ligada.py', 'pilha.py'],
              color: '#fdcb6e'
            }
          ].map((categoria, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper sx={{ 
                p: 2, 
                background: `${categoria.color}15`,
                border: `2px solid ${categoria.color}`,
                borderRadius: '10px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                }
              }}>
                <Typography variant="h6" sx={{ 
                  color: categoria.color, 
                  fontWeight: 'bold',
                  mb: 2
                }}>
                  {categoria.name}
                </Typography>
                {categoria.files.map((file, fileIndex) => (
                  <Button
                    key={fileIndex}
                    onClick={() => openSourceCode(`${categoria.path}${file}`, file)}
                    sx={{
                      width: '100%',
                      justifyContent: 'flex-start',
                      mb: 1,
                      color: categoria.color,
                      textTransform: 'none',
                      fontSize: '0.8rem',
                      '&:hover': {
                        background: `${categoria.color}20`,
                        transform: 'translateX(5px)'
                      }
                    }}
                  >
                    📄 {file}
                  </Button>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper elevation={2} sx={{ 
        background: 'rgba(255, 255, 255, 0.1)', 
        padding: '25px', 
        margin: '20px 0', 
        borderRadius: '15px' 
      }}>
        <Typography variant="h5" gutterBottom>🌐 Recursos Online Recomendados</Typography>
        <Grid container spacing={2}>
          {recursosOnline.map((recurso, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Button
                href={recurso.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: '100%',
                  height: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: `rgba(${100 + index * 50}, ${150 + index * 30}, 255, 0.1)`,
                  borderRadius: '10px',
                  textDecoration: 'none',
                  color: '#2c3e50',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
                  }
                }}
              >
                <Typography variant="h4" sx={{ mb: 1 }}>{recurso.emoji}</Typography>
                <Typography variant="h6" gutterBottom>{recurso.name}</Typography>
                <Typography variant="body2">{recurso.description}</Typography>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Paper>
  );
};

export default RecursosSection;