import React from 'react';
import ReactDOM from 'react-dom';
import { TimerProvider } from './context/TimerContext';

import './index.css';
import App from './App';

ReactDOM.render(<TimerProvider><App /></TimerProvider>, document.getElementById('root'));
