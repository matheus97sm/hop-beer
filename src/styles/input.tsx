import styled from 'styled-components';

export const TextInput = styled.input`
  width: 100%;
  padding: 16px 32px;

  border: none;
  border-radius: 8px;
  box-shadow: var(--shadow);

  color: var(--black);
  font-size: 1rem;

  &:focus {
    outline-color: var(--orange);
  }

  &::placeholder {
    opacity: 0.5;

    color: var(--black);
  }
`;
