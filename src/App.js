// src/App.js

import React from "react";
import "./App.css";
import UserList from "./components/Users/UserList";
import { Provider } from "react-redux";
import { store } from "./components/store";
import "bootstrap/dist/css/bootstrap.min.css";
import UserLists from "./components/Users/UserLists";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserLists />
      </Provider>
    </div>
  );
}

export default App;
