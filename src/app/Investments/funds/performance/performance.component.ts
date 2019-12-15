import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);

import { FundsService } from '../../../Services/funds.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
  // funds-perf-chart-div
  constructor(private fundsService: FundsService) { }

  ngOnInit() {
    this.GetInvestmentPerformance(1);
  }

  GetInvestmentPerformance(portfolioId) {
    this.fundsService.getInvestmentPerformance(portfolioId).subscribe(val => {
      console.log('PerformanceComponent -- GetInvestmentPerformance', val);
      this.CreateStocksChart(val);

      // this.CreateLineChart(val);
    },
      error => {
        console.error('PerformanceComponent -- GetInvestmentPerformance', error);
      }
    );
  }

  CreateStocksChart(data) {
    try {
      const chart = am4core.create('funds-perf-chart-div', am4charts.XYChart);
      chart.data = data;

      chart.colors.list = [
        am4core.color('#CC3333'), // Investment
        am4core.color('#3399FF') // Expenses
      ];

      // the following line makes value axes to be arranged vertically.
      chart.leftAxesContainer.layout = 'vertical';

      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis.renderer.ticks.template.length = 8;
      dateAxis.renderer.ticks.template.strokeOpacity = 0.1;
      dateAxis.renderer.grid.template.disabled = true;
      dateAxis.renderer.ticks.template.disabled = false;
      dateAxis.renderer.ticks.template.strokeOpacity = 0.2;
      dateAxis.renderer.minLabelPosition = 0.01;
      dateAxis.renderer.maxLabelPosition = 0.99;
      dateAxis.keepSelection = true;
      dateAxis.minHeight = 30;

      // dateAxis.groupData = true;
      dateAxis.minZoomCount = 5;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.zIndex = 1;
      valueAxis.renderer.baseGrid.disabled = true;
      // height of axis
      valueAxis.height = am4core.percent(65);

      valueAxis.renderer.gridContainer.background.fill = am4core.color('#000000');
      valueAxis.renderer.gridContainer.background.fillOpacity = 0.05;
      valueAxis.renderer.inside = true;
      valueAxis.renderer.labels.template.verticalCenter = 'bottom';
      valueAxis.renderer.labels.template.padding(2, 2, 2, 2);

      // valueAxis.renderer.maxLabelPosition = 0.95;
      valueAxis.renderer.fontSize = '0.8em';

      chart.cursor = new am4charts.XYCursor();

      
      this.CreateStockChartSeries(chart, 'Date', 'Investment', 'Funds: Value', 'Investment');
      this.CreateStockChartSeries(chart, 'Date', 'CurrentValue', 'Funds: Value', 'Value');

    //   let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    //   valueAxis2.tooltip.disabled = true;
    //   // height of axis
    //   valueAxis2.height = am4core.percent(35);
    //   valueAxis2.zIndex = 3;

    //   valueAxis2.marginTop = 30;
    //   valueAxis2.renderer.baseGrid.disabled = true;
    //   valueAxis2.renderer.inside = true;
    //   valueAxis2.renderer.labels.template.verticalCenter = 'bottom';
    //   valueAxis2.renderer.labels.template.padding(2, 2, 2, 2);
    //   // valueAxis.renderer.maxLabelPosition = 0.95;
    //   valueAxis2.renderer.fontSize = '0.8em';

    // valueAxis2.renderer.gridContainer.background.fill = am4core.color('#000000');
    // valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05;

    } catch (ex) {
      console.error('PerformanceComponent -- CreateStocksChart', ex);
    }
  }

  CreateStockChartSeries(chart, xValue, yValue, name, label) {
    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = xValue;
    series.dataFields.valueY = yValue;
    series.tooltipText = label + ': {valueY.value}';
    series.name = name;
    series.defaultState.transitionDuration = 0;

    const scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    scrollbarX.marginBottom = 20;
    scrollbarX.scrollbarChart.xAxes.getIndex(0).minHeight = undefined;
    chart.scrollbarX = scrollbarX;
  }

  CreateLineChart(data) {
    try {
      const chart = am4core.create('funds-perf-chart-div', am4charts.XYChart);
      chart.data = data;

      chart.colors.list = [
        am4core.color('#CC3333'), // Investment
        am4core.color('#3399FF') // Expenses
      ];

      // Create category axis
      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = 'Date';
      categoryAxis.renderer.opposite = false;
      const label = categoryAxis.renderer.labels.template;
      label.wrap = true;
      label.maxWidth = 120;
      label.fontSize = 12;

    // Create value axis
      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.inversed = false;
      valueAxis.renderer.inside = true;
      valueAxis.renderer.labels.template.dy = -20;
      const axislabel = valueAxis.renderer.labels.template;
      axislabel.wrap = true;
      axislabel.maxWidth = 120;
      axislabel.fontSize = 12;

      this.CreateLineSeries(chart, 'Date', 'Investment', 'Investment');
      this.CreateLineSeries(chart, 'Date', 'CurrentValue', 'CurrentValue');

    // Add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = 'zoomY';

    // Add legend
      chart.legend = new am4charts.Legend();
    } catch (ex) {
      console.error('PerformanceComponent -- CreateLineChart', ex);
    }
  }

  CreateLineSeries(chart, categoryX, valueY, name) {
    const series3 = chart.series.push(new am4charts.LineSeries());
    series3.dataFields.valueY = valueY; // 'Credit';
    series3.dataFields.categoryX = categoryX; // 'Date';
    series3.name = name; // 'Income';
    series3.strokeWidth = 3;
    series3.bullets.push(new am4charts.CircleBullet());
    series3.tooltipText = '{name} {categoryX}: {valueY}';
    series3.legendSettings.valueText = '{valueY}';
  }

}
