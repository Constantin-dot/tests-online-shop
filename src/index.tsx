import ReactDOM from 'react-dom';
import './index.scss';
import App from './main/ui/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './main/bll/store';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,document.getElementById('root')
)

