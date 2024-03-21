const addCart = async (newBook,url) => {
    // eslint-disable-next-line no-unused-vars, react-hooks/rules-of-hooks
    let response;
    try {
     
      response = await fetch("http://localhost:3001/carts", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: newBook,
      });
    } catch (error) {
      // setError(error);
      console.log(error);
    }
  
    return response;
  };
  
  export default addCart;
  