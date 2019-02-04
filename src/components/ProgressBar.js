import React from "react";
import { Progress } from "semantic-ui-react";

const ProgressBar = props => (
  <Progress percent={props.percent} color={props.color} progress />
);

export default ProgressBar;
