import React, { Component } from "react";
import Subject from "./components/Subject";
import Navigation from "./components/Navigation";
import Contents from "./components/Contents";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'welcome',
      selectedId: 2,
      welcome: {title: 'Welcome', dscrt: 'Hello, React!'},
      subject: {title: 'WEB', sub: 'world wide web!'},
      contents: [
        {id: 1, title: 'HTML', dscrt: 'HTML is HyperText...'},
        {id: 2, title: 'CSS', dscrt: 'CSS is Cascading...'},
        {id: 3, title: 'Javascript', dscrt: 'Javascript is...'}
      ],
    }
  }
  
  render() {
    var _title, _dscrt = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _dscrt = this.state.welcome.dscrt;
    } else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selectedId) {
          _title = data.title;
          _dscrt = data.dscrt;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({mode: 'welcome'});
          }.bind(this)}
        ></Subject>
        <Navigation
          data={this.state.contents}
          onChangePage={function(id) {
            this.setState({
              mode: 'read',
              selectedId: parseInt(id)});
          }.bind(this)}
        ></Navigation>
        <Contents title={_title} dscrt={_dscrt}></Contents>
      </div>
    );
  }
}

export default App;