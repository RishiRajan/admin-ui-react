import React from "react";
import Card from "./Card";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);


function PieChart(props) {

        let i =95;  //Base color index
        return (
          <Doughnut
            data={{
              datasets: [
                {
                  label: "Sales",
                  data: props.Sales,
                  backgroundColor: [
                    `rgb(32, 133, 236)`,
                    `rgb(114, 180, 235)`,
                    `rgb(10, 65, 122)`,
                    `rgb(132, 100, 160)`,
                    `rgb(206, 169, 188)`,
                    `rgb(50, 50, 50)	`,
                    `rgb(200, 50, 50)	`,
                  ],
                },
              ],
            }}
          />
        );
}

export default PieChart;