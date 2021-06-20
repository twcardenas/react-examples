// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

export interface BaseButtonInput {
  children?: any;
}

export const Button = styled.button({ backgroundColor: "yellow" });

export default function BaseButton({ children }: BaseButtonInput) {
  return <Button>{children}</Button>;
}
