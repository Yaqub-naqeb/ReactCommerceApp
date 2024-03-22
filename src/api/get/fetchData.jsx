export const gettingData = async (url,method) => {
  const response = await fetch(url,{
    method: method, 
  });

  if (response.status !== 200) throw response;

  return response.json();
};