import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="home-container">
        <h1 className="home-title">Home</h1>
        <h3 className="count-title">Count</h3>
        <div className="count-container">
          <div>
            <button onClick={() => setCount(count - 1)} className="decrement">
              -
            </button>
          </div>
          <div className="count"> {count} </div>
          <div>
            <button onClick={() => setCount(count + 1)} className="increment">
              {" "}
              +{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;