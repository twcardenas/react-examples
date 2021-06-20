import { css, Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import "./i18n";

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

const themeLight = {
  text: "#000",
  background: "#fff",
  buttonText: "#000",
  buttonTextHover: "#fff",
  buttonBorder: "#000",
  buttonBg: "rgba(0, 0, 0, 0)",
  buttonBgHover: "rgba(0, 0, 0, 1)",
};

const themeDark = {
  text: "#fff",
  background: "#121212",
  buttonText: "#fff",
  buttonTextHover: "#000",
  buttonBorder: "#fff",
  buttonBg: "rgba(255, 255, 255, 0)",
  buttonBgHover: "rgba(255, 255, 255, 1)",
};

const themeSolarize = {
  text: "yellow",
  background: "green",
  buttonText: "v",
  buttonTextHover: "#000",
  buttonBorder: "yellow",
  buttonBg: "rgba(255, 255, 255, 0)",
  buttonBgHover: "rgba(255, 255, 255, 1)",
};

const themes = [themeLight, themeDark, themeSolarize];

const Index = () => {
  const [isDark, setIsDark] = React.useState(
    //window.matchMedia("(prefers-color-scheme: dark)").matches
    2
  );

  const handleChange = (event: any) => setIsDark(event.target.value);

  return (
    <React.Fragment>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
          }
        `}
      />
      <ThemeProvider theme={themes[isDark]}>
        <React.Suspense fallback={<Loader />}>
          <App />
        </React.Suspense>
      </ThemeProvider>
      <select value={isDark} onChange={handleChange}>
        <option value={1}>Dark</option>
        <option value={0}>Light</option>
        <option selected value={2}>
          Solarize
        </option>
      </select>
    </React.Fragment>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
