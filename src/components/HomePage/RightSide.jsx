import useStyles from "./style.jsx";
import main from "../../images/main.jpg";

const RightSide = () => {
  const classes = useStyles();
  return (
    <div className={classes.right}>
      <img className={classes.rightImg} src={main} alt="main" />
    </div>
  );
};

export default RightSide;
