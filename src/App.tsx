
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import  GetRouters from './router';
import Layout from './components/layout';
import User from './components/user';
import Home from './components/home';
import BeforeRouter from "./components/beforeRouter";
import store from './store';
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <BeforeRouter>

        <GetRouters />
        </BeforeRouter>
        {/* <Routes>
        <Route path='/' element={<Navigate to='/layout'></Navigate>}></Route>
          <Route element={< Layout/>} path='layout'>
            <Route index element={<Home />}  />
            <Route element={<User />} path="user" />
          </Route>
        </Routes> */}
      </HashRouter>
    </Provider>
  )
}

export default App
