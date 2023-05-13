import styled from 'styled-components';

const getItemBgColor = label => {
  switch (label) {
    case '.docx':
      return 'statisticsDocxColor';
    case '.pdf':
      return 'statisticsPdfColor';
    case '.mp3':
      return 'statisticsMp3Color';
    case '.psd':
      return 'statisticsPsdColor';
    default:
      return 'containerBgColor';
  }
};

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.mainBgColor};
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  padding: 30px;
`;

export const StatList = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.colors[getItemBgColor(props.label)]};
  color: ${props => props.theme.colors.statisticsFileTypeTextColor};
`;

export const Label = styled.span`
  font-size: 12px;
`;

export const Percentage = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
