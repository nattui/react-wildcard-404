import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";


const Home = lazy(() => import('./pages/Home'));
const NoMatch = lazy(() => import('./pages/NotFound'));


export default function NoMatchExample() {
  return (
    <Suspense fallback={null}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/old-match">Old Match, to be redirected</Link>
            </li>
            <li>
              <Link to="/will-match">Will Match</Link>
            </li>
            <li>
              <Link to="/will-not-match">Will Not Match</Link>
            </li>
            <li>
              <Link to="/also/will/not/match">Also Will Not Match</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/old-match"><Redirect to="/will-match" /></Route>
            <Route path="/will-match"><WillMatch /></Route>
            <Route path="*"><NoMatch /></Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}

function WillMatch() {
  return <h3>Matched!</h3>;
}
