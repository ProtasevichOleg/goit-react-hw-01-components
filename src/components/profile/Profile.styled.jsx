import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 200px;
  margin: 0 auto 20px;

  border: 1px solid ${props => props.theme.colors.cardBorderColor};
  border-radius: 6px;

  background-color: ${props => props.theme.colors.mainBgColor};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 30px 0 20px;
`;

export const AvatarImage = styled.img`
  width: 80px;
  margin-bottom: 20px;

  border-radius: 50%;
  background-color: ${props => props.theme.colors.cardStatsBgColor};
`;

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 600;

  padding-bottom: 5px;
  color: ${props => props.theme.colors.mainTextColor};
`;

export const Tag = styled.p`
  padding-bottom: 5px;
  color: ${props => props.theme.colors.cardSecondaryTextColor};
`;

export const Location = styled.p`
  color: ${props => props.theme.colors.cardSecondaryTextColor};
`;

export const Stats = styled.ul`
  display: flex;
  border-radius: 0 0 5px 5px;
  background-color: ${props => props.theme.colors.cardStatsBgColor};
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  width: calc(100% / 3);
  height: 60px;
  border-top: 1px solid ${props => props.theme.colors.cardBorderColor};

  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.cardBorderColor};
  }
`;

export const Label = styled.span`
  font-size: 8px;
  font-weight: 600;

  color: ${props => props.theme.colors.cardSecondaryTextColor};
`;

export const Quantity = styled.span`
  font-weight: 800;
`;
