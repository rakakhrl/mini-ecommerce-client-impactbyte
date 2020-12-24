import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authAction";
import { fetchCategories } from "../redux/actions/cetegoryAction";
import { fetchProducts } from "../redux/actions/productAction";

const HomePage = () => {
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.category.categories);
  const products = useSelector((store) => store.product.products);

  useEffect(
    () => {
      dispatch(fetchCategories());
      dispatch(fetchProducts());
    },
    // eslint-disable-next-line
    []
  );

  console.log(products);
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>{category.category_name}</li>
        ))}
      </ul>
      <h3>Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <div style={{ border: "solid black 1px" }}>
              <img src={product.img_url} alt="poto" />
              <p>name: {product.item_name}</p>
              <p>description: {product.item_desc}</p>
              <p>category: {product.category_id.category_name}</p>
              <p>quantity: {product.quantity}</p>
              <p>price: {product.pricePerQuantity}</p>
              <p>
                status: {product.is_available ? "available" : "unavailable"}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
