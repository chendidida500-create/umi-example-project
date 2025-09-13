import React from 'react';

interface WelcomeCardProps {
  title: string;
  description: string;
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ title, description }) => {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      padding: '16px', 
      margin: '16px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default WelcomeCard;