import ReactDOM from 'react-dom/client'
import React from 'react';
import App from './App.js'
import './index.css'
import { StyledEngineProvider } from '@mui/material';
import { GlobalStyles } from './global/styled.js';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { ThemeContextProvider } from './contexts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StyledEngineProvider injectFirst>
        <ThemeContextProvider>
            <Provider store={store}>
                <GlobalStyles />
                <App />
            </Provider>
        </ThemeContextProvider>
    </StyledEngineProvider>
);