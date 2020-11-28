import PropTypes from 'prop-types';

import s from './Transactions.module.css';

const Transactions = ({ items }) => {
  if (items.length === 0) return null;

  return (
    <table className={s.transactionHistory}>
      <thead className={s.thead}>
        <tr>
          <th className={s.tableData}>Type</th>
          <th className={s.tableData}>Amount</th>
          <th className={s.tableData}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id} className={s.row}>
            <td className={s.tableData}>{item.type}</td>
            <td className={s.tableData}>{item.amount}</td>
            <td className={s.tableData}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default Transactions;
