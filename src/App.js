import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/header/index";
import UserList from "./components/list/Userlist/index";
import Detail from "./components/detail/index";
import React from "react";
import { Provider } from "react-redux";
import configStore from "./redux/configStore";
const store = configStore();
function App() {
  return (
    <Provider store={store}>
      {" "}
      <React.Fragment>
        <Header />
        <main>
          <Route path="/" component={UserList} exact></Route>
          <Route path="/detail/:id" component={Detail}></Route>
        </main>
      </React.Fragment>
    </Provider>
  );
}

export default App;
