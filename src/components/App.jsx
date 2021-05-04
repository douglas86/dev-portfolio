// importing bootstrap styling
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

// import components into the app
import NavBar from "./Navbar.jsx";
import HomePage from "./HomePage.jsx";
import OnlineSites from "./Sections/OnlineSites.jsx";
import GithubProjects from "./Sections/githubProjects.jsx";
import Blog from "./Sections/Blog.jsx";
import Volunteer from "./Sections/Volunteer.jsx";
import Scripts from "./Sections/Scripts.jsx";

const App = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <HomePage />
        <OnlineSites />
        <GithubProjects />
        <Blog />
        <Volunteer />
        <Scripts />
      </Container>
    </div>
  );
};

export default App;
