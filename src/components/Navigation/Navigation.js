
import React from 'react';
import { Tabs, Tab, Box, Paper } from '@mui/material';
import './Navigation.css';

const Navigation = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: 'overview', label: '📚 Visão Geral' },
    { id: 'ementa', label: '📋 Ementa' },
    { id: 'aulas', label: '🎓 Aulas' },
    { id: 'exercicios', label: '💻 Exercícios' },
    { id: 'recursos', label: '🔧 Recursos' },
    { id: 'cronograma', label: '📅 Cronograma' },
    { id: 'chatbot', label: '🤖 IA Assistant' },
    { id: 'code-editor', label: '⚡ Editor de Código' }
  ];

  return (
    <Box className="navigation-container">
      <Paper className="navigation-tabs" elevation={2}>
        <Tabs
          value={activeSection}
          onChange={(e, value) => onSectionChange(value)}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          {sections.map((section) => (
            <Tab
              key={section.id}
              value={section.id}
              label={section.label}
              className="nav-tab"
            />
          ))}
        </Tabs>
      </Paper>
    </Box>
  );
};

export default Navigation;
