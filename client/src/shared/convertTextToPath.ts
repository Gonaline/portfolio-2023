export const convertTextToPath: any = (text: string) => {
  if (text !== null) {
    return text
      .normalize('NFD')
      .trim()
      .split(' ')
      .join('-')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  } else {
    return text;
  }
};
