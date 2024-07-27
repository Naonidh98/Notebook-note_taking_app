export const GenerateDate = () => {
  const date = new Date();

  let data = date.toString();
  data = data.split(" ");

  const strData = data[2] + " " + data[1] + " " + data[3];

  return strData;
};
