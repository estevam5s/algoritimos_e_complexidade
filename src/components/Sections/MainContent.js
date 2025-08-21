import React from 'react';
import { Container } from '@mui/material';
import OverviewSection from './OverviewSection';
import EmentaSection from './EmentaSection';
import AulasSection from './AulasSection';
import ExerciciosSection from './ExerciciosSection';
import RecursosSection from './RecursosSection';
import CronogramaSection from './CronogramaSection';
import ChatSection from './ChatSection';
import CodeEditorSection from './CodeEditorSection';
import ExerciseGeneratorSection from './ExerciseGeneratorSection'; // NOVO
import './MainContent.css';

const MainContent = ({ 
  activeSection, 
  onOpenAulaModal, 
  onOpenExercicioModal, 
  onOpenDocsModal,
  onOpenChat,
  onOpenCodeEditor,
  onOpenExerciseGenerator // NOVO
}) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />;
      case 'ementa':
        return <EmentaSection />;
      case 'aulas':
        return <AulasSection onOpenAulaModal={onOpenAulaModal} />;
      case 'exercicios':
        return <ExerciciosSection onOpenExercicioModal={onOpenExercicioModal} />;
      case 'recursos':
        return <RecursosSection onOpenDocsModal={onOpenDocsModal} />;
      case 'cronograma':
        return <CronogramaSection />;
      case 'chatbot':
        return <ChatSection />;
      case 'code-editor':
        return <CodeEditorSection />;
      case 'exercise-generator': // NOVO
        return <ExerciseGeneratorSection onOpenExerciseGenerator={onOpenExerciseGenerator} />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <Container 
      maxWidth={false} 
      className="main-content"
      sx={{
        maxWidth: 'none !important',
        width: '100%',
        padding: '0 !important',
      }}
    >
      {renderSection()}
    </Container>
  );
};

export default MainContent;