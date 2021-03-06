import React from 'react'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

export const SkiDayRow = ({resort, powder, backcountry, date}) => (

	<tr>
		<td>
			{date.getDate()} / {date.getMonth()+1} / {date.getFullYear()}
		</td>
		<td>{resort}</td>
		<td>{(powder) ? <SnowFlake/> : null}</td>
		<td>{(backcountry) ? <Terrain /> : null}</td>
		
	</tr>

)

export default SkiDayRow