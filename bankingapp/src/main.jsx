// src/index.jsx
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../src/store.js'; // ton store Redux
import App from './App.jsx';
import './index.css'; // Vos styles globaux

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error('Root element not found');
}
