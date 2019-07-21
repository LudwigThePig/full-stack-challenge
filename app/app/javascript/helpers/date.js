const formatYMD = (string) => {
  const date = new Date(string);
  const dateString = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;
  return dateString;
};

export {
  formatYMD,
};
