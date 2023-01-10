const More = ({ languages, abilities, volunteer }) => {
  return (
    <div className="more-card">
      <div>
        <p>{languages.language}</p>
        <p>{languages.wrlevel}</p>
        <p>{languages.splevel}</p>
      </div>

      <div key="">
        {abilities.map((ability) => {
          return <p>Abilities: {ability}</p>;
        })}
      </div>

      <div key="">
        {volunteer.map((item) => {
          return (
            <div>
              <p>Volunteer:</p>
              <p>{volunteer.name}</p>
              <p>Where: {volunteer.where}</p>
              <p>Description: {volunteer.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default More;
