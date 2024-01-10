import { useRouter } from "next/router";
import React from "react";

const ProductPage = () => {
  const { query } = useRouter();

  return (
    <div>
      <div>Product Page</div>
      <div>Name : {query.id} </div>
    </div>
  );
};

export default ProductPage;
