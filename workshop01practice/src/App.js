import logo from './logo.svg';
import './App.css';
import React from "react";
import Book from "./models/book";
import { BookList } from './components/booklist';
import { SectionList } from './components/sectionList';
import Footer from './components/footer';
import Timer from './components/timer';

const books = [
  new Book(10,"Algorithm", "20694",120, "Samuel"),
  new Book(20,"RDBMS", "90432",200,"sam"),
  new Book(30,"Nodejs", "80493",120,"Abagaz"),
  new Book(40,"Angular", "90320",250,"Eleni")
];
class App extends React.Component {
  state = {showBookList: true, showTimer: true};
  clickedButton = () => {
    this.setState({showBookList: !this.state.showBookList})
  };
  showHideTimer = () => {
    this.setState({showTimer: !this.state.showTimer})
  }

  render() {
    const clickMe = this.state.showBookList? "Show Section List": "Show Book List";
    return (
      <div className="App">
        {this.state.showBookList? <BookList books={books}/>: <SectionList books={books}/> }
        <button onClick={this.clickedButton}>{clickMe}</button>
        <hr />
        {this.state.showTimer && <Timer />}
        <button onClick={this.showHideTimer}>{this.state.showTimer? "Hide Timer": "Show Timer"}</button>

        <hr />
        <Footer />
      </div>
      );
    
  }
}


export default App;
