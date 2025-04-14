import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutGraph({data}) {
  return <Doughnut data={data} style={{width:"20%",height:"20%"}}/>;
}
