function Form({ addNewUser }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("exampleInputEmail");
    console.log("handle", emailInput.value);
    let newUser = {
      name: emailInput.value,
      avatar: "",
      phone: "555-555-5555",
      teams: ["Bruner", "Letcher"],
    };
    addNewUser(newUser);
  };
  return (
    <div className="row">
      <div className="col">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Coach Name</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="text"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;