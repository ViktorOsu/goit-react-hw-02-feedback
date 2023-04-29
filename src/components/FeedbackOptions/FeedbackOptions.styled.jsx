import styled from '@emotion/styled';

export const FeedbackOptList = styled.div`
  list-style: none;
  display: flex;
  gap: 16px;
`;

export const FeedBackOptBtn = styled.button`
  cursor: pointer;
  padding: 6px 16px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  box-shadow: 0px 0px 2px -1px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0px 0px 2px 0.3px rgba(0, 0, 0, 0.2);
  }
  background-color: #cecdcd;
`;
