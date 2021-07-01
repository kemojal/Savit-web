
import { Transactions } from "../../Dummy/Data";

const initialState = Transactions

export default function TransactionReducer(state = initialState, {type, payload}){
  switch (type) {
    case "ADD_TRANSACTION":
      return  [...state, payload]
    case "DELETE_TRANSACTION":
      return  state.filter(({ id }) => id !== payload.id);
    default:
      return state;
  }
};