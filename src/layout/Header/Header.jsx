import { routes } from '../../routes';
import {
  Logo,
  NavUl,
  StyledHeader,
  StyledLink,
} from 'layout/Layout/Layout.styled';

const menu = [
  { id: 'home', name: 'home', route: routes.HOME },
  { id: 'movies', name: 'movies', route: routes.MOVIES },
];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo to={routes.HOME}>
        <Logo>Movies App</Logo>
      </Logo>

      <nav>
        <NavUl>
          {menu &&
            menu.map(({ id, name, route }) => (
              <li key={id}>
                <StyledLink to={route}>{name}</StyledLink>
              </li>
            ))}
        </NavUl>
      </nav>
    </StyledHeader>
  );
};
