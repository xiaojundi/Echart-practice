
(function() {
	
	var myChart = echarts.init(document.querySelector(".bar .chart"));
	
	var option = {};
	
	myChart.setOption(option);
	
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();

(function() {
	var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
	
	var myChart = echarts.init(document.querySelector(".bar2 .chart"));
	
	var option = {};
	
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
	
	var option = {};
	
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
	var option = {};
	
	myChart.setOption(option);
	
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();

(function() {
	
	var myChart = echarts.init(document.querySelector(".pie .chart"));
	
	var option = {};
	
	myChart.setOption(option);
	
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();

(function() {
	
	var myChart = echarts.init(document.querySelector(".pie2 .chart"));
	
	var option = {};
	
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
		option = {};
		myChart.setOption(option);
	});
	
	window.addEventListener("resize", function() {
		myChart.resize();
	});
})();
