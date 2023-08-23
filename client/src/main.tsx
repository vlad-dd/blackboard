import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { StyledEngineProvider } from '@mui/material';
import { GlobalStyles } from './global/styled.js';
import { ThemeContextProvider } from './contexts/theme/index.js';
import { Provider } from 'react-redux';
import store from './store/index.js';

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