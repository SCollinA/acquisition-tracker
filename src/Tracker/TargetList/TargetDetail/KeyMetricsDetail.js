import React from 'react'

export default ({ target }) => {
    return (
        <div className='KeyMetricsDetail'>
            <h4>Revenue: ${target.keyMetrics.revenue.toLocaleString()}</h4>
            <h4>Net Income: ${target.keyMetrics.netIncome.toLocaleString()}</h4>
            <h4>Total Equity: ${target.keyMetrics.totalEquity.toLocaleString()}</h4>
            {target.info.isPublic &&
                <h4>Stock Price: ${target.keyMetrics.stockPrice.toLocaleString()}</h4>}
        </div>
    )
}