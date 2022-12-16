import styled from '@emotion/styled';

export const Friend = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const StatusOnline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: green;
`;

export const StatusOffline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: red;
`;

export const Avatar = styled.img`
  width: 48px
  border-radius: 10px;
  margin-right: 15px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.19;
  letter-spacing: 0.03em;
  `;