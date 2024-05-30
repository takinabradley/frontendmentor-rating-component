import style from "./RatingForm.module.css"

export default function RatingForm({
  onSubmit,
  onRatingClick,
  currentRating,
  errorMsg = null,
}) {
  const onRadioButtonClick = (e) => {

      e.target.checked = e.target.value === currentRating ? false : true
      onRatingClick(e.target.value)
  };

  return (
    <form onSubmit={onSubmit} className={style["RatingForm"]}>
      <div className={style["buttons"]} >
        <label>
          1
          <input type="radio" name="rating" value={1} onClick={onRadioButtonClick} className="visually-hidden-always"/>
        </label>
        <label>
          2
          <input type="radio" name="rating" value={2} onClick={onRadioButtonClick} className="visually-hidden-always"/>
        </label>
        <label>
          3
          <input type="radio" name="rating" value={3} onClick={onRadioButtonClick} className="visually-hidden-always"/>
        </label>
        <label>
          4
          <input type="radio" name="rating" value={4} onClick={onRadioButtonClick} className="visually-hidden-always"/>
        </label>
        <label>
          5
          <input type="radio" name="rating" value={5} onClick={onRadioButtonClick} className="visually-hidden-always"/>
        </label>
      </div>

      <div className={style["submitBtnContainer"]}>
        <button type="submit" className={style["submitBtn"]}>submit</button>
      </div>
    </form>
  );
}