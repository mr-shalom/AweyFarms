import { Link } from "react-router-dom";

function Socials({ list, rule }) {
  return (
    <ul className={list}>
      <li>
        <Link to="https://facebook.com">Facebook</Link>
      </li>
      <span className="max-h-max w-[1px] bg-logo block"></span>
      <li>
        <Link to="https://x.com">Twitter</Link>
      </li>
      <span className={rule}></span>
      <li>
        <Link to="https://instagram.com">Instagram</Link>
      </li>
    </ul>
  );
}

export default Socials;
