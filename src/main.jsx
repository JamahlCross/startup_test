import { createRoot } from 'react-dom/client';  // これが正しいインポートです
import App from './App.jsx';
import React from 'react';

createRoot(document.getElementById('root')).render(
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/startup_test/"}>
        <App />
    </BrowserRouter>
);
