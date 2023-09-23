import logo from './logo.svg';
import './App.css';
import React from "react"
import Book from './models/book';
import BookList from './components/booklist';
import SectionList from './components/sectionlist';

let books = [
  new Book("Algorithms", "Samuel", 300, "20290", 1),
  new Book("Nodejs", "Tumdedo", 200, "80240", 2),
  new Book("Reactjs", "Desalegn", 300, "30689", 3),
  new Book("Angularjs", "Elsa", 250, "40900", 4),
  new Book("Cloud Computing", "Helen", 300, "20080", 5)
]

class App extends React.Component {
  state = {showBookList: true};
  action = () => {
    this.setState({showBookList: !this.state.showBookList});
  }
  render() {
    return (
      <div className="App">
        {
          this.state.showBookList? <BookList books={books} /> :  <SectionList books={books} />
        }
        
       
        <button onClick={this.action}>{this.state.showBookList? "Show Section List": "Show Book List"}</button>
      </div>
        
    );
  }
}


export default App;
