import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from "./Home";
import NewInterview from "./New";
import EditInterview from "./Edit";

const App = (props)=> {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/interviews/:id" component={ShowInterview} />
        <Route exact path="/interviews/new" component={NewInterview} />
        <Route path="/interviews/:id/edit" component={EditInterview} />
      </Switch>
    </div>
  );
}

export default App;