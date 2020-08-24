import React, {Component} from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Map as map } from "immutable";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Route, Switch, Redirect } from "react-router-dom";

import reducer from "../../reducers/index";
import Videos from "./videos";
import Home from "../components/home";
import Error404 from "../components/not-found";
import Header from "../components/header";

const logger_ = ({ getState, dispatch }) => (next) => (action) => {
  console.log("este es mi viejo estado", getState().toJS());
  console.log("vamos a enviar está acción", action);
  const value = next(action);
  console.log("este es mi nuevo estado", getState().toJS());
  return value;
};

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(applyMiddleware(logger, thunk))
);

class App extends Component{
    render(){
        return (
            <Provider store={store}>
            <React.Fragment>
                <Header />
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/videos" component={Videos} />
                <Redirect from="/v" to="/videos" />
                <Route component={Error404} />
                </Switch>
            </React.Fragment>
            </Provider>
        )
    }
}

export default App