import { Component, OnInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

import { HomeService } from '../../../../Services/home.service';
// import { exec } from 'child_process';

@Component({
  selector: 'app-expenses-chart',
  templateUrl: './expenses-chart.component.html',
  styleUrls: ['./expenses-chart.component.scss']
})
export class ExpensesChartComponent implements OnInit {
  public chartData: any;

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    // this.createCylinderChart();

    this._homeService.getExpensesChartData().subscribe(val => {
      this.chartData = val;
      this.FormatChartData();
      console.log('ExpensesChartComponent -- get Current expenses', val);
      this.creteLayeredColumnChart();
    },
      error => {
        console.error('ExpensesChartComponent -- get Current expenses', error);
      }
    );
  }

  FormatChartData() {
    try {
      var month = new Array();
      month[0] = "Jan";
      month[1] = "Feb";
      month[2] = "Mar";
      month[3] = "Apr";
      month[4] = "May";
      month[5] = "Jun";
      month[6] = "Jul";
      month[7] = "Aug";
      month[8] = "Sep";
      month[9] = "Oct";
      month[10] = "Nov";
      month[11] = "Dec";
      if (this.chartData != null && this.chartData.length > 0) {
        for ( let i = 0 ; i < this.chartData.length ; i++ ) {
          var date = new Date(this.chartData[i].FromDate);
          //console.log('ExpensesChartComponent -- FormatChartData', this.chartData[i], month[date.getMonth()], '/', date.getFullYear());
          this._homeService.totalExpenses = this._homeService.totalExpenses + this.chartData[i].Expense;
          this._homeService.totalBudget = this._homeService.totalBudget + this.chartData[i].Budget;
          this.chartData[i].Period = month[date.getMonth()] +  ' / ' + date.getFullYear();
        }
      }
      console.log('ExpensesChartComponent -- FormatChartData', this._homeService.totalExpenses, this._homeService.totalBudget, this.chartData);
    } catch (ex) {
      console.error('ExpensesChartComponent -- FormatChartData', ex);
    }
  }

  creteLayeredColumnChart() {
    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.responsive.enabled = true;
    chart.paddingBottom = 30;
    chart.colors.list = [
      am4core.color('#3399FF'), // Budget
      am4core.color('#CC3333') // Expenses
    ];
    // chart.angle = 35;

    // Add percent sign to all numbers
    // chart.numberFormatter.numberFormat = '#.3'%'';

    // Add data
    chart.data = this.chartData;
    chart.dateFormatter.dateFormat = 'MM/dd/yyyy';
    chart.numberFormatter.numberFormat = '#.#';

    // Create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'Period';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.inside = true;
    categoryAxis.dateFormatter.dateFormat = 'MM/dd/yyyy';

    const labelTemplate = categoryAxis.renderer.labels.template;
    labelTemplate.rotation = -90;
    labelTemplate.horizontalCenter = 'left';
    labelTemplate.verticalCenter = 'middle';
    // labelTemplate.dy = 10; // moves it a bit down;
    labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = 'Expenses / Budget';

    // Create series
    this.createSeries(chart, 'Period', 'Budget', 100);
    this.createSeries(chart, 'Period', 'Expense', 50);

    // let series2 = chart.series.push(new am4charts.ColumnSeries());
    // series2.dataFields.valueY = 'Expense';
    // series2.dataFields.categoryX = 'Period';
    // series2.clustered = false;
    // series2.columns.template.width = am4core.percent(50);
    // series2.tooltipText = 'Expenses {categoryX}: [bold]{valueY}[/]';

    chart.legend = new am4charts.Legend();

    chart.legend.useDefaultMarker = true;
    const marker = chart.legend.markers.template.children.getIndex(0);
    // marker.cornerRadius(12, 12, 12, 12);
    marker.strokeWidth = 2;
    marker.strokeOpacity = 1;
    marker.stroke = am4core.color('#ccc');

    const markerTemplate = chart.legend.markers.template;
    markerTemplate.width = 40;
    markerTemplate.height = 40;

    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.disabled = true;
    chart.cursor.lineY.disabled = true;

    // let valueLabel = series.bullets.push(new am4charts.LabelBullet());
    // valueLabel.label.text = '{value}';

    // let legendContainer = am4core.create('legenddiv', am4core.Container);
    // legendContainer.width = am4core.percent(100);
    // legendContainer.height = am4core.percent(100);

    // chart.events.on('datavalidated', function(ev) {

    //   // Get objects of interest
    //   var chart = ev.target;
    //   var categoryAxis = chart.yAxes.getIndex(0);
    //   var cellSize = 30;
    //   // Calculate how we need to adjust chart height
    //   var adjustHeight = chart.data.length * cellSize - categoryAxis.pixelHeight;

    //   // get current chart height
    //   var targetHeight = chart.pixelHeight + adjustHeight;

    //   // Set it on chart's container
    //   chart.svgContainer.htmlElement.style.height = targetHeight + 'px';
    //     });

  }

  createSeries(chart, xAxis, yAxis, axisWidth) {
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = yAxis;
    series.dataFields.categoryX = xAxis;
    series.clustered = false;
    if (axisWidth !== 100) {
      series.columns.template.width = am4core.percent(axisWidth);
    }
    series.tooltipText = yAxis + ' {categoryX}: [bold]{valueY}[/]';
    series.dateFormatter.dateFormat = 'MM/dd/yyyy';

        // let valueLabel = series.bullets.push(new am4charts.LabelBullet());
    // valueLabel.label.text = '{value}';
    // valueLabel.label.fontSize = 25;
    // valueLabel.label.horizontalCenter = 'left';
    // valueLabel.label.dx = 10;
  }

  createCylinderChart() {
    const chart = am4core.create('chartdiv', am4charts.XYChart3D);
    chart.paddingBottom = 30;
    chart.angle = 35;

    // Add data
    chart.data = [
                          { FromDate: 'USA', visits: 4025 }
                        , { FromDate: 'China', visits: 1882 }
                        , { FromDate: 'Japan', visits: 1809 }
                      ];

    // Create axes
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'Period';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.inside = true;
    categoryAxis.renderer.grid.template.disabled = true;

    const labelTemplate = categoryAxis.renderer.labels.template;
    labelTemplate.rotation = -90;
    labelTemplate.horizontalCenter = 'left';
    labelTemplate.verticalCenter = 'middle';
    labelTemplate.dy = 10; // moves it a bit down;
    labelTemplate.inside = false; // this is done to avoid settings which are not suitable when label is rotated

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.disabled = true;

// Create series
    const series = chart.series.push(new am4charts.ConeSeries());
    series.dataFields.valueY = 'visits';
    series.dataFields.categoryX = 'Period';

    const columnTemplate = series.columns.template;
    columnTemplate.adapter.add('fill', function(fill, target) {
  return chart.colors.getIndex(target.dataItem.index);
});

    columnTemplate.adapter.add('stroke', function(stroke, target) {
  return chart.colors.getIndex(target.dataItem.index);
});
  }
}
