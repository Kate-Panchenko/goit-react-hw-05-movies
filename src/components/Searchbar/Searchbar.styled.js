import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  margin: 0 auto 12px auto;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  border: 1px solid ${props => props.theme.accent};
  border-radius: 20px;
  outline: none;
  padding-left: 18px;
  padding-right: 4px;
  height: 40px;
  margin-right: 12px;
`;

export const SearchButton = styled.button`
  display: inline-block;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  border: 0;
  border-radius: 20px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  gap: 8px;
  font: inherit;
  font-size: 20px;
`;
