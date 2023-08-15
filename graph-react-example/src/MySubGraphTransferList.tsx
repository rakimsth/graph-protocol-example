import { gql, useQuery } from "urql";

type TransferEventsItem = {
  id: string;
  from: string;
  to: string;
  amount: string;
  blockNumber: string;
  transactionHash: string;
  blockTimestamp: string;
};

export default function MySubGraphTransferList() {
  const query = gql`
    query transferEvents {
      transferEvents(first: 50) {
        id
        from
        to
        amount
        blockNumber
        transactionHash
        blockTimestamp
      }
    }
  `;
  const [result] = useQuery({ query });
  const { data, fetching, error } = result;
  return (
    <div>
      <h2>Transfer Event Information</h2>
      {fetching && <p>Loading...</p>}

      {error && <p>Oh no... {error.message}</p>}

      <table>
        <tr>
          <th>ID</th>
          <th>From</th>
          <th>To</th>
          <th>Amount</th>
          <th>Block Number</th>
          <th>Transaction Hash</th>
          <th>Block TimeStamp</th>
        </tr>
        {data?.transferEvents !== null &&
          data?.transferEvents.length > 0 &&
          data?.transferEvents.map((item: TransferEventsItem) => {
            return (
              <tr key={item?.id}>
                <td>{item?.id}</td>
                <td>{item?.from}</td>
                <td>{item?.to}</td>
                <td>{item?.amount}</td>
                <td>{item?.blockNumber}</td>
                <td>{item?.transactionHash}</td>
                <td>{item?.blockTimestamp}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}
