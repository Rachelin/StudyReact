import React, {Component} from 'react';

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {value: "", list: ['1','2','3']}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    this.setState(prevState => {
      list: this.state.list.push(this.state.value)
    })
    this.setState({value: ''})
  }

  handleRemove(event) {
    let item = event.target.getAttribute('data-item')
    let list = this.state.list.slice();
    if(list.includes(item)) {
      list.splice(list.indexOf(item), 1);
    }
    this.setState({list: list})
  }

  render() {
    return (
      <div className="todoArea">
        <input className="addNewItem"
          placeholder="newItem"
          value={this.state.value}

          onChange={this.handleChange} />

          <button onClick={this.handleSubmit}>
            Submit
          </button>

          <div className="todoListArea">
            <TodoList list={this.state.list} onRemove={this.handleRemove}/>
          </div>
        </div>
    );
  }
}

function TodoList(props) {
  const items = props.list
  const handleRemove = props.onRemove
  const listItems = items.map((item) => (
    <li key={item.toString()}>
      {item}
      <button onClick={handleRemove} data-item={item}>X</button>
    </li>
  ))

  return (
    <ul>{listItems}</ul>
  );
}

export default Todo;
