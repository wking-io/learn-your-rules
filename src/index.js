import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

console.log(module.hot.accept);
if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}

registerServiceWorker();
