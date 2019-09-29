export const getTitle = filename =>
  filename.replace(/^\.\/|\(\d{1,3}\)|\.png|\.jpg$/g, '')
