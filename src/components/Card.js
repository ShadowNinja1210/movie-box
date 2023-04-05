import "../App.css";
import imbdLogo from "../assets/imdb_logo.png";

const cardClicked = () => {
  console.log("Card Clicked");
};

function Card(props) {
  const image = {
    backgroundImage: `url(${props.poster})`,
  };
  return (
    <button className="card" style={image} onClick={cardClicked}>
      <div className="card" style={image}>
        <div className="card-footer">
          <p className="card-title">{props.name}</p>
          <p className="card-rating">
            <img src={imbdLogo} width="30px" alt="imdb Logo" /> {props.rating} | {props.year} | {props.duration}
          </p>
        </div>
      </div>
    </button>
  );
}

export default Card;
