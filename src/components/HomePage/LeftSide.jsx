import useStyles from "./style.jsx";
import { Carousel } from "react-bootstrap";

const LeftSide = () => {
  const classes = useStyles();
  const quotes = [
    '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
    '"The way to get started is to quit talking and begin doing." -Walt Disney',
    `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." -Steve Jobs`,
  ];
  return (
    <div className={classes.right}>
      <h1 className={classes.leftHeading}>Famous Quotes!!</h1>
      <Carousel>
        {quotes.map((i, k) => (
          <Carousel.Item key={k}>
            <p>{i}</p>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default LeftSide;
