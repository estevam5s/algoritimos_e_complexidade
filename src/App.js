import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import MainContent from './components/Sections/MainContent';
import Footer from './components/Footer/Footer';
import AulaModal from './components/Modals/AulaModal';
import ExercicioModal from './components/Modals/ExercicioModal';
import DocsModal from './components/Modals/DocsModal';
import './styles/App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
    },
    secondary: {
      main: '#764ba2',
    },
    background: {
      default: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
});

function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [aulaModalOpen, setAulaModalOpen] = useState(false);
  const [exercicioModalOpen, setExercicioModalOpen] = useState(false);
  const [docsModalOpen, setDocsModalOpen] = useState(false);
  const [currentAula, setCurrentAula] = useState('aula01');
  const [currentExercicio, setCurrentExercicio] = useState('lista01');
  const [currentDoc, setCurrentDoc] = useState('compilacao');

  // Carregar seção salva do localStorage
  useEffect(() => {
    const savedSection = localStorage.getItem('algoritmos_current_section');
    if (savedSection) {
      setActiveSection(savedSection);
    }
  }, []);

  // Salvar seção atual no localStorage
  useEffect(() => {
    localStorage.setItem('algoritmos_current_section', activeSection);
  }, [activeSection]);

  // Analytics simples
  useEffect(() => {
    let count = localStorage.getItem('algoritmos_visitor_count') || 0;
    count = parseInt(count) + 1;
    localStorage.setItem('algoritmos_visitor_count', count);
  }, []);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    
    // Rastrear uso
    const usage = JSON.parse(localStorage.getItem('algoritmos_usage') || '{}');
    usage[`section_${section}`] = (usage[`section_${section}`] || 0) + 1;
    localStorage.setItem('algoritmos_usage', JSON.stringify(usage));
  };

  const openAulaModal = (aulaId) => {
    setCurrentAula(aulaId);
    setAulaModalOpen(true);
    
    // Rastrear visualização de aula
    const usage = JSON.parse(localStorage.getItem('algoritmos_usage') || '{}');
    usage[`aula_${aulaId}`] = (usage[`aula_${aulaId}`] || 0) + 1;
    localStorage.setItem('algoritmos_usage', JSON.stringify(usage));
  };

  const openExercicioModal = (exercicioId) => {
    setCurrentExercicio(exercicioId);
    setExercicioModalOpen(true);
    
    // Rastrear visualização de exercício
    const usage = JSON.parse(localStorage.getItem('algoritmos_usage') || '{}');
    usage[`exercicio_${exercicioId}`] = (usage[`exercicio_${exercicioId}`] || 0) + 1;
    localStorage.setItem('algoritmos_usage', JSON.stringify(usage));
  };

  const openDocsModal = (docId) => {
    setCurrentDoc(docId);
    setDocsModalOpen(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Header />
          <Navigation 
            activeSection={activeSection} 
            onSectionChange={handleSectionChange} 
          />
          <MainContent 
            activeSection={activeSection}
            onOpenAulaModal={openAulaModal}
            onOpenExercicioModal={openExercicioModal}
            onOpenDocsModal={openDocsModal}
          />
          <Footer />
          
          {/* Modais */}
          <AulaModal 
            open={aulaModalOpen} 
            onClose={() => setAulaModalOpen(false)}
            aulaId={currentAula}
            onAulaChange={setCurrentAula}
          />
          <ExercicioModal 
            open={exercicioModalOpen} 
            onClose={() => setExercicioModalOpen(false)}
            exercicioId={currentExercicio}
          />
          <DocsModal 
            open={docsModalOpen} 
            onClose={() => setDocsModalOpen(false)}
            docId={currentDoc}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;