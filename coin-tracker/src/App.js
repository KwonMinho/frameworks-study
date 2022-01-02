import { useState, useEffect } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("http://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => setAmount(event.target.value);
  const selected = (event) => setIndex(event.target.selectedIndex);

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      your USD:
      <input
        type="number"
        onChange={onChange}
        placeholder="your money(USD)!"
      ></input>
      <p>coin: {loading ? amount : amount * coins[index].quotes.USD.price}</p>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <select onChange={selected}>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}):{coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
