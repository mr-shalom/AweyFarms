import { Link } from "react-router-dom";

function Button({ className, type, to, children, onClick, isChecked }) {
  if (to && type === "link") {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <button
      onClick={onClick}
      className={className}
      type="submit"
      disabled={isChecked}
    >
      {children}
    </button>
  );
}

export default Button;
