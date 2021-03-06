const ActionComponent = ({ href, className, text }) => {
  return (
    <a href={href} className={className}>
      {text}
    </a>
  );
};

export default ActionComponent;
