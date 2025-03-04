import React from 'react';
import { useLocation } from 'react-router-dom';
import PartBProfessor from './PartBProfessor';
import PartBAssistantProfessor from './PartBAssistantProfessor';
import PartCAssociativeProfessor from './PartCAssociativeProfessor';

function PartB({ openTab }) {
  const location = useLocation();
  const { category } = location.state || {};

  const renderComponent = () => {
    switch (category) {
      case 'Professor':
        return <PartBProfessor openTab={openTab} />;
      case 'Assistant Professor':
        return <PartBAssistantProfessor openTab={openTab} />;
      case 'Associative Professor':
        return <PartCAssociativeProfessor openTab={openTab} />;
      default:
        return <div>Please select a category</div>;
    }
  };

  return (
    <div className="PartB">
      {renderComponent()}
    </div>
  );
}

export default PartB;