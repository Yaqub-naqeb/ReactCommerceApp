export const gettingProducts = async (url) => {
  const response = await fetch(url,{
    method: 'POST', 
  });

  if (response.status !== 200) throw response;

  return response.json();
};