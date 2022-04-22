import React from 'react';
import { StatusBar } from "expo-status-bar";

import Home from './src/screens/Home';

const App = () => {
  return (
    <>
      <StatusBar style='light' />
      <Home />
    </>
  );
}

export default App;
