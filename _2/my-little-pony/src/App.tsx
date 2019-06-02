import React from 'react';
import './App.css';
import { InboxScreen } from './components/InboxScreen';
import { ErrorBoundary } from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <div className='App'>
      <ErrorBoundary>
        <main>
          <InboxScreen />
        </main>
      </ErrorBoundary>
    </div>
  );
};

export default App;
