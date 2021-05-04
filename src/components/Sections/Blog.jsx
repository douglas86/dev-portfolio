import useStyles from "./style.jsx";

const Blog = () => {
  const classes = useStyles();
  return (
    <div id="blogs">
      <h1 className={classes.fonts}>Blogs:</h1>
    </div>
  );
};

export default Blog;
