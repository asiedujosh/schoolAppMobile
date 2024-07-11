const ReadDate = data => {
  const date = new Date(data);
  const readableDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return readableDate;
};

export default ReadDate;
