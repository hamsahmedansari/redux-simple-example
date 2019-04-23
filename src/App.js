import React from "react";
import { Provider } from "react-redux";

import View from "./component/view";
import Input from "./component/input";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Input />
      <View />
    </Provider>
  );
}

export default App;
