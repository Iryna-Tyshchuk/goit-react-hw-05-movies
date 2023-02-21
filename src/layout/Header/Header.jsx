import { NavLink, Link } from 'react-router-dom';
import { routes } from '../../routes';
// import styles from './Header.module.css';

const menu = [
  { id: 'home', name: 'home', route: routes.HOME },
  { id: 'movies', name: 'movies', route: routes.MOVIES },
];

export const Header = () => {
  return (
    <header>
      <div>
        <Link to={routes.HOME}>Movies App</Link>

        <nav>
          <ul>
            {menu &&
              menu.map(({ id, name, route }) => (
                <li key={id}>
                  <NavLink to={route}>{name}</NavLink>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
