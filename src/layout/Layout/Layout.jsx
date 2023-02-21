import { Outlet } from 'react-router-dom';
// import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
// import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div>
      <Header />

      <main>{<Outlet />}</main>
      {/* <footer>футер</footer> */}
      {/* <Footer /> */}
    </div>
  );
};
