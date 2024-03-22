const addCart = async (newCart) => {

    let response;
    try {
     
      response = await fetch('http://localhost:3001/carts', {
        method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify(newCart),
      });
    } catch (error) {
      // setError(error);
      console.log(error);
    }
  
    return response;
  };
  
  export default addCart;
  