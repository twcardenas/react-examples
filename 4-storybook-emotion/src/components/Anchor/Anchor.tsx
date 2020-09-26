import * as React from "react";

export interface AnchorInput {
  css?: any;
  children?: any;
}

export function Anchor({ css = {}, children }: AnchorInput) {
  return <a style={css}>{children}</a>;
}
