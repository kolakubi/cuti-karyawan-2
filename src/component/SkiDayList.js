import React from 'react'
import { SkiDayRow } from './SkiDayRow'

export const SkiDayList = ({days}) =>(
	<table>
		<thead>
			<tr>
				<td>Date</td>
				<td>Resort</td>
				<td>Powder</td>
				<td>Backcountry</td>
			</tr>
		</thead>
		<tbody>
			{days.map((day, index) => 
				<SkiDayRow key={index} 
					resort={day.resort}
					powder={day.powder}
					backcountry={day.backcountry}
					date={day.date}
				/>
			)}	
		</tbody>
	</table>
)

export default SkiDayList;