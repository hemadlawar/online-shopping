import Navigation from "./components/navigation";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Router>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
