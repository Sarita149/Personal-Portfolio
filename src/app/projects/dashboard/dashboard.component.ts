import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

interface MetricCard {
  label: string;
  value: string;
  trend: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnDestroy {
  @ViewChild('dashboardDemo') dashboardDemoRef!: ElementRef<HTMLElement>;
  @ViewChild('lineChart') lineChartRef!: ElementRef<HTMLDivElement>;
  @ViewChild('barChart') barChartRef!: ElementRef<HTMLDivElement>;
  @ViewChild('pieChart') pieChartRef!: ElementRef<HTMLDivElement>;

  metrics: MetricCard[] = [
    { label: 'Active Users', value: '24.8k', trend: '+18%' },
    { label: 'Monthly Sales', value: '1.42L', trend: '+11%' },
    { label: 'Conversion', value: '8.6%', trend: '+3%' }
  ];
  demoHighlighted = false;

  private charts: Highcharts.Chart[] = [];

  ngAfterViewInit(): void {
    this.renderCharts();
  }

  ngOnDestroy(): void {
    this.charts.forEach((chart) => chart.destroy());
  }

  scrollToDemo(): void {
    const demoElement = this.dashboardDemoRef.nativeElement;

    demoElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    demoElement.focus({ preventScroll: true });
    this.demoHighlighted = true;

    window.setTimeout(() => this.demoHighlighted = false, 1400);
  }

  private renderCharts(): void {
    // Highcharts owns DOM rendering, so chart instances are kept for cleanup.
    this.charts = [
      Highcharts.chart(this.lineChartRef.nativeElement, this.lineChartOptions()),
      Highcharts.chart(this.barChartRef.nativeElement, this.barChartOptions()),
      Highcharts.chart(this.pieChartRef.nativeElement, this.pieChartOptions())
    ];
  }

  private baseOptions(title: string): Highcharts.Options {
    return {
      title: { text: title, style: { color: '#18293c', fontWeight: '600' } },
      credits: { enabled: false },
      legend: { itemStyle: { color: '#18293c' } },
      chart: {
        backgroundColor: 'transparent',
        style: { fontFamily: 'Roboto, Helvetica Neue, sans-serif' }
      }
    };
  }

  private lineChartOptions(): Highcharts.Options {
    return {
      ...this.baseOptions('User Growth'),
      xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
      yAxis: { title: { text: 'Users' } },
      series: [{
        type: 'line',
        name: 'Users',
        data: [1200, 1800, 2600, 3900, 5200, 7600],
        color: '#e02f6b'
      }]
    };
  }

  private barChartOptions(): Highcharts.Options {
    return {
      ...this.baseOptions('Usage by Product'),
      xAxis: { categories: ['CRM', 'Billing', 'Reports', 'Mobile'] },
      yAxis: { title: { text: 'Sessions' } },
      series: [{
        type: 'column',
        name: 'Sessions',
        data: [42, 61, 35, 54],
        color: '#204051'
      }]
    };
  }

  private pieChartOptions(): Highcharts.Options {
    return {
      ...this.baseOptions('Traffic Sources'),
      tooltip: { pointFormat: '<b>{point.percentage:.1f}%</b>' },
      series: [{
        type: 'pie',
        name: 'Traffic',
        data: [
          { name: 'Organic', y: 45, color: '#eece1a' },
          { name: 'Referral', y: 25, color: '#3b6978' },
          { name: 'Social', y: 20, color: '#e02f6b' },
          { name: 'Email', y: 10, color: '#84a9ac' }
        ]
      }]
    };
  }
}
