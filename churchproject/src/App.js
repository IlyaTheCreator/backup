import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import Navigation from './components/common/navigation'
import Footer from './components/common/footer'
import PageRenderer from "./components/common/page-renderer";

export default function App() {
  return (
      <BrowserRouter>
        <Navigation />
        <Switch>
            <Route path="/:page" component={PageRenderer} />
            <Route path="/" render={() => <Redirect to="/home" /> } />
            <Route render={() => 404} />
        </Switch>
        <Footer />
      </BrowserRouter>
  )
}
