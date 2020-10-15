# Snapshot testing

## Has the output of a component changed?

```
import React from "react";
import { create } from "react-test-renderer";
import App from "./App";

test("renders correctly", () => {
  const app = create(<App />);
  expect(app.toJSON()).toMatchSnapshot();
});
```
