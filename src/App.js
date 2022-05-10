import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => <h1>Home</h1>;

function App() {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
