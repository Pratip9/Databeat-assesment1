import $ from "jquery";
import React, { Component, createRef } from "react";

window.jQuery = $;
window.$ = $;

require("jquery-ui-sortable");
require("formBuilder");

document.body.style.margin = "30px";

class FormBuilder extends Component {
  fb = createRef();
  componentDidMount() {
    $(this.fb.current).formBuilder({});
  }

  render() {
    return <div ref={this.fb} />;
  }
}

function App() {
  return <FormBuilder />;
}

export default App;
