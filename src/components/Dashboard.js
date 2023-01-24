import Activity from "../components/Activity";
import Sessionchart from "../components/Sessionchart";
import Performancechart from "../components/Performancechart";
import "../styles/components/bottomgraph.css";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const userData = useLoaderData();
  const user = { ...userData.user.data };
  const activity = { ...userData.activity.data };
  const average = { ...userData.average.data };
  const performance = { ...userData.performance.data };
  console.log(performance);

  return (
    <div>
      <h1>Bonjour Thomas</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="leftContainer">
        <div className="topgraph">
          <Activity data={activity.sessions} />
        </div>
        <div className="bottomgraph">
          <Sessionchart data={average.sessions} />
          <Performancechart data={performance} />
        </div>
      </div>
      <div className="rightContainer"></div>
    </div>
  );
};

export default Dashboard;
