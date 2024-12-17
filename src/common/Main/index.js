import List from "./List";
import { skillsArray, learningGoalsArray } from "./List/data";

const Main = () => (
  <main>
    <List listHeader={"My skillset includes 🛠️"} content={skillsArray} />
    <List
      listHeader={"What I want to learn next 🚀"}
      content={learningGoalsArray}
    />
  </main>
);

export default Main;
