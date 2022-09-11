import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableRow,
  TableBody,
  TableBodyRow,
} from './Transactions.styled';
export const Transactions = ({ transactions }) => {
  return (
    <TableBody>
      {transactions.map(transaction => {
        return (
          <TableRow key={transaction.id}>
            <TableBodyRow>{transaction.type}</TableBodyRow>
            <TableBodyRow>{transaction.amount}</TableBodyRow>
            <TableBodyRow>{transaction.currency}</TableBodyRow>
          </TableRow>
        );
      })}
      {''}
    </TableBody>
  );
};
TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currensy: PropTypes.string.isRequired,
    })
  ),
};
