export const getDate = () => {
  return new Date();
}


export const addDate = () => {
  const date = getDate();
  
  return { 
    created_at: date, 
    updated_at: date
  }
}