import PropTypes from 'prop-types';

import randomColor from './randomColor';

// const StatsListItem = ({id, label, percentage}) => {
//     return (<li key={id} class="item" style={{ backgroundColor: randomColor() }}>
//         <span class="label">{label}</span>
//         <span class="percentage">{percentage}</span>
//     </li>)
// }

// const StatsList = ({ items }) => {
//     if (items.length === 0) return null
    
//     return <ul class="statlist">
//         {items.map(StatsListItem)}
//     </ul>
// }

// const Statistics = ({ title, items }) => {
//   return (
//     <section class="statistics">
//       {title && <h2>class="title">{title}</h2>}

//         <StatsList items={items}/>
//         </section>)
// }

// Statistics.propTypes = {
//   title: PropTypes.string,
//   statslist: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     }),
//   ),
// };

function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <ul class="list">
        {stats.map(({ id, label, percentage }) => (
          <li
            class="item"
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics
