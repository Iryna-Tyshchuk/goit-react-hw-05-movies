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
      box-shadow: 0px 5px 15px 10px rgba(36, 34, 34, 0.1);
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

  & img {
    border-radius: 5px;
    /* 
    @media screen and (min-width: 768px) {
      height: 455px;
    } */

    @media screen and (min-width: 1280px) {
      height: 574px;
    }
  }
`;
