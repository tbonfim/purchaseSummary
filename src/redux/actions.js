import { getPurchaseSummary } from '../services/PurchaseSummaryService';

export const GET_ORDER_SUMMARY = "GET_ORDER_SUMMARY";
export const APPLY_DISCOUNT = "APPLY_DISCOUNT";

export const applyDiscount = () => ({ type: APPLY_DISCOUNT });

export const getOrderSummary = () => {
  return async (dispatch, getState) => {
    const orderSummary = await getPurchaseSummary().catch(e => console.log('TODO: error handling'));
    return dispatch( { type: GET_ORDER_SUMMARY , orderSummary: orderSummary});
  };
};