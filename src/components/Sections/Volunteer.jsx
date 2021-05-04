import useStyles from "./style.jsx";

const Volunteer = () => {
  const classes = useStyles();
  return (
    <div id="volunteer">
      <h1 className={classes.fonts}>Volunteer:</h1>
      <a href="https://codeyourfuture.io/">Code Your Future</a>
    </div>
  );
};

export default Volunteer;
