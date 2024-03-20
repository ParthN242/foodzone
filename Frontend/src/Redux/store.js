import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Auth/authSlice";
import foodReducer from "./Food/Food/foodSlice";
import UserDetailReducer from "./User/UserDetailSlice";
import allUserReducer from "./User/allUserSlice";
import getFoodReducer from "./Food/Get Food Item/getFoodSlice";
import cartReducer from "./Cart/cartSlice";

const reducers = combineReducers({
  auth: authReducer,
  user: UserDetailReducer,
  food: foodReducer,
  foodItems: getFoodReducer,
  cart: cartReducer,
  allUsers: allUserReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
