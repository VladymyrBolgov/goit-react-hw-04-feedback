import styled from '@emotion/styled';

export const Button = styled.button`
  min-width: 150px;
  height: 50px;
  border-radius: 5px;
  background-color: tomato;
  font-size: 30px;
  cursor: pointer;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.03),
    1px 4px 6px rgba(0, 0, 0, 0.08);
  transition: scale 250ms linear, background-color 250ms linear;

  :hover,
  :focus {
    background-color: #c3743f;
    scale: 1.2;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;