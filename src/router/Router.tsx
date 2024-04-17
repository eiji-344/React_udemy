import { memo, FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from '../components/pages/Login';
import { Home } from '../components/pages/Home';
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '../components/pages/UserManagement';
import { Page404 } from '../components/pages/Page404';

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/user_management" element={<UserManagement />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
});