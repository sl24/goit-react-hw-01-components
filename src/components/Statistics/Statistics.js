import PropTypes from 'prop-types';

import randomColor from './randomColor';

const StatsListItem = ({id, label, percentage}) => {
    return (<li key={id} class="item" style={{ backgroundColor: randomColor() }}>
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
    </li>)
}

const StatsList = ({ items }) => {
    if (items.length === 0) return null
    
    return <ul class="statlist">
        {items.map(StatsListItem)}
    </ul>
}

const Statistics = ({ items }) => {
    return (
        <section class="statistics">
            <h2 class="title">Upload stats</h2>

        <StatsList items={items}/>
        </section>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  statslist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics
