import React from 'react';
import Routers from './Routers/Routers';
import AppProvider from './Context/AppProvider';

function App() {
  return (
    <AppProvider>
      <Routers />
    </AppProvider>
  );
}

export default App;
