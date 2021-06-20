// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */


export interface NavInput {
  children?: any;
}

export default function Nav({ children }: NavInput) {
  return (
    <nav
      css={{
        backgroundColor: "#2b2c2d",
        height: 44,
        display: "flex",
      }}
    >
      <ul
        css={{
          margin: "auto 10px",
          display: "flex",
          listStyle: "none",
        }}
      >
        {children}
      </ul>
    </nav>
  );
}
