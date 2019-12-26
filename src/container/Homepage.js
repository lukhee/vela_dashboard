import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import MainBoard from './MainBoard'
import OtherMainBoard from '../components/OtherPage'
// import NoMatch from '../components/noMatch'
import NavBar from './NavBar'
import NewTable from '../components/mainComponents/newTable'

const Homepage = () => {
    return (
        <div>
            <NavBar/>
            <div>
                <Switch>
                    <Route exact path="/overview" component={MainBoard} />
                    <Route exact path="/table" component={NewTable} />
                    <Route path="/dashboard/:id" exact component={OtherMainBoard} />
                    {/* <Route component={NoMatch} /> */}
                    <Redirect from='/' to="/overview" />
                </Switch>
            </div>
        </div>
    )
}

export default Homepage
