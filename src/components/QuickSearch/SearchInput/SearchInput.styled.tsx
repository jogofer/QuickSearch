import styled from 'styled-components';


export const SearchInputStyled = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 2px solid #000;
  margin-right: 40px;
  font-size: 14px;
  background: white;
  color: #333;

  &::placeholder {
    color: #666;
  }

  &:focus {
    border: 3px solid #000;
  }
`;

SearchInputStyled.displayName = 'SearchInputStyled';