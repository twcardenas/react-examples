// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
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
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { useTheme } from "emotion-theming";
import Nav from "./Nav/Nav";
import NavItem from "./Nav/NavItem";
import Footer from "./Footer/Footer";
import { useState } from "react";
import { Topics } from "./Topics/Topics";

export interface IAppProps {}

export function Topic() {
  let { topicId } = useParams<any>();
  return (
    <div>
      <h3>{topicId} topic</h3>
    </div>
  );
}

export default function App(props: IAppProps) {
  return (
    <Router>
      <Nav>
        <NavItem>
          <Link
            to="/"
            data-testid="home-nav"
            css={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to="/topics"
            data-testid="topic-nav"
            css={{
              paddingLeft: 5,
              color: "white",
              textDecoration: "none",
            }}
          >
            Topics
          </Link>
        </NavItem>
        <hr />
      </Nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/topics">
          <Topics />
        </Route>
      </Switch>
      <Footer>
        <ChangeLang />
      </Footer>
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
  const theme = useTheme<any>();
  return (
    <div
      css={css`
        padding: 50px 0;
        background-color: ${theme.background};
        color: ${theme.text};
        text-align: center;
        transition-duration: 0.2s;
        transition-property: background-color, color;
      `}
    >
      <Trans i18nKey="description.part1">
        To get started, edit <code>src/App.js</code> and save to reload.
      </Trans>
    </div>
  );
}

function ChangeLang() {
  const { t, i18n } = useTranslation();

  const handleChange = (event: any) => changeLanguage(event.target.value);

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select value={i18n.language} onChange={handleChange}>
      <option value={"en"}>English</option>
      <option value={"de"}>German</option>
    </select>
  );
}

function Home() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <div className="App-header">
        <Welcome />
      </div>
      <div className="App-intro">
        <MyComponent />
      </div>
      <div>{t("description.part2")}</div>
    </div>
  );
}
