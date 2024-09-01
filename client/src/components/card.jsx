import { useNavigate } from "react-router-dom";

export default function Card({ product }) {
  const navigate = useNavigate();

  async function redirectDetailProductById(id) {
    navigate(`detail/${id}`);
  }
  return (
    <>
      <div className="card bg-slate-900 w-96 shadow-xl">
        <figure>
          <img src={product.imgUrl} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{product.name}</h2>
          <p className="text-slate-500">{product.description}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-error"
              onClick={() => redirectDetailProductById(product.id)}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
