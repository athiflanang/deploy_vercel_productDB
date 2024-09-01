import { Link } from "react-router-dom";

export default function ButtonHomepage() {
  return (
    <>
      <Link to={"/"}>
        <button className="btn btn-outline">Back to Homepage</button>
      </Link>
    </>
  );
}
