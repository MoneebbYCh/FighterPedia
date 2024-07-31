
let idCounter = 20; 

export const generateUniqueId = (): string => {
  const uniqueId = (idCounter++).toString(); 
  return uniqueId;
};
