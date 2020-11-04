export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = (data) => {
  return {
    type: ADD_FEATURE,
    payload: data,
  };
};

export const removeFeature = (data) => {
  return {
    type: REMOVE_FEATURE,
    payload: data,
  };
};
