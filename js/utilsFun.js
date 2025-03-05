export const utilsFun = (cName, name, type) => {
  getName = () => cName;
  getAppName = () => cName;
  getJSName = () => name;
  getType = () => type;
  return {
    getName,
    getAppName,
    getJSName,
    getType,
  };
};
