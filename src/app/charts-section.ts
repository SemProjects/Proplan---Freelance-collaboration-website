import { Component } from '@angular/core';


@Component({
  selector: 'charts-section',
  template: `
<section [attr.id]="name">
  <div class="row">
      
    <chart-section [ts]="desc.barChart.ts" [html]="desc.barChart.html" [heading]="desc.barChart.heading"><bar-chart-demo></bar-chart-demo></chart-section>
  </div>

  <br>

</section>
  `
})

export class ChartsSectionComponent {
  public name: string = 'Charts';
  public src: string = 'https://github.com/valor-software/ng2-charts/blob/master/components/charts/charts.ts';
  
  public desc: any = {
    barChart: {
      heading: 'Bar Chart',
      id: 'barChart',
      ts: require('./charts/bar-chart-demo.ts'),
      html: require('./charts/bar-chart-demo.html')
    }
  };
}
