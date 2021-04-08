import {Switch, Route} from 'react-router-dom'
import { Shop } from '../../features/Shop'
import { ShopManagement } from '../../features/ShopManagement'
import { Cart } from '../../features/Cart'
import { AlertContainer } from './common/alert/AlertContainer'
import { NavbarContainer } from './common/navbar/NavbarContainer'


const App: React.FC = () => {
    return <div>
        <AlertContainer />
        <NavbarContainer/>
        <div className="container pt-4">
            <Switch>
                <Route path={'/'} exact component={Shop}/>
                <Route path={'/shopManagement'} component={ShopManagement}/>
                <Route path={'/cart'} component={Cart}/>
                <Route path={'*'} render={ () => <div className="jumbotron">404 NOT FOUND</div>}/>
            </Switch>
        </div>
    </div>
}

export default App
