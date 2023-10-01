import React from 'react';
import './index.css';
import App from './App';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);