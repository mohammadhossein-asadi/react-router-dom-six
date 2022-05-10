import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const Blog = () => <h1>Blog</h1>;
const About = () => <h1>About</h1>;

const Nav = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/blog">Blog</Link>
    </li>
    <li>
      <Link
        to={{
          pathname: "/about",
        }}
        replace
        title="About us!"
      >
        About
      </Link>
    </li>
  </ul>
);

function App() {
  return (
    <Router>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/about" component={About} />
      {/* <Route strict path="/blog/" component={Blog} /> */}
      {/* <Route path="/blog" render={() => <h1>Blog</h1>} /> */}
      {/* <Route path="/blog" children={({ match }) => match && <h1>Blog</h1>} />*/}
    </Router>
  );
}

export default App;
