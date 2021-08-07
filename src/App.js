import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListItem from './ListItem';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleItem = this.handleItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this)
    this.setUpdate = this.setUpdate.bind(this)
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter(i =>
      (i.key !== key))
    this.setState({ items: filteredItems });
  }
  setUpdate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }
  handleItem(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== '') {
      const newItems = [... this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter Text"
              value={this.state.currentItem.text}
              onChange={this.handleItem} />
            <button type="submit">Add</button>
          </form>
        </header>
        <ListItem deleteItem={this.deleteItem}
          items={this.state.items}
          setUpdate={this.setUpdate}></ListItem>
      </div>
    );
  }

}

export default App;
