import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUsers } from './app/reducers/users';
import users from './data/users.json';
import Layout from './layouts/Layout.jsx';
import RequireAuth from './hoc/RequireAuth.jsx';
import Persons from './pages/Persons.jsx';
import Person from './pages/Person.jsx';
import AuthPage from './layouts/AuthPage.jsx';
import Login from './pages/AuthPage/Login.jsx';
import Registration from './pages/AuthPage/Registration.jsx';
import Page404 from './pages/Page404.jsx';
import Privacy from './pages/Privacy.jsx';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers(users.users));
  }, [dispatch]);

  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route element={<RequireAuth />}>
          <Route index element={<Persons />} />
          <Route path={'profile/:id'} element={<Person />} />
        </Route>
        <Route element={<AuthPage />} >
          <Route path={'login'} element={<Login />} />
          <Route path={'registration'} element={<Registration />} />
        </Route>
        <Route path={'*'} element={<Page404 />} />
        <Route path={'privacy'} element={<Privacy />} />
      </Route>
    </Routes>
  );
}
