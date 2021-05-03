// grid imports
import { Container, Row, Col } from "react-bootstrap";

// styling for component
import useStyles from "./style.jsx";

// Splitting page to left and right
import LeftSide from "./HomePage/LeftSide";
import RightSide from "./HomePage/RightSide";

const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Container>
        <Row>
          <Col lg={7}>
            <LeftSide />
          </Col>
          <Col lg={5}>
            <RightSide />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
