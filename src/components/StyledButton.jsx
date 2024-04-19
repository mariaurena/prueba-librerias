import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #66a5e9;
  color: #fff;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 570px;
  height: 100px;
  font-size: 25px;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    border-color: #0056b3;
    box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25);
  }
`;

const StyledComponentsButton = () => {
  return (
    <StyledButton>
      Styled-components 
    </StyledButton>
  );
};

export default StyledComponentsButton;
