import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  padding: 5px;
  gap: 10px;
  background-color: ${props => props.theme.colors.mainBgColor};
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  height: 10px;
  width: 10px;
  color: transparent;
  background-color: ${props =>
    props.isOnline
      ? props.theme.colors.friendsIsOnlineColor
      : props.theme.colors.friendsIsOfflineColor};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  border-radius: 5%;
  padding: 5px;
  background-color: ${props => props.theme.colors.cardStatsBgColor};
`;

export const Name = styled.p`
  font-size: 16px;
`;
