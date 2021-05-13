import useStyles from "./style.jsx";

const Volunteer = () => {
  const classes = useStyles();
  return (
    <div id="volunteer" className={classes.volunteer}>
      <h1 className={classes.fonts}>Volunteer:</h1>
      <a href="https://codeyourfuture.io/" target="_blank" rel="noreferrer">
        Code Your Future
      </a>
      <br />
      <p>
        At code your future they gave me an opportunity to become an edu Buddy
        mentor, to help out those that are stuggling with programming
      </p>
    </div>
  );
};

export default Volunteer;
