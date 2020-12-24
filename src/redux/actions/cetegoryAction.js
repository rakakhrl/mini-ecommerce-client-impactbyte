import api from "../../config/api";
import { POPULATE_CATEGORIES } from "./actionType";

const fetchCategories = () => async (dispatch) => {
  try {
    const accesstoken = localStorage.getItem("accesstoken");

    const response = await api.get("/categories", {
      headers: { accesstoken: accesstoken },
    });

    const payload = response.data.data;

    dispatch({ type: POPULATE_CATEGORIES, payload: payload });
  } catch (error) {
    console.log(`fetch categories error. ${error}`);
  }
};

export { fetchCategories };
