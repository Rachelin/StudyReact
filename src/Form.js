import React, {Component} from 'react';

class From extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    // this.setState({value: event.target.value});
    this.setState({value: event.target.value.substr(0, 10)});
  }

  handleSubmit(event) {
    alert('Text field value is:"' + this.state.value + '"');
  }

  render() {
    return (
      <div>
        <input type="text"
        placeholder="hellp!"
        value={this.state.value}
        onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default From
