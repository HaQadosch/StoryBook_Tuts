import React from 'react';
import './App.css';
import { InboxScreen } from './components/InboxScreen';

const App: React.FC = () => {
  return (
    <div className='App'>
      <main>
        <InboxScreen />
      </main>
    </div>
  );
};

export default App;
