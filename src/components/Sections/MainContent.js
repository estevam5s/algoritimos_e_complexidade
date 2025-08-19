
import React from 'react';
import { Container } from '@mui/material';
import OverviewSection from './OverviewSection';
import EmentaSection from './EmentaSection';
import AulasSection from './AulasSection';
import ExerciciosSection from './ExerciciosSection';
import RecursosSection from './RecursosSection';
import CronogramaSection from './CronogramaSection';
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
        return <div>Chat será aberto em modal</div>;
      case 'code-editor':
        return <div>Editor de código será aberto em modal</div>;
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
