import styled from 'styled-components';

export const StyledMovieList = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;

  & li {
    cursor: pointer;
    width: 100%;
    transition: all 250ms linear;
    &:hover,
    &:focus {
      transform: scale(1.01);
      padding: 5px;
      box-shadow: 0px 5px 15px 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
    @media screen and (min-width: 768px) {
      width: calc((100% - 30px) / 2);
      gap: 32px;
    }
    @media screen and (min-width: 1280px) {
      width: calc((100% - 60px) / 3);
      column-gap: 16px;
      row-gap: 32px;
    }
  }
`;
