import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterList } from './routes/RouterList';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer} from 'react-toastify';
import { Provider } from 'react-redux';
import store from './redux/store/store';


const queryMovie = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryMovie}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_GOOGLE_ID}>
      <ToastContainer/>
    <RouterList/>
      </GoogleOAuthProvider>
    </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);


