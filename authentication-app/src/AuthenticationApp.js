import React from 'react';
import { Provider } from 'react-redux';
import { store }  from './redux/store/store';
import AppRouter from './routes/AppRouter';

function AuthenticationApp() {
  return (
      <Provider store={ store }>
          <AppRouter />
      </Provider>
  );
}

export default AuthenticationApp;
