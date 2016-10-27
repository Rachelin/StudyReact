import React, {Component} from 'react';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {value: '', list: [{id:0, text:'hello'}]}
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    let list = this.state.list.slice();
    list.push(
      {id: this.state.list.length, text: this.state.value}
    )
    this.setState({list: list})
    this.setState({value: ''})
  }

  handleRemove(index) {
    let list = this.state.list.slice();
    list.splice(index, 1);
    this.setState({list: list})
  }

  render() {
    return (
      <div className="todoArea">
        <input className="addNewItem"
          placeholder="newItem"
          value={this.state.value}

          onChange={this.handleChange.bind(this)} />

          <button onClick={this.handleSubmit.bind(this)}>
            Submit
          </button>

          <div className="todoListArea">
            <TodoList
              list={this.state.list}
              onRemove={this.handleRemove.bind(this)}>
            </TodoList>
          </div>
        </div>
    );
  }
}

function TodoList({list, onRemove}) {
  const listItems = list.map((item, index) => (
    <li key={item.id}>
      {item.text}
      <button onClick={() => onRemove(index)}>X</button>
    </li>
  ))

  return (
    <ul>{listItems}</ul>
  );
}

export default Todo;
