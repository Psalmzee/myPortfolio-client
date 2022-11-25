import React from 'react';
import { Switch, Route, Routes } from 'react-router-dom';
import routes from "./routes";

import store from './store';
import { Provider } from 'react-redux'


import Dashboard from "./components/DashboardComponent"


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes>

          <Route path='/' element={<Dashboard />} />

{/* 
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))} */}
        </Routes>
      </Provider>
    );
  }
}

export default App;