import { Card } from "antd";
import Image from "next/image";
import React from "react";

function Cards({ title, description, image, width }) {
  const { Meta } = Card;
  return (
    <div>
      <Card
        hoverable
        style={{ width: width?width:240 ,marginTop:'20px'}}
        cover={
          <Image
            alt="example"
            src={image&&image}
          />
        }
      >
        <Meta
          title={title ? title : ""}
          description={description && description}
        />
      </Card>
    </div>
  );
}

export default Cards;
