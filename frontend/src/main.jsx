import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import LandingPage from './pages/LandingPage.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import PrivateRoute from './utlis/PrivateRoute.jsx';
import AllTodos from './pages/AllTodos.jsx';
import TodayTodo from './pages/TodayTodo.jsx';
import UpcomingTodo from './pages/UpcomingTodo.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<LandingPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="" element={<Home />}>
          <Route path="/todo" element={<TodayTodo />} />
          <Route path="/todo/all" element={<AllTodos />} />
          <Route path="/todo/upcoming" element={<UpcomingTodo />} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
