import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { useTranslation, withTranslation, Trans } from "react-i18next";

export interface IAppProps {}

export function Topic() {
  let { topicId } = useParams<any>();
  return (
    <div>
      <h3>{topicId} topic</h3>
    </div>
  );
}

export function Topics() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/foo`}>Foo</Link>
        </li>
        <li>
          <Link to={`${url}/bar`}>Bar</Link>
        </li>
        <li>
          <Link to={`${url}/baz`} data-testid="sub-baz-nav">
            Baz
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

export default function App(props: IAppProps) {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/" data-testid="home-nav">
              Home
            </Link>
          </li>
          <li>
            <Link to="/topics" data-testid="topic-nav">
              Topics
            </Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// use hoc for class based components
function LegacyWelcomeClass() {
  const { t, i18n } = useTranslation();
  return <h2>{t("title")}</h2>;
}
const Welcome = withTranslation()(LegacyWelcomeClass);

// Component using the Trans component
function MyComponent() {
  return (
    <Trans i18nKey="description.part1">
      To get started, edit <code>src/App.js</code> and save to reload.
    </Trans>
  );
}

function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <div className="App-header">
        <Welcome />
        <button onClick={() => changeLanguage("de")}>de</button>
        <button onClick={() => changeLanguage("en")}>en</button>
      </div>
      <div className="App-intro">
        <MyComponent />
      </div>
      <div>{t("description.part2")}</div>
    </div>
  );
}
