import KeyboardComponent from "./components/KeyboardComponent/KeyboardComponent";
import ActionsComponent from "./components/ActionsComponent/ActionsComponent";
import Display from "./components/DisplayComponent/DisplayComponent";
function App() {
  return (
    <div className="container">
      <span className="message"></span>
      <main className="phone">
        <KeyboardComponent />
        <div className="actions">
          <Display numbers={16546} />
          <ActionsComponent />
        </div>
      </main>
    </div>
  );
}

export default App;
