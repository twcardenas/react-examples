// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

export interface FooterInput {
  children?: any;
}

export default function Footer({ children }: FooterInput) {
  return <footer>{children}</footer>;
}
