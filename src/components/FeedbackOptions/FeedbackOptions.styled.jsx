import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VoiceButton = styled.button`
  width: 130px;

  margin-right: 15px;
  padding: 15px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    color: white;
  }
`;
