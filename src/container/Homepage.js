import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainBoard from './MainBoard'
import NavBar from './NavBar'

const Homepage = () => {
    return (
        <div>
            <NavBar/>
            <div>
                <Switch>
                    <Route path="/" component={MainBoard} />
                </Switch>
            </div>
        </div>
    )
}

export default Homepage
