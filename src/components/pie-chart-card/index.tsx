import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helper';
import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

export default function PieChartCard({ labels = [], name, series = [] }: Props) {
  return (
    <div className="pie-chart-card base-card">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width={400}
        height={400}
        series={series}
      />
    </div>
  );
}
