export const truncateText = (data, num) => {
  if (data.length >= num) {
    return data.slice(0, num) + '...';
  } else {
    return data;
  }
};
