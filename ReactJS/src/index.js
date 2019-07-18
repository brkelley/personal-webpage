import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

const title = 'Personal Webpage';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
module.hot.accept();
