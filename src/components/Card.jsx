import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Card = (cards) => {
  const { image, title } = cards;

  return (
    <>
      <div className="flex gap-3 flex-col h-72 w-72 rounded-xl items-center justify-center shadow-lg hover:shadow-2xl">
        <img className="max-h-40 w-auto aspect-auto" src={image} alt={title} />
        <h1 className="text-2xl font-bold">{title}</h1>
        <Link to="/register">
          <Button>Apply</Button>
        </Link>
      </div>
    </>
  );
};
export default Card;
