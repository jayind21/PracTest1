import Highcharts from 'highcharts';
import { Template } from 'meteor/templating';

function createPie() {
  $('#container').highcharts({
  chart: {
        backgroundColor: '#FCFFC5',
        plotBorderWidth: 0,
        plotShadow: false
    },
    title: {
        text: '449',
        align: 'center',
        verticalAlign: 'middle',
        style: {
         fontWeight: 'bold',
         fontSize: '25px'
       }
       
    },
    tooltip: {
        pointFormat: '<b>{point.percentage:.0f}%</b>'
    },
    plotOptions: {
        pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			states: {
                select: {
                    color: null,
                    borderWidth:5,
                    borderColor:'Grey'
				}
			},
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b> {point.y}, {point.percentage:.0f} %',
                style: {
                    fontWeight: 'bold',
                    color: 'black'
                }
            },
          
        }
    },
    series: [{
        type: 'pie',
        innerSize: '50%',
        data: [
            ['Female',   126],
            ['Male',      323],
            {
                y: 0.2,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
  });
}

Template.Test.onCreated(function() {
});

Template.Test.onRendered(function() {
  this.autorun(() => {
    createPie();
  });
});