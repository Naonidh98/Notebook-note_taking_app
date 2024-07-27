var data = [
  '#ffb703',
  '#a2d2ff',
  '#e76f51',
  '#faedcd',
  '#90e0ef',
  '#ffba08',
  '#f6bd60',
  '#ff595e',
  '#ced4da',
  '#edafb8',
  '#cad2c5',
  '#89c2d9',
  '#c77dff',
  '#c77efe',
  '#ffd000',
  '#e6b8a2',
  '#f79d65',
];

export const GenerateColor = () => {
  return data[Math.floor(Math.random() * data.length)];
};
