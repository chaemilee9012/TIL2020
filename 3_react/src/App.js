import React, { Component } from 'react';
// import EventPracticeClass from './2_velopert/EventPracticeClass';
// import EventPracticeFunc from './2_velopert/EventPracticeFunc';
// import ValidationSample from './2_velopert/ValidationSample';
// import ScrollBox from './2_velopert/ScrollBox';
import IterationSample from './2_velopert/IterationSample';
// import MyComponent from './2_velopert/MyComponent';
// import Counter from './2_velopert/Counter';
// import Say from './2_velopert/Say';

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

class App extends Component {
  render() {
    return (
    //   <ValidationSample />
      // <div>
      //   <ScrollBox
      //     ref={ref => this.scrollBox = ref}
      //   />
      //   <button
      //     onClick={() => this.scrollBox.ScrollToBottom()}
      //   >맨 밑으로</button>
      // </div>
      <IterationSample />
    );
  }
}

export default App;