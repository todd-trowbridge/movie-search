import "../css/App.css";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Test from "./TestContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./SearchPage";
import Favorites from "./FavoritesPage";
import Nav from "./Nav";

function App() {
  return (
    <Router>
      <div className="App">
        {/* provider is used to pass store to child components */}
        <Provider store={store}>
          <Nav />
          {/* use dispatch hooks to pass state */}
          <Route exact path="/test">
            <Test />
          </Route>
          <Route exact path="/">
            <SearchPage />
          </Route>
          <Route exact path="/favorites">
            <Favorites />
          </Route>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
