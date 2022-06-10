import Graphic from "../../components/graphic";
import { DashboardWrapper, GraphicsArea } from "./styled";

function Dashboard() {
  return (
    <DashboardWrapper>
      <header>
        <h1>Dashboard</h1>
        <h2>Desafio Técnico Frontend</h2>
      </header>

      <GraphicsArea>
        <Graphic />
        <div></div>
      </GraphicsArea>
    </DashboardWrapper>
  );
}

export default Dashboard;
