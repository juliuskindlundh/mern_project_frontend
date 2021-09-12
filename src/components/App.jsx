import React from 'react';
import CRUDInterface from "./CRUDInterface";
import ContentView from "./ContentView";
import {ContextProvider} from "../Context";

function App() {
  return (
    <ContextProvider>
      <div>
        <h3>Kontaktuppgifter</h3>
        <CRUDInterface/>
        <ContentView/>
      </div>
    </ContextProvider>
  );
}

export default App;
