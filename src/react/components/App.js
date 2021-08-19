import React from 'react'
import "../css/App.css";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import TestContainer from './TestContainer';

function App() {
  return (
    <div className="App">
      {/* provider is used to pass store to child components */}
      <Provider store={store}>
        {/* use dispatch hooks to pass state */}
        <TestContainer />
      </Provider>
    </div>
  );
}

export default App;
