import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from 'App';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    containerBgColor: '#E7ECF1',
    mainBgColor: '#FFFFFF',
    mainTextColor: '#000000',
    cardSecondaryTextColor: '#9DA8B3',
    cardBorderColor: '#e6ebf0',
    cardStatsBgColor: '#F3F6F9',
    statisticsDocxColor: '#4DC5F7',
    statisticsPdfColor: '#A53BF6',
    statisticsMp3Color: '#E74B65',
    statisticsPsdColor: '#1FB8C3',
    statisticsFileTypeTextColor: '#FFFFFF',
    friendsIsOnlineColor: '#4EAE53',
    friendsIsOfflineColor: '#FD5251',
    tableheadBgColor: '#01BDD5',
    tableRowEvenBgColor: '#ECF1F3',
  },
};

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
