export const getThemeConfig = (theme: 'light' | 'dark') => {
  if (theme === 'light') {
    return {
      colors: {
        white: '#fff',
        black: '#000',
        primary: '#ff8a00',
        paginationButton: {
          bg: '#ff8a00',
          color: '#fff',
        },
        backgroung: '#fff',
        licence: 'rgba(0, 0, 0, 0.5)',
        footerLine: '#999',
        text: '#000',
        controlButton: {
          border: 'rgba(0, 0, 0, 0.1)',
          borderHover: '#000',
          bg: 'rgba(0, 0, 0, 0.06)',
          text: '#000',
          textHover: '#fff',
        },
        stub: {
          primal: 'rgba(0, 0, 0, 0.25)',
          blick: 'rgba(255, 255, 255, 0.5)',
        },
      },
    };
  }

  return {
    colors: {
      white: '#fff',
      black: '#000',
      primary: '#ffa840',

      paginationButton: {
        bg: '#ffa840',
        color: 'white',
      },
      backgroung: '#121212',
      licence: 'rgba(255, 255, 255, 0.7)',
      footerLine: '#99999999',
      text: 'rgba(255, 255, 255, 0.9)',
      controlButton: {
        border: '#ffa840',
        borderHover: '#ffa840',
        bg: '#121212',
        text: 'rgba(255, 255, 255, 0.9)',
        textHover: '#ffa840',
      },
      stub: {
        primal: 'rgba(255, 255, 255, 0.25)',
        blick: 'rgba(255, 255, 255, 0.1)',
      },
    },
  };
};
