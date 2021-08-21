import "./App.css";

function App() {
  return (
    <main>
      <div class="marriage-bg first">
        <p class="txt-first">
          They are ready to tie the knot!
          <span className="arrow-down">&#5121;</span>
        </p>
      </div>
      <div class="marriage-bg second" id="std">
        <div class="std-content">
          <p class="names">
            <span>Haritha</span>
            <span> &</span> <span>Abhijith</span>
          </p>
          <p class="std-label">Save the date!</p>
          <p class="date">
            September 9<sup>th</sup>
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
