import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  width: 100%;
  padding: 16px 32px;

  background-color: #fff;
  border-radius: 8px;
  box-shadow: var(--shadow);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SideBarMenuButton = styled.button`
  position: relative;
  width: 32px;
  height: 32px;

  background-color: transparent;
  border: none;

  span,
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 6px;
    left: 0;

    width: 100%;
    height: 2px;
    display: block;

    background-color: var(--brown);
    transition: 0.5s width, 0.5s transform;
  }

  &::before {
    top: 14px;
  }

  &::after {
    top: 22px;
  }
`;

export const Filters = styled.div`
  width: 100%;

  h4 {
    color: var(--brown);
    font-size: 24px;
  }
`;
