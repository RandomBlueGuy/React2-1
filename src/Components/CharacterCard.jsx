import "./styles.css";

const CharacterCard = (props) => {
  return (<article className="characterCard">
    <div className="characterImagen">
      <img
        src = {props.image}
        alt = {props.name}
      />
    </div>
    <div className="characterContent">

      <div className="section">
        <h2>{props.name}</h2>
        <span className="status">
          <span className = {`status__icon status__${props.status.toLowerCase()}`}></span>
            {props.status} - {props.species}
        </span>
      </div>

      <div className="section">
        <span className="data-card"></span>
        <span className="data-card">Origin: <span className="data-answer">{props.lastLocation.name}</span></span>
      </div>

      <div className="section">
        <span className="data-card">Last known location: <span className="data-answer">{props.lastLocation.name}</span></span>
      </div>
      <div className="section">
        <span className="data-card">First seen in:</span>
        <a href= {props.episode}>{props.episode}</a>
      </div>
    </div>
  </article>)
};

export default CharacterCard;
