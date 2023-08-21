import styled from '@emotion/styled';

export const ButtonsList = styled.ul`
  display: flex;
  list-style: none;
  gap: 15px;
  justify-content: center;
  padding: 0;
`;
export const ButtonFeedback = styled.button`
  cursor: pointer;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  &:hover {
    background-color: ${({ children }) => {
      switch (children) {
        case 'good':
          return 'green';
        case 'neutral':
          return 'blue';
        case 'bad':
          return 'red';

        default:
          return 'black';
      }
    }};
  }
`;
