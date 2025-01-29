import "./Toggler.css";

function Toggler({ active, onChoose }) {
  const handleClick = (event) => {
    onChoose(event.target.name);
  };

  return (
    <div className="page-toggler">
      <button
        className={`toggler-btn ${active === 1 ? "active" : ""}`}
        onClick={handleClick}
        name="list-of-fishes"
      >
        List of fishes
      </button>
      <button
        className={`toggler-btn ${active === 2 ? "active" : ""}`}
        onClick={handleClick}
        name="aquarium"
      >
        Akvarium
      </button>
    </div>
  );
}

export default Toggler;
