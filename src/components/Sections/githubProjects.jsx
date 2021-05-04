import useStyles from "./style.jsx";

const GithubProjects = () => {
  const classes = useStyles();
  return (
    <div id="github sites" className={classes.githubProjects}>
      <h1 className={classes.fonts}>Github Projects:</h1>
      <a href="https://github.com/douglas86/login">
        Playground for getting creative
      </a>
      <br />
      <a href="https://github.com/douglas86/dual-api">
        Dual api drawing weather data and user information
      </a>
      <br />
      <a href="https://github.com/douglas86/memories">
        Full stack app using redux
      </a>
      <br />
      <a href="https://github.com/douglas86/food_app">
        An attempt at using Django with Python
      </a>
    </div>
  );
};

export default GithubProjects;
