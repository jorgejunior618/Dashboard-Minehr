import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeButton from './components/themeButton';
import Dashboard from './pages/dashboard';
import GlobalStyle from './styles/globalStyles';
import theme from './styles/themes';

function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    console.log({ themeMode });

    switch (themeMode) {
      case 'light':
        setThemeMode('dark');
        break;

      case 'dark':
        setThemeMode('light');
        break;

      default:
        setThemeMode('light');
        break;
    }
  };

  return (
    <ThemeProvider theme={theme(themeMode)}>
      <GlobalStyle />
      <Dashboard />
      <ThemeButton
        title={`Mudar para tema ${themeMode === 'light' ? 'escuro' : 'claro'}`}
        onClick={toggleTheme}
      />
    </ThemeProvider>
  );
}

export default App;
