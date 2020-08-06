import React from 'react';
import Application from './Components/Application';
import UserProvider from './Providers/UserProvider';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Application/>
      </div>
    </UserProvider>
  );
}

export default App;
