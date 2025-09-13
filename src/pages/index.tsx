import React from 'react';
import WelcomeCard from '@/components/WelcomeCard';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Umi.js Example Project</h1>
      
      <WelcomeCard 
        title="Getting Started" 
        description="This is a basic example page created with Umi.js" 
      />
      
      <WelcomeCard 
        title="Learn More" 
        description="Visit the About page to learn more about this project" 
      />
      
      <p>
        <a href="/about">About this project</a>
      </p>
    </div>
  );
};

export default HomePage;