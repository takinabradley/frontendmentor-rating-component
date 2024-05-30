import { useState } from "react";
import styles from "./App.module.css";
import FrontendMentorAttributionFooter from "./components/Attribution";
import RatingForm from "./components/RatingForm";
import RatingFormThankYou from "./components/RatingFormThankYou";
import starIcon from "./assets/images/icon-star.svg";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const onRatingClick = (num) => {
    setRating((currentRating) => (num === currentRating ? null : num));
  };

  const requestRatingMessage = <>
    <img src={starIcon} alt="" className={styles["starIcon"]} />
    <h1>How did we do?</h1>
    <p>
      Please let us know how we did with your support request. All
      feedback is appreciated to help us improve our offering!
    </p>
  </>

  

  return (
    <div className={styles["App"]}>
      <main className={styles["main"]}>

      <div className={styles["card"]} aria-live="polite" >
          {submitted ? <RatingFormThankYou rating={rating} /> : requestRatingMessage }

          {submitted ? 
            null
            : 
            <RatingForm
              onSubmit={onSubmit}
              onRatingClick={onRatingClick}
              currentRating={rating}
            />
          }
        </div>
      </main>

      <FrontendMentorAttributionFooter
        name="takinabradley"
        socialMediaLink="https://github.com/takinabradley"
      />
    </div>
  );
}

export default App;
