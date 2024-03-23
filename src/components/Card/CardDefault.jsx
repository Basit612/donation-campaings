import { Card } from "@material-tailwind/react";

import {
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CardDefault = ({ item }) => {
  console.log(item);
  const { id, title, category, image, cardBg, textColor, categoryBg } =
    item || {};
  return (
    <Link to={`/donation-details/${id}`}>
      <Card
        style={{ backgroundColor: cardBg }}
        className="mt-6 overflow-hidden  cursor-pointer"
      >
        <CardHeader color="blue-gray" className="rounded-none m-0">
          <img src={image} alt="card-image" />
        </CardHeader>
        <CardBody>
          <Button
            style={{ backgroundColor: categoryBg, color: textColor }}
            size="md"
            className=" mb-4"
          >
            {category}
          </Button>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CardDefault;
