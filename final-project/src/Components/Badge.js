function Badge({ teams }) {
  return (
    <div>
      {teams &&
        teams.map((teams, index) => {
          return (
            <span key={index} className="badge bg-primary m-1">
              {teams}
            </span>
          );
        })}
    </div>
  );
}

export default Badge;