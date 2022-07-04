export default (regTime) => {
  const regtime = regTime.split("T");
  const date = regtime[0];
  const time = regtime[1];
  return date.split("-").join("/");
};
