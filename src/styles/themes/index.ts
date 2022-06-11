import colors from '../colors';

const theme = (mode: 'light' | 'dark') => {
  return {
    colors: {
      primaria: mode === 'light' ? colors.PRIMARIA : colors.PRIMARIADARK,
      secundaria: colors.SECUNDARIA,
      background: mode === 'light' ? colors.BACKGROUND : colors.BACKGROUNDDARK,
      backgroundAlternativo:
        mode === 'light' ? colors.BACKGROUNDALT : colors.BACKGROUNDALTDARK,
      shadowColor: colors.SHADOWCOLOR,
      cardColor: mode === 'light' ? colors.CARD : colors.CARDDARK,
      fontColor: mode === 'light' ? colors.FONTE : colors.FONTEDARK,
    },
  };
};

export default theme;
