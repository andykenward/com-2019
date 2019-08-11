Site
- [andykenward.com](https://andykenward.com)
- [com-2019.andykenward.now.sh](https://com-2019.andykenward.now.sh)

Style Guide 
- [storybook.andykenward.com](https://andykenward.com/sb/)
- [com-2019-storybook.andykenward.now.sh](https://com-2019.andykenward.now.sh/sb/)

## 🚀 Development

1.  **Start local server**

    ```sh
    npm run start
    ```

    Site is now running at [`http://localhost:8000`](http://localhost:8000)

    _Note: You'll also see a second link: _[`http://localhost:8000/___graphql`](http://localhost:8000/___graphql)_. This is a tool you can use to experiment with querying your data._

1.  **Generate GraphQL Typings & Watch**

    Uses [GraphQL Code Generator](https://graphql-code-generator.com). **Must have local server running before this.**

    ```sh
    npm run generate:watch
    ```

1.  **Check TypeScript Typings & Watch**

    ```sh
    npm run type-check:watch
    ```

1.  **Start Storybook**

    ```sh
    npm run storybook
    ```

    Storybook is now running at [`http://localhost:6006`](http://localhost:6006)
