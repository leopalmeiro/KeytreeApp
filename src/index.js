import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "mobx-react";

//stores imports
import UserStore from "./stored/userstore";


ReactDOM.render(<Provider UserStore={new UserStore()}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();