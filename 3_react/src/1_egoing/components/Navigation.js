import React, { Component } from 'react';

class Navigation extends Component {
  shouldComponentUpdate(newProps) {
    console.log('shouldComponentUpdate');
    if(this.props.data === newProps.data) { // props 그대로일 때
      return false; // render 호출 안 함
    }
    return true; // props 바뀌면 render 호출
  }
  render() {
    console.log('render');
    
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={function(e) {
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >{data[i].title}</a>
        </li>);
      i = i + 1;
    }
    return(
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
}

export default Navigation;