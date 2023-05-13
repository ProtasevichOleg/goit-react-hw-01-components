import PropTypes from 'prop-types';
import React from 'react';
import {
  Table,
  TableHead,
  TableHeadItem,
  TableRow,
  TableRowItem,
  TableBody,
} from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableRowItem>{type}</TableRowItem>
            <TableRowItem>{amount}</TableRowItem>
            <TableRowItem>{currency}</TableRowItem>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
