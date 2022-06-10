import { ThemeProvider } from 'styled-components';
import Dashboard from './pages/dashboard';
import GlobalStyle from './styles/globalStyles';
import theme from './styles/themes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
