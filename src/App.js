import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HomeView } from 'views/HomeView';
import { RegisterView } from 'views/RegisterView';
import { LoginView } from 'views/LoginView';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export default function App() {
  return (
    <>
      <Navigation />
      <UserMenu />
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="register" element={<RegisterView />} />
        <Route path="login" element={<LoginView />} />
      </Routes>
      <ToastContainer />
    </>
  );
}
