import React, { Component } from 'react'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

// konvert decimal ke persen
const percentToDecimal = (decimal) => {
	return ((decimal*100) + '%');
}
// hitung brp persen lagi untuk mencapai goal
const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal);
}

const SkiDayCount = (props) => (
			<div className='skiDayCount'>

				<div className='total-days'>
					<span>{props.total}</span>
					<Calendar />
					<span> Days</span>
				</div>

				<div className='powder-days'>
					<span>{props.powder}</span>
					<SnowFlake />
					<span> Days</span>
				</div>

				<div className='backcountry-days'>
					<span>{props.backcountry}</span>
					<Terrain />
					<span> Hiking Day</span>
				</div>
				
				<div>
					<span>{calcGoalProgress(props.total, props.goal)}</span>
					<span> Goal</span>
				</div>

			</div>
		)


export default SkiDayCount;