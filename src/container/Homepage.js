import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import MainBoard from './MainBoard'
import OtherMainBoard from '../components/OtherPage'
// import NoMatch from '../components/noMatch'
import NavBar from './NavBar'
import NewTable from '../components/mainComponents/newTable'

const Homepage = () => {

    let rowCount = 10
    const changeLength = (len) => {
        console.log('chn', len)
        rowCount = len
        this.setState({rowCount})
    }
    return (
        <div>
            <NavBar/>
            <div>
                <Switch>
                    <Route exact path="/overview" component={MainBoard} />
                    <Route exact path="/table" component={() => <NewTable rowCount={rowCount} rowChange={changeLength} />} />
                    <Route path="/dashboard/:id" exact component={OtherMainBoard} />
                    {/* <Route component={NoMatch} /> */}
                    <Redirect from='/' to="/overview" />
                </Switch>
            </div>
        </div>
    )
}

export default Homepage
