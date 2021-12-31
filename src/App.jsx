import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <ContentContainer />
    </div>
  );
}

export default App;
