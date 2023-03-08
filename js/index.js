
(function() {
	
	var myChart = echarts.init(document.querySelector(".bar .chart"));
	
	var option = {
		color: ["#3398DB"],
		tooltip: {
			trigger: "axis",
			axisPointer: {
				
				type: "shadow" 
			}
		},
		grid: {
			left: "0%",
			top: "10px",
			right: "0%",
			bottom: "4%",
			containLabel: true
		},
		xAxis: [
			{
				type: "category",
				data: ["Travel", "Education", "Game", "Medical", "E-commerce", "Social", "Finance"],
				axisTick: {
					alignWithLabel: true
				},
				
				axisLabel: {
					color: "rgba(255,255,255,.6)",
					fontSize: "12"
				},
				
				axisLine: {
					show: false
				}
			}
		],
		yAxis: [
			{
				type: "value",
				
				axisLabel: {
					color: "rgba(255,255,255,.6)",
					fontSize: "12"
				},
				
				axisLine: {
					lineStyle: {
						color: "rgba(255,255,255,.1)",
						width: 2
					}
				},
				
				splitLine: {
					lineStyle: {
						color: "rgba(255,255,255,.1)"
					}
				}
			}
		],
		series: [
			{
				name: "Employeed",
				type: "bar",
				barWidth: "35%",
				data: [200, 300, 300, 900, 1500, 1200, 600],
				
				itemStyle: {
					barBorderRadius: 5
				}
			}
		]
	};
	
	myChart.setOption(option);
	
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();

(function() {
	var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
	
	var myChart = echarts.init(document.querySelector(".bar2 .chart"));
	
	var option = {
		grid: {
			top: "10%",
			left: "22%",
			bottom: "10%"
		},
		xAxis: {
			show: false
		},
		yAxis: [
			{
				type: "category",
				inverse: true,
				data: ["Python", "R" ,"Excel", "PowerBI", "JS", "Tableau"],
				
				axisLine: {
					show: false
				},
				
				axisTick: {
					show: false
				},
				axisLabel: {
					color: "#fff"
				}
			},
			{
				inverse: true,
				data: [702, 200, 350, 610, 693, 664],
				
				axisLine: {
					show: false
				},
				
				axisTick: {
					show: false
				},
				axisLabel: {
					color: "#fff"
				}
			}
		],
		series: [
			{
				name: "条",
				type: "bar",
				inverse: true,
				data: [70, 20 ,34, 60, 78, 69],
				yAxisIndex: 0,
				
				itemStyle: {
					barBorderRadius: 20,
					
					color: function(params) {
						
						return myColor[params.dataIndex];
					}
				},
				
				barCategoryGap: 50,
				
				barWidth: 10,
				
				label: {
					show: true,
					position: "inside",
					
					formatter: "{c}%"
				}
			},
			{
				name: "框",
				type: "bar",
				barCategoryGap: 50,
				barWidth: 15,
				yAxisIndex: 1,
				inverse: true,
				data: [100, 100 ,100, 100, 100, 100],
				itemStyle: {
					color: "none",
					borderColor: "#00c1de",
					borderWidth: 3,
					barBorderRadius: 15
				}
			}
		]
	};
	
	myChart.setOption(option);
	
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();

(function() {
	
	var myChart = echarts.init(document.querySelector(".line .chart"));
	
	var yearData = [
		{
			year: "2020",
			data: [
				[24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
				[40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
			]
		},
		{
			year: "2021",
			data: [
				[123, 175, 112, 67, 98, 78, 43, 64, 76, 38, 45, 65],
				[143, 131, 165, 123, 178, 21, 81, 64, 43, 60, 19, 34]
			]
		}
	];
	
	var option = {
		color: ["#00f2f1", "#eb3f35"],
		tooltip: {
			trigger: "axis"
		},
		legend: {
			textStyle: {
				color: "#4c9bfd"
			},
			right: "10%"
		},
		grid: {
			top: "20%",
			left: "3%",
			right: "4%",
			bottom: "3%",
			
			show: true,
			borderColor: "#012f4a",
			containLabel: true
		},
		xAxis: {
			type: "category",
			boundaryGap: false,
			data: [
				"JAN",
				"FEB",
				"MAR",
				"APRI",
				"MAY",
				"JUN",
				"JUNLY",
				"AUG",
				"SEPT",
				"OCT",
				"NOV",
				"DEC"
			],
			
			axisTick: {
				show: false
			},
			
			axisLabel: {
				color: "rgba(255,255,255,.7)"
			},
			
			splitLine: {
				lineStyle: {
					color: "#012f4a"
				}
			}
		},
		yAxis: {
			type: "value",
			
			axisTick: {
				show: false
			},
			
			axisLabel: {
				color: "rgba(255,255,255,.7)"
			},
			
			splitLine: {
				lineStyle: {
					color: "#012f4a"
				}
			}
		},
		series: [
			{
				name: "new job seekers",
				type: "line",
				
				smooth: true,
				data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
			},
			{
				name: "new job openning",
				type: "line",
				smooth: true,
				data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
			}
		]
	};
	
	myChart.setOption(option);
	
	window.addEventListener("resize", function() {
		myChart.resize();
	});
	
	$(".line h2").on("click", "a", function() {
		
		
		
		var obj = yearData[$(this).index()];
		option.series[0].data = obj.data[0];
		option.series[1].data = obj.data[1];
		
		myChart.setOption(option);
	});
})();

(function() {
	var myChart = echarts.init(document.querySelector(".line2 .chart"));
	var option = {
		tooltip: {
			trigger: "axis"
		},
		legend: {
			top: "0%",
			textStyle: {
				color: "rgba(255,255,255,.5)",
				fontSize: "12"
			}
		},
		grid: {
			left: "10",
			top: "30",
			right: "10",
			bottom: "10",
			containLabel: true
		},
		xAxis: [
			{
				type: "category",
				boundaryGap: false,
				data: [
					"01",
					"02",
					"03",
					"04",
					"05",
					"06",
					"07",
					"08",
					"09",
					"11",
					"12",
					"13",
					"14",
					"15",
					"16",
					"17",
					"18",
					"19",
					"20",
					"21",
					"22",
					"23",
					"24",
					"25",
					"26",
					"27",
					"28",
					"29",
					"30"
				],
				
				axisLabel: {
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: "12"
					}
				},
				
				axisLine: {
					lineStyle: {
						color: "rgba(255,255,255,.2)"
					}
				}
			}
		],
		yAxis: [
			{
				type: "value",
				axisTick: { show: false },
				axisLine: {
					lineStyle: {
						color: "rgba(255,255,255,.1)"
					}
				},
				axisLabel: {
					textStyle: {
						color: "rgba(255,255,255,.6)",
						fontSize: 12
					}
				},

				splitLine: {
					lineStyle: {
						color: "rgba(255,255,255,.1)"
					}
				}
			}
		],
		series: [
			{
				name: "Online Application",
				type: "line",
				smooth: true,
				lineStyle: {
					color: "#0184d5",
					width: "2"
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0,
							0,
							0,
							1,
							[
								{
									offset: 0,
									color: "rgba(1, 132, 213, 0.4)"
								},
								{
									offset: 0.8,
									color: "rgba(1, 132, 213, 0.1)"
								}
							],
							false
						),
						shadowColor: "rgba(0, 0, 0, 0.1)"
					}
				},
				
				symbol: "circle",
				symbolSize: "5",
				showSymbol: false,
				
				itemStyle: {
					normal: {
						color: "#0184d5",
						borderColor: "rgba(221, 220, 107, .1)",
						borderWidth: 12
					}
				},
				data: [
					30,
					40,
					30,
					40,
					30,
					40,
					30,
					60,
					20,
					40,
					20,
					40,
					30,
					40,
					30,
					40,
					30,
					40,
					30,
					60,
					20,
					40,
					20,
					40,
					30,
					60,
					20,
					40,
					20,
					40
				]
			},
			{
				name: "Recruiter",
				type: "line",
				smooth: true,
				lineStyle: {
					normal: {
						color: "#00d887",
						width: 2
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0,
							0,
							0,
							1,
							[
								{
									offset: 0,
									color: "rgba(0, 216, 135, 0.4)"
								},
								{
									offset: 0.8,
									color: "rgba(0, 216, 135, 0.1)"
								}
							],
							false
						),
						shadowColor: "rgba(0, 0, 0, 0.1)"
					}
				},
				symbol: "circle",
				symbolSize: 5,
				showSymbol: false,
				itemStyle: {
					normal: {
						color: "#00d887",
						borderColor: "rgba(221, 220, 107, .1)",
						borderWidth: 12
					}
				},
				data: [
					50,
					30,
					50,
					60,
					10,
					50,
					30,
					50,
					60,
					40,
					60,
					40,
					80,
					30,
					50,
					60,
					10,
					50,
					30,
					70,
					20,
					50,
					10,
					40,
					50,
					30,
					70,
					20,
					50,
					10,
					40
				]
			}
		]
	};
	
	myChart.setOption(option);
	
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();

(function() {
	
	var myChart = echarts.init(document.querySelector(".pie .chart"));
	
	var option = {
		tooltip: {
			trigger: "item",
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
			bottom: "0%",
			itemWidth: 10,
			itemHeight: 10,
			textStyle: {
				color: "rgba(255,255,255,.5)",
				fontSize: "12"
			}
		},
		series: [
			{
				name: "访问来源",
				type: "pie",
				
				radius: ["40%", "60%"],
				center: ["50%", "48%"],
				avoidLabelOverlap: false,
				
				label: {
					show: true
					
				},
				color: [
					"#065aab",
					"#066eab",
					"#0682ab",
					"#0696ab",
					"#06a0ab",
					"#06b4ab",
					"#06c8ab",
					"#06dcab",
					"#06f0ab"
				],
				emphasis: {
					label: {
						show: true,
						fontSize: "20",
						fontWeight: "bold"
					}
				},
				
				labelLine: {
					show: true
				},
				
				data: [
					{ value: 1, name: "under 20 years old" },
					{ value: 4, name: "age 20-29" },
					{ value: 2, name: "age 30-39" },
					{ value: 2, name: "age 40-49" },
					{ value: 1, name: "age over 50" }
				]
			}
		]
	};
	
	myChart.setOption(option);
	
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();

(function() {
	
	var myChart = echarts.init(document.querySelector(".pie2 .chart"));
	
	var option = {
		tooltip: {
			trigger: "item",
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			bottom: "0%",
			itemWidth: 10,
			itemHeight: 10,
			textStyle: {
				color: "rgba(255,255,255,.5)",
				fontSize: "12"
			}
		},
		
		color: [
			"#006cff",
			"#60cda0",
			"#ed8884",
			"#ff9f7f",
			"#0096ff",
			"#9fe6b8",
			"#32c5e9",
			"#1d9dff"
		],
		series: [
			{
				name: "Geo distribution",
				type: "pie",
				radius: ["10%", "70%"],
				center: ["50%", "42%"],
				roseType: "radius",
				emphasis: {
					label: {
						show: true,
						fontSize: "20",
						fontWeight: "bold"
					}
				},
				
				label: {
					fontSize: 10
				},
				labelLine: {
					show: false,
					length: 6,
					length: 2
				},
				data: [
					{ value: 20, name: "Arizona" },
					{ value: 26, name: "New Jersey" },
					{ value: 24, name: "Wshington" },
					{ value: 25, name: "Georgia" },
					{ value: 20, name: "Ohio" },
					{ value: 25, name: "Texas" },
					{ value: 30, name: "Florida" },
					{ value: 42, name: "New York" }
				]
			}
		]
	};
	
	myChart.setOption(option);
	
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();

(function() {
	
	var myChart = echarts.init(document.querySelector(".map .chart")); 
	console.log($)
	// var option = {
	// 	tooltip: {
	// 		trigger: "item",
	// 		formatter: function(params, ticket, callback) {
	// 			if (params.seriesType == "effectScatter") {
	// 				return "线路：" + params.data.name + "" + params.data.value[2];
	// 			} else if (params.seriesType == "lines") {
	// 				return (
	// 					params.data.fromName +
	// 					">" +
	// 					params.data.toName +
	// 					"<br />" +
	// 					params.data.value
	// 				);
	// 			} else {
	// 				return params.name;
	// 			}
	// 		}
	// 	},
	// 	legend: {
	// 		bottom: "3%",
	// 		itemWidth: 10,
	// 		itemHeight: 10,
	// 		textStyle: {
	// 			color: "rgba(255,255,255,.5)",
	// 			fontSize: "15"
	// 		}
	// 	},
  //   geo: {
  //     map: 'USA',
  //     roam: true,
  //     itemStyle: {
  //       areaColor: '#e7e8ea'
  //     }
  //   },
	// 	series: series
	// };
	
	// myChart.setOption(option);
	$.get('../usa.json', function (usaJson) {
		myChart.hideLoading();
		echarts.registerMap('USA', usaJson, {
			Alaska: {
				left: -131,
				top: 25,
				width: 15
			},
			Hawaii: {
				left: -110,
				top: 28,
				width: 5
			},
			'Puerto Rico': {
				left: -76,
				top: 26,
				width: 2
			}
		});
		option = {
			title: {
				text: 'USA Population Estimates (2012)',
				subtext: 'Data from www.census.gov',
				sublink: 'http://www.census.gov/popest/data/datasets.html',
				left: 'right'
			},
			tooltip: {
				trigger: 'item',
				showDelay: 0,
				transitionDuration: 0.2
			},
			visualMap: {
				left: 'right',
				min: 500000,
				max: 38000000,
				inRange: {
					color: [
						'#313695',
						'#4575b4',
						'#74add1',
						'#abd9e9',
						'#e0f3f8',
						'#ffffbf',
						'#fee090',
						'#fdae61',
						'#f46d43',
						'#d73027',
						'#a50026'
					]
				},
				text: ['High', 'Low'],
				calculable: true
			},
			toolbox: {
				show: true,
				//orient: 'vertical',
				left: 'left',
				top: 'top',
				feature: {
					dataView: { readOnly: false },
					restore: {},
					saveAsImage: {}
				}
			},
			series: [
				{
					name: 'USA PopEstimates',
					type: 'map',
					roam: true,
					map: 'USA',
					emphasis: {
						label: {
							show: true
						}
					},
					data: [
						{ name: 'Alabama', value: 4822023 },
						{ name: 'Alaska', value: 731449 },
						{ name: 'Arizona', value: 6553255 },
						{ name: 'Arkansas', value: 2949131 },
						{ name: 'California', value: 38041430 },
						{ name: 'Colorado', value: 5187582 },
						{ name: 'Connecticut', value: 3590347 },
						{ name: 'Delaware', value: 917092 },
						{ name: 'District of Columbia', value: 632323 },
						{ name: 'Florida', value: 19317568 },
						{ name: 'Georgia', value: 9919945 },
						{ name: 'Hawaii', value: 1392313 },
						{ name: 'Idaho', value: 1595728 },
						{ name: 'Illinois', value: 12875255 },
						{ name: 'Indiana', value: 6537334 },
						{ name: 'Iowa', value: 3074186 },
						{ name: 'Kansas', value: 2885905 },
						{ name: 'Kentucky', value: 4380415 },
						{ name: 'Louisiana', value: 4601893 },
						{ name: 'Maine', value: 1329192 },
						{ name: 'Maryland', value: 5884563 },
						{ name: 'Massachusetts', value: 6646144 },
						{ name: 'Michigan', value: 9883360 },
						{ name: 'Minnesota', value: 5379139 },
						{ name: 'Mississippi', value: 2984926 },
						{ name: 'Missouri', value: 6021988 },
						{ name: 'Montana', value: 1005141 },
						{ name: 'Nebraska', value: 1855525 },
						{ name: 'Nevada', value: 2758931 },
						{ name: 'New Hampshire', value: 1320718 },
						{ name: 'New Jersey', value: 8864590 },
						{ name: 'New Mexico', value: 2085538 },
						{ name: 'New York', value: 1957026100 },
						{ name: 'North Carolina', value: 9752073 },
						{ name: 'North Dakota', value: 699628 },
						{ name: 'Ohio', value: 11544225 },
						{ name: 'Oklahoma', value: 3814820 },
						{ name: 'Oregon', value: 3899353 },
						{ name: 'Pennsylvania', value: 12763536 },
						{ name: 'Rhode Island', value: 1050292 },
						{ name: 'South Carolina', value: 4723723 },
						{ name: 'South Dakota', value: 833354 },
						{ name: 'Tennessee', value: 6456243 },
						{ name: 'Texas', value: 26059203 },
						{ name: 'Utah', value: 2855287 },
						{ name: 'Vermont', value: 626011 },
						{ name: 'Virginia', value: 8185867 },
						{ name: 'Washington', value: 6897012 },
						{ name: 'West Virginia', value: 1855413 },
						{ name: 'Wisconsin', value: 5726398 },
						{ name: 'Wyoming', value: 576412 },
						{ name: 'Puerto Rico', value: 3667084 }
					]
				}
			]
		};
		myChart.setOption(option);
	});
	
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();
