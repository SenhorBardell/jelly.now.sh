import React from "react";
import dom from "react-dom";
import Page from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  dom.render(<Page />, div);
  dom.unmountComponentAtNode(div);
});
