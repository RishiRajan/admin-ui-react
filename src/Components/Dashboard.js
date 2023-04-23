import React from "react";
import PieChart from "./PieChart"
import LineChart from "./LineChart"
import Card from "./Card";


function Dashboard() {


  const Monthlysales = [10000,25000,12000,35000,28000,45000,18000];
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>

      <div class="row">
        <Card
          title="Total Sales"
          value={"$"+Monthlysales.reduce(function (x, y) {
            return x + y;
          }, 0)}
          color="primary"
        />
        <Card title="This Month" value={"$"+Monthlysales[Monthlysales.length-1]} color="success" />
        <Card title="TASKS" value="50%" color="info" />
        <Card title="PENDING REQUESTS" value="18" color="warning" />
      </div>

      <div class="row">
        <div class="col-lg-4">
          <PieChart Sales={Monthlysales} />
        </div>

        <div class="col-lg-8">
          <LineChart Sales={Monthlysales} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
