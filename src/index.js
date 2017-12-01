import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import 'typeface-fira-sans';
import 'typeface-fira-mono';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
