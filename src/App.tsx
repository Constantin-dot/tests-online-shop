import './App.css';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import { MainPage } from './mainPage/MainPage';
import { PageForCart } from './pageForCart/PageForCart';
import { Provider } from 'react-redux';
import store from './store'

const App: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <Switch>
                <Route exact path={'/'} render={ () => <Redirect to={'/shop'}/>}/>
                <Route exact path={'/shop'} render={ () => <MainPage/>}/>
                <Route exact path={'/cart'} render={ () => <PageForCart/>}/>
                <Route exact path={'*'} render={ () => <div>404 NOT FOUND</div>}/>
            </Switch>
        </Provider>
    </BrowserRouter>
}

export default App
