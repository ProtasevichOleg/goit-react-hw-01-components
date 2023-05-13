import styled from 'styled-components';

export const Table = styled.table`
  width: 500px;
  background-color: ${props => props.theme.colors.mainBgColor};
  margin-left: auto;
  margin-right: auto;
`;

export const TableHead = styled.thead`
  background-color: ${props => props.theme.colors.tableheadBgColor};
  color: ${props => props.theme.colors.statisticsFileTypeTextColor};
`;

export const TableHeadItem = styled.th`
  /*  */
`;

export const TableRow = styled.tr`
  height: 30px;
  :nth-child(even) {
    background-color: ${props => props.theme.colors.tableRowEvenBgColor};
  }
`;

export const TableRowItem = styled.td`
  text-align: center;
`;

export const TableBody = styled.tbody`
  color: ${props => props.theme.colors.cardSecondaryTextColor};
`;
