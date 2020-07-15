import React, { Component } from 'react';
// import EventPracticeClass from './2_velopert/EventPracticeClass';
// import EventPracticeFunc from './2_velopert/EventPracticeFunc';
// import ValidationSample from './2_velopert/ValidationSample';
// import ScrollBox from './2_velopert/ScrollBox';
// import IterationSample from './2_velopert/IterationSample';
// import Info from './2_velopert/Info';
// import CounterReducer from './2_velopert/CounterReducer';
// import AverageMemo from './2_velopert/AverageMemo';
// import MyComponent from './2_velopert/MyComponent';
// import Counter from './2_velopert/Counter';
// import Say from './2_velopert/Say';
import LifecycleSample from './2_velopert/LifecycleSample';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifecycleSample color={this.state.color} />
      </div>
    );
  }
}

// function App() {
//   return(
//     <>
//       {/* <MyComponent /> */}
//       {/* <MyComponent
//         name="React"
//         favoriteNumber={1}
//       >리액트</MyComponent> */}
//       {/* <Counter /> */}
//       {/* <Say /> */}
//       {/* <EventPracticeClass /> */}
//       {/* <EventPracticeFunc /> */}
//       <ValidationSample />
//     </>
//   );
// }

// class App extends Component {
//   render() {
//     return (
//     //   <ValidationSample />
//       // <div>
//       //   <ScrollBox
//       //     ref={ref => this.scrollBox = ref}
//       //   />
//       //   <button
//       //     onClick={() => this.scrollBox.ScrollToBottom()}
//       //   >맨 밑으로</button>
//       // </div>
//       // <IterationSample />
//       // <Info />
//       // <CounterReducer />
//       // <AverageMemo />
//       <LifeCycleSample />
//     );
//   }
// }

export default App;