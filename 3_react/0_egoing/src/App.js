import React, { Component } from "react";
import Subject from "./components/Subject";
import Navigation from "./components/Navigation";
import Control from "./components/Control";
import ReadContents from "./components/ReadContents";
import CreateContents from "./components/CreateContents";
import UpdateContents from "./components/UpdateContents";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_contents_id = 3;
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
    };
  }

  getReadContents() {
    var i = 0;
    while(i < this.state.contents.length) {
      var data = this.state.contents[i];
      if(data.id === this.state.selectedId) {
        return data;
        // break;
      }
      i = i + 1;
    }
  }

  getContents() {
    var _title, _dscrt, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _dscrt = this.state.welcome.dscrt;
      _article = <ReadContents title={_title} dscrt={_dscrt}></ReadContents>;
    } else if(this.state.mode === 'read') {
      var _content = this.getReadContents();
      _article = <ReadContents title={_content.title} dscrt={_content.dscrt}></ReadContents>;
    } else if(this.state.mode === 'create') {
      _article = <CreateContents onSubmit={function(_title, _dscrt) {
        this.max_contents_id++;
        // this.state.contents.push({id: this.max_contents_id, title: _title, dscrt: _dscrt});
        // var _contents = this.state.contents.concat(
        //   {id: this.max_contents_id, title: _title, dscrt: _dscrt}
        // );
        var newContents = Array.from(this.state.contents);
        newContents.push({id: this.max_contents_id, title: _title, dscrt: _dscrt});
        this.setState({
          contents: newContents,
          mode: 'read',
          selectedId: this.max_contents_id
        });
      }.bind(this)}></CreateContents>
    } else if(this.state.mode === 'update') {
      _content = this.getReadContents();
      _article = <UpdateContents
        data={_content}
        onSubmit={function(_id, _title, _dscrt) {
          var newContents = Array.from(this.state.contents);
          var i = 0;
          while(i < newContents.length) {
            if(newContents[i].id === _id) {
              newContents[i] = {
                id: _id,
                title: _title,
                dscrt: _dscrt
              };
              break;
            }
            i++;
          }
          this.setState({
            contents: newContents,
            mode: 'read'
          });
        }.bind(this)}></UpdateContents>
    }
    return _article;
  }
  
  render() {
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
        <Control
          onChangeMode={function(_mode) {
            if(_mode === 'delete') {
              if(window.confirm('really?')) {
                var _contents = Array.from(this.state.contents);
                for(var i = 0; i < this.state.contents.length; i++) {
                  if(_contents[i].id === this.state.selectedId) {
                    _contents.splice(i, 1);
                    break;
                  }
                }
                this.setState({
                  mode: 'welcome',
                  contents: _contents
                });
                alert('deleted');
              }
            } else {  
              this.setState({
                mode: _mode
              });
            }
          }.bind(this)}
        ></Control>
        {this.getContents()}
      </div>
    );
  }
}

export default App;