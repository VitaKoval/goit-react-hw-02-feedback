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
  /* background-color: 	#FFB6C1; */
 
  font-size: 24px;
 
  border: none;
  color: black;
  font-weight: bold;
  cursor: pointer;

   border-radius: 25px;
   background: linear-gradient(145deg, #FFB6C1, #ffd0d7);
  box-shadow: 6px 6px 12px #c6c7d0, -6px -6px 12px #8ec8dc;

  &:hover {
    color: white;
  }

  &:active {
    background: #ffd0d7;
     box-shadow: inset 6px 6px 12px #FFB6C1 , inset -6px -6px 12px  #ffd0d7;
  }
`;
