import React from "react";
import TaskGrid from "./TaskGrid";
import { HashRouter, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/" component={TaskGrid} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
