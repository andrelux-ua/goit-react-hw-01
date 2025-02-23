import css from './TransactionHistory.module.css';
import clsx from 'clsx';

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {transactions.map(({ id, type, amount, currency }, index) => (
          <tr
            key={id}
            className={clsx(css.tr, index % 2 === 0 ? css.even : css.odd)}
          >
            <td className={css.td}>{type}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
