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

const Index = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <App />
    </React.Suspense>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
