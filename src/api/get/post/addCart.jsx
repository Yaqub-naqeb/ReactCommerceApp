const addCart = async (url,newCart,) => {
    // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
    let response;
    try {
     
      response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: newCart,
      });
    } catch (error) {
      // setError(error);
      console.log(error);
    }
  
    return response;
  };
  
  export default addCart;
  