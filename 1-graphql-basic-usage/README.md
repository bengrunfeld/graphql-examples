# GraphQL Example: 1 GraphQL Basic Usage 

In this example, we set up an client Express server and a GraphQL Express server. When we navigate to `localhost:3000`, the client app's `/` route is triggered, and a `POST` request containing a `query` is sent to the GraphQL Server (`locahost:4000`).

The GraphQL server interprets the query string, maps it to the correct reponse, and then sends that response back to the client app. When the client app receives this response, it calls a render, and uses EJS templates to inject the response data into the page. 

## How to run the example

In a terminal window:

    node src/js/app

In *another* terminal window: 

    node src/js/graphql-server.js

Then in your browser, navigate to `localhost:3000`. You should see "Hello from the GraphQL Server!" appear on the page, loaded by the EJS template.

