import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './2_velopert/router_tutorial/Home';
import About from './2_velopert/router_tutorial/About';
// import Profile from './2_velopert/router_tutorial/Profile';
import Profiles from './2_velopert/router_tutorial/Profiles';
import HistorySample from './2_velopert/router_tutorial/HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        {/* <li>
          <Link to="/profile/velopert">velopert 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">홍길동 프로필</Link>
        </li> */}
        <li>
          <Link to="/history">히스토리 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={['/about', '/info']} component={About} />
        <Route path="/profiles" component={Profiles} />
        {/* <Route path="/profile/:username" component={Profile} /> */}
        <Route path="/history" component={HistorySample} />
        <Route // path 정의하지 않으면 모든 상황에 렌더링됨
          render={({ location }) => (
            <div>
              <h2>존재하지 않는 페이지:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;