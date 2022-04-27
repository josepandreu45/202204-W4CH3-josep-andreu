import KeyboardComponent from "./components/KeyboardComponent/KeyboardComponent";
function App() {
  return (
    <div className="container">
      <span className="message"></span>
      <main className="phone">
        <KeyboardComponent />
        <div className="actions">
          <span className="number">667359961</span>
        </div>
      </main>
    </div>
  );
}

export default App;
