import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import Provider from 'react-redux';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

import Store from './Store/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<ChakraProvider>
<Provider store={Store}>
<App />
</Provider>
</ChakraProvider>

  
</BrowserRouter>
);


