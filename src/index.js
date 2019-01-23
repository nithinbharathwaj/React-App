import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import App from './components/App';
import ReactDOM from 'react-dom';
import './css/style.css';
import './css/bootstrap.css';
import './css/all.css';
import './css/w3.css';

class Index extends React.Component {
    render = () => {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));