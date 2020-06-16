import React, { Component } from "react";
import Subject from "./components/Subject";
import Navigation from "./components/Navigation";
import Contents from "./components/Contents";
import "./App.css";

// class Subject extends Component {
//   render() {
//     return (
//       <header>
//         {/* <h1>WEB</h1>
//         world wide web! */}
//         <h1>{this.props.title}</h1>
//         {this.props.sub}
//       </header>
//     );
//   }
// }

// class Navigation extends Component {
//   render() {
//     return(
//       <nav>
//         <ul>
//           <li><a href="1.html">HTML</a></li>
//           <li><a href="2.html">CSS</a></li>
//           <li><a href="3.html">JAVASCRIPT</a></li>
//         </ul>
//       </nav>
//     );
//   }
// }

// class Contents extends Component {
//   render() {
//     return (
//       <article>
//         {/* <h2>HTML</h2>
//         HTML is HyperText Markup Language. */}
//         <h2>{this.props.title}</h2>
//         {this.props.dscrt}
//       </article>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      // <div className="App">Hello, React!</div>
      <div className="App">
        {/* <Subject></Subject> */}
        <Subject title="WEB" sub="world wide web!"></Subject>
        {/* <Subject title="React" sub="For UI"></Subject> */}
        <Navigation></Navigation>
        <Contents title="HTML" dscrt="HTML is HyperText Markup Language."></Contents>
      </div>
    );
  }
}

export default App;