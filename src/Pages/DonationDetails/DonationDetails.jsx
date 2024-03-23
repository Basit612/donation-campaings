import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { Button, Card } from "@material-tailwind/react";

import {
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { saveToLocalStorage } from "../../utils/localStorage";

const DonationDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const { data, loading } = useDonationData();
  // console.log(id);

  const handleDonate = () =>{
   saveToLocalStorage(singleData);

  }

  // console.log(id, singleData);
  useEffect(() => {
    if (data) {
      const singleData = data.find((item) => item.id == id);
      console.log(singleData);
      setSingleData(singleData);
    }
  }, [data, id]);

  const { title, category, image, cardBg, textColor, categoryBg, description,price } =
    singleData || {};
  return (
    <Card className="mt-12 w-full mx-auto container rounded-md shadow-none overflow-hidden lg:px-20">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-md relative"
      >
        <img className="w-full rounded-md h-[600px]" src={image} />
        <div className="absolute bottom-0 bg-opacity-40 bg-black w-full h-28 pl-9">
        <Button onClick={handleDonate} style={{backgroundColor: textColor}} className="mt-9 rounded-md capitalize text-xl">Donate ${price}</Button>
        </div>
      </CardHeader>
      <CardBody>
        <Typography variant="h2" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default DonationDetails;
