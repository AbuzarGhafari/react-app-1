import "./App.css";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Videos</h1>
        <div className="videos-list">
          <Video
            title="Crypto Trading"
            image="https://www.forbes.com/advisor/wp-content/uploads/2021/11/best-crypto-exchange.jpeg"
            channel="Daily Programming"
            views="245k"
            time="1 year ago"
          ></Video>
          <Video
            title="Binance Trading"
            image="https://www.forbes.com/advisor/wp-content/uploads/2021/11/best-crypto-exchange.jpeg"
            channel="Daily Programming"
            views="245k"
            time="1 year ago"
          ></Video>
          <Video
            title="BTCUSDT Trading"
            image="https://www.forbes.com/advisor/wp-content/uploads/2021/11/best-crypto-exchange.jpeg"
            channel="Daily Programming"
            views="245k"
            time="1 year ago"
          ></Video>
          <Video
            title="BTCUSDT Trading"
            image="https://www.forbes.com/advisor/wp-content/uploads/2021/11/best-crypto-exchange.jpeg"
            channel="Daily Programming"
            views="245k"
            time="1 year ago"
          ></Video>
          <Video
            title="BTCUSDT Trading"
            image="https://www.forbes.com/advisor/wp-content/uploads/2021/11/best-crypto-exchange.jpeg"
            channel="Daily Programming"
            views="245k"
            time="1 year ago"
          ></Video>
          <Video
            title="BTCUSDT Trading"
            image="https://www.forbes.com/advisor/wp-content/uploads/2021/11/best-crypto-exchange.jpeg"
            channel="Daily Programming"
            views="245k"
            time="1 year ago"
          ></Video>
        </div>
      </div>
    </div>
  );
}

export default App;
