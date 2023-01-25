import Activity from "../components/Activity";
import Sessionchart from "../components/Sessionchart";
import Performancechart from "../components/Performancechart";
import Scorechart from "../components/Scorechart";
import Card from "../components/Card";
import "../styles/bottomgraph.css";
import "../styles/container.css";
import "../styles/rightContainer.css";
import "../styles/dashboard.css";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const userData = useLoaderData();
  const user = { ...userData.user.data };
  const activity = { ...userData.activity.data };
  const average = { ...userData.average.data };
  const performance = { ...userData.performance.data };

  console.log(user);

  return (
    <div className="firstcontainer">
      <h1 className="username">
        Bonjour <span style={{ color: "red" }}>{user.userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="container">
        <div className="leftContainer">
          <div className="topgraph">
            <Activity data={activity.sessions} />
          </div>
          <div className="bottomgraph">
            <Sessionchart data={average.sessions} />
            <Performancechart data={performance} />
            <Scorechart data={user} />
          </div>
        </div>
        <div className="rightContainer">
          {Object.keys(user.keyData).map((key) => {
            return <Card key={key} Key={key} value={user.keyData[key]} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
