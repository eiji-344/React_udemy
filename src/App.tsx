import React from 'react';
import { Button, ChakraBaseProvider } from '@chakra-ui/react';
import theme from "./theme/theme"
import './App.css';

export default function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <p>あいうえお</p>
    </ChakraBaseProvider>
  );
}
