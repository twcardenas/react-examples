// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from "@emotion/core";

export interface AnchorInput {
  css?: any;
  children?: any;
}

export function Anchor({ css = {}, children }: AnchorInput) {
  return <a style={css}>{children}</a>;
}
