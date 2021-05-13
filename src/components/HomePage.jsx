// grid imports
import { Row, Col } from "react-bootstrap";

// styling for component
import useStyles from "./style.jsx";

import TopSection from "./HomePage/TopSection.jsx";

// Splitting page to left and right
import LeftSide from "./HomePage/LeftSide";
import RightSide from "./HomePage/RightSide";

const HomePage = () => {
  const classes = useStyles();
  return (
    <div id="home" className={classes.home}>
      <TopSection />
      <Row>
        <Col lg={7}>
          <LeftSide />
        </Col>
        <Col lg={5}>
          <RightSide />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
