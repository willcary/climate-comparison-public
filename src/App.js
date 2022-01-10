import React, { useContext } from 'react';

import { Context } from "./Context.js"
import Form from "./components/Form.js"
import Header from "./components/Header.js"
import Results from "./components/Results.js"
import Footer from "./components/Footer.js"

function App() {
  const { theme, error } = useContext(Context)

  return (
    <div className={theme === 'dark' ? 'container container-dark' : 'container'}>
      <Header />
      <Form />
      {error ? <div><h4>We had trouble loading the Data. Sorry for the inconvenience.</h4><p>Error message: {error}.</p></div> : undefined}
      <Results />
      <Footer />
    </div>
  );
}

export default App;
