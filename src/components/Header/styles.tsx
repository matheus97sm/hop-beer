import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;

  .container {
    padding: 16px 0;
    justify-content: space-between;
    align-items: center;

    > img {
      width: 130px;
    }
  }
`;

export const HeaderMidias = styled.div`
  a {
    padding: 8px;

    &:hover img {
      opacity: 0.6;
    }

    img {
      width: 16px;
      height: 16px;

      transition: 0.3s opacity;
    }
  }
`;
