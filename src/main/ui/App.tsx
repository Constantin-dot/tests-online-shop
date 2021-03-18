import {Switch, Route} from 'react-router-dom'
import { Navbar } from './common/Navbar';
import { Alert } from './common/Alert';
import { Shop } from '../../features/Shop';
import { Login } from '../../features/Login';
import { Cart } from '../../features/Cart';

const App: React.FC = () => {
    return <div>
        <Navbar/>
        <div className="container pt-4">
            <Alert />
            <Switch>
                {/* <Route exact path={'/'} render={ () => <Redirect to={'/shop'}/>}/>
                <Route exact path={'/shop'} render={ () => <MainPage/>}/>
                <Route exact path={'/cart'} render={ () => <PageForCart/>}/>
                <Route exact path={'*'} render={ () => <div>404 NOT FOUND</div>}/> */}

                <Route path={'/'} exact component={Login}/>
                <Route path={'/shop'} component={Shop}/>
                <Route path={'/cart'} component={Cart}/>
                <Route path={'*'} render={ () => <div>404 NOT FOUND</div>}/>
            </Switch>
        </div>
    </div>
}

export default App
