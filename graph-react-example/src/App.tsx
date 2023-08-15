import "./App.css";
import { cacheExchange, Client, fetchExchange, Provider } from "urql";

import UniSwapTokenList from "./UniSwapTokenList";
import MySubGraphTransferList from "./MySubGraphTransferList";

function App() {
  const apiKey = "08f9ad14d0cdff91f67dd3bb4c89e42f";
  const QueryURL = `https://gateway.thegraph.com/api/${apiKey}/subgraphs/id/8sE6rTNkPhzZXZC6c8UQy2ghFTu5PPdGauwUBm4t7HZ1`;

  const client = new Client({
    url: QueryURL,
    exchanges: [cacheExchange, fetchExchange],
  });

  return (
    <>
      <Provider value={client}>
        <div></div>
        <h1>The Graph Data</h1>
        <UniSwapTokenList />
        <MySubGraphTransferList />
      </Provider>
    </>
  );
}

export default App;
