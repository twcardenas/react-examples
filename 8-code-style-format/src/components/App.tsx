// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css } from "@emotion/core";
import { useTheme } from "emotion-theming";
import { Trans, useTranslation, withTranslation } from "react-i18next";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import NavItem from "./Nav/NavItem";
import { Topics } from "./Topics/Topics";

export interface IAppProps {}

export function Topic() {
  const { topicId } = useParams<any>();
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
  const { t } = useTranslation();
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
  const { i18n } = useTranslation();

  const handleChange = (event: any) => changeLanguage(event.target.value);

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng)
    .then(() => console.log('this will succeed'));
    console.log('test')
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
