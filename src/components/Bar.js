import React from "react";
import { Progress } from "semantic-ui-react";

const Bar = props => <Progress progress="value" value={props.value} />;

export default Bar;
