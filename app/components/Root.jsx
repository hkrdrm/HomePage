import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import React        from 'react'
import config       from 'Config'
import Home         from './Home'
import NoMatch      from './NoMatch'
import stores       from '../stores'

require('../styles/App.css')

const Root = () => {
  return (
    <Provider sampleStore={stores.sampleStore}>
      <Router>
        <div>
          <Switch>
            <Route exact path={config.root} component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
}

export default Root
/*
            <Route path="/app" component={App} />
            <Route path="/search" component={SearchMsag} />
          <ul>
            <li><Link href="/" to="/">Home</Link></li>
            <li><Link href="/app" to="/app">App</Link></li>
            <li><Link href="/search" to="/search">Search</Link></li>
          </ul>
*/
