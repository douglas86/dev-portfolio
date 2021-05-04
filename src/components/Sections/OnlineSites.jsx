import useStyles from "./style.jsx";

const OnlineSites = () => {
  const classes = useStyles();
  return (
    <div className={classes.onlineSites} id="Online sites">
      <h1 className={classes.fonts}>Online Sites:</h1>
    </div>
  );
};

export default OnlineSites;
