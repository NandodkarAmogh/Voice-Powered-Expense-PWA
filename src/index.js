import React from "react";
import ReactDOM from 'react-dom';
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from './App';
import './index.css';


ReactDOM.render(
    <SpeechProvider appId="4bccb007-2a2a-4f7c-9d3a-575db953ff59" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
 );
