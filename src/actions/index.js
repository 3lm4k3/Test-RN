export const selectTag = (TagId) => {
  return {
    type: 'select_tag',
    payload: TagId
  };
};