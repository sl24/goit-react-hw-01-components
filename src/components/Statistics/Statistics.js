import React from 'react'

const StatsListItem = ({id, label, percentage}) => {
    return (<li key={id} class="item">
        <span class="label">{label}</span>
        <span class="percentage">{percentage}</span>
    </li>)
}

const StatsList = ({ items }) => {
    if (items.length === 0) return null
    
    return <ul class="stat-list">
        {items.map(StatsListItem)}
    </ul>
}

const Statistics = ({ items }) => {
    return (<section class="statistics">
  <h2 class="title">Upload stats</h2>

        <StatsList items={items}/>
</section>)
}

export default Statistics