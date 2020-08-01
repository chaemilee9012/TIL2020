import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
// import WithRouterSample from './WithRouterSample';

const Profiles = () => {
  const activeStyle = {
    background: '#333',
    color: '#fff',
  };
  
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          {/* <Link to="/profiles/velopert">velopert</Link> */}
          <NavLink
            activeStyle={activeStyle}
            to="/profiles/velopert"
            active
          >
            velopert
          </NavLink>
        </li>
        <li>
          {/* <Link to="/profiles/gildong">gildong</Link> */}
          <NavLink
            activeStyle={activeStyle}
            to="/profiles/gildong"
          >
            gildong
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자 선택</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
      {/* <WithRouterSample /> */}
    </div>
  );
};

export default Profiles;