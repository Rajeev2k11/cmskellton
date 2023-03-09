import React from "react";
import TextField from "@mui/material/TextField";

class EditDetails extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email, contact, address } =
      props.location.state.studentInfo;
    this.state = {
      id,
      name,
      email,
      contact,
      address,
    };
  }

  submitUpdate = (e) => {
    console.log(this.state);
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.contact === "" ||
      this.state.address === ""
    ) {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateList(this.state);
    this.setState({ name: "", email: "", contact: "", address: "" });
  };

  render() {
    return (
      <div className="ui main">
        <h2>Edit Student Data</h2>
        <form className="form" onSubmit={this.submitUpdate}>
          <div className="field">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="field">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={this.state.email}
              onChange={(e) => this.setState({  email: e.target.value })}
            />
          </div>
          <div className="field">
            <TextField
              id="outlined-basic"
              label="contact"
              variant="outlined"
              value={this.state.contact}
              onChange={(e) => this.setState({ contact: e.target.value })}
            />
          </div>
          <div className="field">
            <TextField
              id="outlined-basic"
              label="address"
              variant="outlined"
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </div>
          <button className="add">Update</button>
        </form>
      </div>
    );
  }
}

export default EditDetails;
