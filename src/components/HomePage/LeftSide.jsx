import useStyles from "./style.jsx";

const LeftSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.right}>
      <h1 className={classes.leftHeading}>About Me!!</h1>
      <p>
        A highly competent and creative web developer with a variety of exciting
        personal projects. A level head and an array of technical abilities has
        led me to become a critical, problem solver with a portfolio of
        impressive web solutions. Technically competent and industry aware means
        that each project is undertaken with the most up-to-date and relevant
        programming foundations available. A strong communicator with a
        background in a broad range of technical fields has led me to gain the
        abilities to convey ideas clearly with a special emphasis on client
        satisfaction.
      </p>
    </div>
  );
};

export default LeftSide;
