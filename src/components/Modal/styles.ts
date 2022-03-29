import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #00000044;
  z-index: 999;
`;

export const ModalForm = styled.form`
  position: relative;

  width: 90%;
  max-width: 480px;
  padding: 32px;
  display: grid;
  gap: 16px;

  background-color: #fff;
  border-radius: 8px;

  h2 {
    color: var(--orange);
  }

  label {
    display: grid;
    gap: 8px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;

  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: none;

  color: var(--brown);
  font-size: 20px;
  font-weight: 900;
`;
