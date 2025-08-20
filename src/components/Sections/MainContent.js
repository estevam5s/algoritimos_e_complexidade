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
import './MainContent.css';

const MainContent = ({ 
  activeSection, 
  onOpenAulaModal, 
  onOpenExercicioModal, 
  onOpenDocsModal,
  onOpenChat,
  onOpenCodeEditor 
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
      default:
        return <OverviewSection />;
    }
  };

  return (
    <Container maxWidth="xl" className="main-content">
      {renderSection()}
    </Container>
  );
};

export default MainContent;