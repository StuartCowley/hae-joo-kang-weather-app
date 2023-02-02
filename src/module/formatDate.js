exports.removeYear = (timestamp) => {
  const formattedDate = new Date(timestamp).toDateString();
  const dateSeparated = formattedDate.split(" ");
  return dateSeparated.slice(0, -1).join(" ");
};
