import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  & nav {
    display: flex;
  }
`;

export const NavUl = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
`;

export const Logo = styled(NavLink)`
  font-weight: 700;
  margin: 0;
  text-decoration: none;
  text-transform: uppercase;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  text-transform: uppercase;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
