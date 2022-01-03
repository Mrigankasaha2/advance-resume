import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Sidebar />
        <ContentContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
