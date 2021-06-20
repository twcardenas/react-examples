// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Topic } from "../App";

export function Topics() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div>
        <h2>Topics</h2>
      </div>
      <div
        css={{
          display: "flex",
        }}
      >
        <div
          css={{
            width: 350,
            background: "grey",
          }}
        >
          <ul>
            <li>
              <Link to={`${url}/foo`}>Foo</Link>
            </li>
            <li>
              <Link to={`${url}/bar`}>Bar</Link>
            </li>
            <li>
              <Link to={`${url}/bar`}>Bar-4</Link>
            </li>
            <li>
              <Link to={`${url}/baz`} data-testid="sub-baz-nav">
                Baz
              </Link>
            </li>
          </ul>
        </div>
        <div
          css={{
            background: "orange",
            width: "100%",
            marginLeft: 10,
          }}
        >
          <Switch>
            <Route exact path={path}>
              <h3>Please select a topic.</h3>
            </Route>
            <Route path={`${path}/:topicId`}>
              <Topic />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}
