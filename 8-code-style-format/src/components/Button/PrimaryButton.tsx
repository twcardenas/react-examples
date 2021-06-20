// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */

import styled from "@emotion/styled";
import { Button } from "./BaseButton";

export const PrimaryButton = styled(Button)`
  font-size: 20px;
  background-color: orange;
`;
