import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import 'typeface-roboto';
import 'typeface-roboto-mono';
import 'typeface-roboto-condensed';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
