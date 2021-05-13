import useStyles from "./style.jsx";

const TopSection = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.top}>Douglas Maxton</h1>
      <p className={classes.topP}>Full Stack MERN Developer</p>
    </div>
  );
};

export default TopSection;
