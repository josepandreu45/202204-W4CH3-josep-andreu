import KeyComponent from "./components/KeyComponent/KeyComponent";

function App() {
  return (
    <div className="container">
      <div className="keyboard-container">
        <ol className="keyboard">
          <KeyComponent className={"key"} text={"1"} />
        </ol>
      </div>
    </div>
  );
}

export default App;
