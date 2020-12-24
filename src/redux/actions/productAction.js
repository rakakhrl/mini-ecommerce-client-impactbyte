import api from "../../config/api";
import { POPULATE_PRODUCTS } from "./actionType";

const fetchProducts = () => async (dispatch) => {
  try {
    const accesstoken = localStorage.getItem("accesstoken");

    const response = await api.get("/items", {
      headers: { accesstoken: accesstoken },
    });

    const payload = response.data.data;

    dispatch({ type: POPULATE_PRODUCTS, payload: payload });
  } catch (error) {
    console.log(`fetch products error. ${error}`);
  }
};

export { fetchProducts };
