
// Configurações do projeto
export const CONFIG = {
  APP_NAME: 'Algoritmos e Complexidade Computacional',
  VERSION: '1.0.0',
  PROFESSOR: 'Vagner Cordeiro',
  DISCIPLINA: 'ARA0174',
  PERIODO: '2025.2',
  CARGA_HORARIA: '80 horas',
  
  API: {
    GEMINI_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
    GEMINI_KEY: 'AIzaSyCRfarEDTrIlXNPdonkf-KNAU414KrGnEQ'
  },
  
  SECTIONS: [
    { id: 'overview', label: '📚 Visão Geral', icon: '📚' },
    { id: 'ementa', label: '📋 Ementa', icon: '📋' },
    { id: 'aulas', label: '🎓 Aulas', icon: '🎓' },
    { id: 'exercicios', label: '💻 Exercícios', icon: '💻' },
    { id: 'recursos', label: '🔧 Recursos', icon: '🔧' },
    { id: 'cronograma', label: '📅 Cronograma', icon: '📅' },
    { id: 'chatbot', label: '🤖 IA Assistant', icon: '🤖' },
    { id: 'code-editor', label: '⚡ Editor de Código', icon: '⚡' }
  ],
  
  COLORS: {
    primary: '#667eea',
    secondary: '#764ba2',
    success: '#00b894',
    warning: '#fdcb6e',
    error: '#e17055',
    info: '#74b9ff'
  }
};

export default CONFIG;
