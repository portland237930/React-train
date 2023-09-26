import logo from "./logo.svg";
import "./App.css";
import { ToolBar } from "./components/Button";
import { Profile } from "./components/Profile";
import { Gallery } from "./components/Gallery";
// import { Form } from "./components/Form";
import { BucketList } from "./components/articleList";
import { ImmerForm } from "./components/Form/ImmerForm.js";
import { TravelPlan } from "./components/planets";
let OnPlayVideo = () => {
  s;
  console.log("OnPlayVideo");
};
let OnPlayMovie = () => {
  console.log("OnPlayMovie");
};
let onClickToolBar = (e) => {
  alert("onClickToolBar");
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ImmerForm />
        <TravelPlan />
        <Gallery />
        <BucketList />
        <ToolBar
          onClickToolBar={onClickToolBar}
          OnPlayVideo={OnPlayVideo}
          OnPlayMovie={OnPlayMovie}
        />{" "}
        <Profile isAvatar={true} />{" "}
        <p>
          Edit <code> src / App.js </code> and save to reload.{" "}
        </p>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
