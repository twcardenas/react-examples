# Basic Typescript React App

## steps

1. npm init -y
2. yarn add react react-dom
3. yarn add -D awesome-typescript-loader @types/react @types/react-dom html-webpack-plugin @types/html-webpack-plugin typescript webpack webpack-cli @types/webpack webpack-dev-server ts-node
4. mkdir src && cd src && touch index.tsx && touch index.html && mkdir components && cd components && touch App.tsx && cd ../..

It is for sure possible to add the configuration for both development and production in one file but for readability purposes and to keep the concerns separate I like to create two files.

5. touch webpack.dev.ts
6. touch webpack.prod.ts

# References

- https://github.com/kevinegstorf/react-from-scratch
- https://medium.com/@kevinegstorf/react-with-typescript-from-scratch-3c6493900244
