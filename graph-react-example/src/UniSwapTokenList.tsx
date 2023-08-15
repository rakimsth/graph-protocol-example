import { gql, useQuery } from "urql";

type TokenItems = {
  decimals: number;
  id: string;
  name: string;
  symbol: string;
};

export default function UniSwapTokenList() {
  const query = gql`
    query Tokens {
      tokens(first: 5) {
        id
        name
        symbol
        decimals
      }
    }
  `;
  const [result] = useQuery({ query });
  const { data, fetching, error } = result;
  return (
    <div>
      <h2>Uniswap Tokens Information</h2>
      {fetching && <p>Loading...</p>}

      {error && <p>Oh no... {error.message}</p>}
      {data?.tokens !== null &&
        data?.tokens.length > 0 &&
        data?.tokens.map((token: TokenItems) => {
          return (
            <div key={token.id}>
              <div>{token.id}</div>
              <div>{token.name}</div>
            </div>
          );
        })}
    </div>
  );
}
