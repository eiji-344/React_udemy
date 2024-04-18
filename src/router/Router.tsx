import { memo, FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../components/pages/Login';
import { Page404 } from '../components/pages/Page404';
import { homeRoutes } from './HomeRoutes';
import { HeaderLayout } from "../components/templetes/HeaderLayout";

export const Router: FC = memo(() => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/*" element={
          <HeaderLayout>
            <Routes>
              {homeRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            </Routes>
          </HeaderLayout>
        } />
        <Route path="*" element={<Page404 />} />
    </Routes>
  );
});

