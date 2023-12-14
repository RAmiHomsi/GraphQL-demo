import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import DisplayData from "./displayData";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div className="app">
        <DisplayData />
      </div>
    </ApolloProvider>
  );
}

export default App;
