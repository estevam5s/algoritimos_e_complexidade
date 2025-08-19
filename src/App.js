
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import MainContent from './components/Sections/MainContent';
import ChatModal from './components/Chat/ChatModal';
import CodeEditorModal from './components/CodeEditor/CodeEditorModal';
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
  const [chatOpen, setChatOpen] = useState(false);
  const [codeEditorOpen, setCodeEditorOpen] = useState(false);
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

  const handleSectionChange = (section) => {
    setActiveSection(section);
    if (section === 'chatbot') {
      setChatOpen(true);
    } else if (section === 'code-editor') {
      setCodeEditorOpen(true);
    }
  };

  const openAulaModal = (aulaId) => {
    setCurrentAula(aulaId);
    setAulaModalOpen(true);
  };

  const openExercicioModal = (exercicioId) => {
    setCurrentExercicio(exercicioId);
    setExercicioModalOpen(true);
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
            onOpenChat={() => setChatOpen(true)}
            onOpenCodeEditor={() => setCodeEditorOpen(true)}
          />
          
          {/* Modais */}
          <ChatModal 
            open={chatOpen} 
            onClose={() => setChatOpen(false)} 
          />
          <CodeEditorModal 
            open={codeEditorOpen} 
            onClose={() => setCodeEditorOpen(false)} 
          />
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
