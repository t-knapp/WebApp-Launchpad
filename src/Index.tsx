import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import IMelderViewModel from './domain/viewmodels/IMelderViewModel';
import MelderViewModel from './domain/viewmodels/MelderViewModel';

ReactDOM.render (
    <App title='GMA Simulator Web' viewModel={new MelderViewModel('Hochofen IV')}/>,
    document.getElementById('root')
);
