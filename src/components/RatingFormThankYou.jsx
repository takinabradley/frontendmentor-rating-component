import thankYouIllustration from "../assets/images/illustration-thank-you.svg";
import styles from "./RatingFormThankYou.module.css"
export default function RatingFormThankYou({ rating }) {
  const givenRatingMsg =
    rating === null
      ? "You declined to give a rating"
      : `You selected ${rating} out of 5`;

  const appreciationMsg =
    rating === null
      ? "We appreciate you taking the time."
      : "We appreciate you taking the time to give a rating.";

  return (
    <div className={styles["RatingFormThankYou"]} >
      <img src={thankYouIllustration} alt="" />

      <p className={styles["ratingMsg"]} >
        {givenRatingMsg}
      </p>

      <h1>Thank you!</h1>

      <p>
        {appreciationMsg} If you ever need more support, don’t hesitate to get
        in touch!
      </p>
    </div>
  );
}
