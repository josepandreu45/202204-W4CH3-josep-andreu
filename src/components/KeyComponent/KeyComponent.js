const KeyComponent = ({ className, action, text }) => {
  return (
    <li>
      <button className={className} onClick={action}>
        {text}
      </button>
    </li>
  );
};

export default KeyComponent;
