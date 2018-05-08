Highcharts.chart('container', {
	chart: {
		type: 'scatter',
		zoomType: 'xy'
	},
	title: {
		text: 'Gun Ownership and Suicide Rate per State'
	},
	subtitle: {
		text: 'Source: <a href="https://today.yougov.com/">YouGov (2015)</a> and <a href="https://www.cdc.gov/nchs/pressroom/sosmap/suicide-mortality/suicide.htm">CDC (2016)</a>'
	},
	xAxis: {
		title: {
			enabled: true,
			text: 'Gun Ownership Rate'
		},
		startOnTick: true,
		endOnTick: true,
		showLastLabel: true
	},
	yAxis: {
		title: {
			text: 'Suicide Rate (age adjusted, per 100,000)'
		}
	},
	// legend: {
	// 	layout: 'vertical',
	// 	align: 'left',
	// 	verticalAlign: 'top',
	// 	x: 100,
	// 	y: 70,
	// 	floating: true,
	// 	backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
	// 	borderWidth: 1
	// },
	plotOptions: {
		scatter: {
			marker: {
				radius: 5,
				states: {
					hover: {
						enabled: true,
						lineColor: 'rgb(100,100,100)'
					}
				}
			},
			states: {
				hover: {
					marker: {
						enabled: false
					}
				}
			},
			tooltip: {
				headerFormat: '<b>{series.name}</b><br>',
				pointFormat: '{point.x}, {point.y}%'

			}
		}
	},
	series: [{
		// name: { name },
		color: 'rgba(223, 83, 83, .5)',




		data: [
    //     [52.3, 15.64],
	  //    [53.8, 14.95],
		// 	[61.7, 14.44],
		// 	[31.2, 12.92],
		// 	[56.9, 12.79],
		// 	[54.2, 12.12],
		// 	[49.9, 11.02],
		// 	[31.9, 10.95],
    // [37.5, 10.9],
		// 	[42.4, 10.84],
		// 	[34.3, 10.73],
		// 	[48.9, 10.69],
		// 	[57.9, 10.38],
		// 	[35, 10.36],
		// 	[27.1, 10.26],
		// 	[32.3, 10.15],
    // [44.4, 9.93],
		// 	[47.9, 9.92],
		// 	[39.4, 9.67],
		// 	[28.8, 9.58],
		// 	[26.6, 9.32],
		// 	[44.5, 9.09],
		// 	[32.2, 8.78],
		// 	[42.8, 8.71],
    // [14.4, 8.65],
		// 	[33.8, 8.52],
		// 	[31.6, 8.09],
		// 	[34.7, 7.49],
		// 	[19.6, 7.44],
		// 	[22.6, 7.42],
		// 	[28.7, 7.34],
		// 	[35.7, 7.28],
    // [33.8, 7.22],
		// 	[32.5, 7.1],
		// 	[27.1, 7.05],
		// 	[28.8, 6.79],
		// 	[27.7, 6.62],
		// 	[19.8, 6.07],
		// 	[5.2, 5.87],
		// 	[36.7, 5.77],
    // [20.7, 3.92],
		// 	[20.1, 3.86],
		// 	[26.2, 3.73],
		// 	[5.8, 2.83],
		// 	[16.6, 2.73],
		// 	[45.1, 2.43],
		// 	[10.3, 2.3],
		// 	[22.6, 1.89],
    // [11.3, 1.8]

			{ x: 52.3, y: 15.64, z: 1, name: 'MT', state: 'Montana' },
			{ x: 53.8, y: 14.95, z: 1, name: 'WY', state: 'Wyoming' },
			{ x: 61.7, y: 14.44, z: 1, name: 'AK', state: 'Alaska' },
			{ x: 33.5, y: 12.92, z: 1, name: 'OK', state: 'Oklahoma' },
			{ x: 56.9, y: 12.79, z: 1, name: 'ID', state: 'Idaho' },
			{ x: 54.2, y: 12.12, z: 1, name: 'WV', state: 'West Virginia' },
			{ x: 49.9, y: 13.5, z: 7, name: 'NM', state: 'New Mexico' },
			{ x: 31.9, y: 10.95, z: 3.5, name: 'UT', state: 'Utah' },
			{ x: 37.5, y: 10.9, z: 3.5, name: 'NV', state: 'Nevada' },
			{ x: 42.4, y: 10.84, z: 3.5, name: 'KY', state: 'Kentucky' },
			{ x: 34.3, y: 10.73, z: 7, name: 'CO', state: 'Colorado' },
			{ x: 48.9, y: 10.69, z: 3.5, name: 'AL', state: 'Alabama' },
			{ x: 57.9, y: 10.38, z: 1, name: 'AR', state: 'Arkansas' },
			{ x: 35, y: 10.36, z: 1, name: 'SD', state: 'South Dakota' },
			{ x: 27.1, y: 10.26, z: 3.5, name: 'MO', state: 'Missouri' },
			{ x: 32.3, y: 10.15, z: 1, name: 'AZ', state: 'Arizona' },
			{ x: 44.4, y: 9.93, z: 1, name: 'SC', state: 'South Carolina' },
			{ x: 47.9, y: 9.92, z: 1, name: 'IT', state: 'North Dakota' },
			{ x: 39.4, y: 9.67, z: 7, name: 'TN', state: 'Tennessee' },
			{ x: 28.8, y: 9.58, z: 7, name: 'VT', state: 'Vermont' },
			{ x: 26.6, y: 9.32, z: 7, name: 'OR', state: 'Oregon' },
			{ x: 44.5, y: 9.09, z: 1, name: 'LA', state: 'Louisiana' },
			{ x: 32.2, y: 8.78, z: 7, name: 'KS', state: 'Kansas' },
			{ x: 42.8, y: 8.71, z: 1, name: 'MS', state: 'Mississippi' },
			{ x: 14.4, y: 8.65, z: 7, name: 'NH', state: 'New Hampshire' },
			{ x: 33.8, y: 8.52, z: 1, name: 'IN', state: 'Indiana' },
			{ x: 31.6, y: 8.09, z: 1, name: 'GA', state: 'Georgia' },
			{ x: 44.7, y: 7.49, z: 1, name: 'WI', state: 'Wisconsin' },
			{ x: 19.6, y: 7.44, z: 1, name: 'OH', state: 'Ohio' },
			{ x: 29.3, y: 7.44, z: 7, name: 'VA', state: 'Virginia' },
			{ x: 22.6, y: 7.42, z: 1, name: 'ME', state: 'Maine' },
			{ x: 28.7, y: 7.34, z: 1, name: 'NC', state: 'North Carolina' },
			{ x: 35.7, y: 7.28, z: 7, name: 'TX', state: 'Texas' },
			{ x: 33.8, y: 7.22, z: 7, name: 'IA', state: 'Iowa' },
			{ x: 32.5, y: 7.1, z: 1, name: 'FL', state: 'Florida' },
			{ x: 27.1, y: 7.05, z: 1, name: 'PA', state: 'Pennsylvania' },
			{ x: 27.7, y: 6.62, z: 3.5, name: 'WA', state: 'Washington' },
			{ x: 19.1, y: 6.07, z: 1, name: 'NE', state: 'Nebraska' },
			{ x: 5.2, y: 5.87, z: 1, name: 'DE', state: 'Delaware' },
			{ x: 36.7, y: 5.77, z: 1, name: 'MN', state: 'Minnesota' },
			{ x: 20.7, y: 3.92, z: 7, name: 'MD', state: 'Maryland' },
			{ x: 20.1, y: 3.86, z: 7, name: 'CA', state: 'California' },
			{ x: 26.2, y: 3.73, z: 1, name: 'IL', state: 'Illinois' },
			{ x: 5.8, y: 2.83, z: 7, name: 'RI', state: 'Rhode Island' },
			{ x: 16.6, y: 2.73, z: 1, name: 'CT', state: 'Connecticut' },
			{ x: 45.1, y: 2.43, z: 1, name: 'HI', state: 'Hawaii' },
			{ x: 10.3, y: 2.3, z: 7, name: 'NY', state: 'New York' },
			{ x: 22.6, y: 1.89, z: 3.5, name: 'MA', state: 'Massachusetts' },
			{ x: 13.5, y: 1.8, z: 1, name: 'NJ', state: 'New Jersey' },


			]

}, {
		// name: 'Male',
		// color: 'rgba(119, 152, 191, .5)',
		// data: []
}]
});