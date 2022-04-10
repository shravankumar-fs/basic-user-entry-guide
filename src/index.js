import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
{
  const backdrop = document.createElement('div');
  backdrop.id = 'backdrop-root';
  document.body.appendChild(backdrop);
  const overlay = document.createElement('div');
  overlay.id = 'overlay-root';
  document.body.appendChild(overlay);
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
