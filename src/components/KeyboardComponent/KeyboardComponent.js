import keys from "../../data/data";
import KeyComponent from "../KeyComponent/KeyComponent";

const KeyboardComponent = ({ action }) => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keys.map((key, position) => (
          <KeyComponent
            key={position}
            className={typeof key === "string" ? "key big " : "key"}
            action={action}
            text={key}
          />
        ))}
      </ol>
    </div>
  );
};

export default KeyboardComponent;
