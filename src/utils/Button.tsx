export default function Button(props: buttonProps) {
  return (
    <button
      type={props.type}
      className="btn btn-primary btn-lg"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

interface buttonProps {
  children: React.ReactNode;
  onClick?(): void;
  type: "button" | "submit";
}

//Sets the default type
Button.defaultProps = {
  type: "button",
};
