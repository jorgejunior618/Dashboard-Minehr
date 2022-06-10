// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaria: string;
      secundaria: string;
      background: string;
      backgroundAlternativo: string;
      shadowColor: string;
    };
  }
}
