const updateCart = async (productId, updatedData) => {
    console.log(updatedData)
    let response;
    try {
      response = await fetch(`http://localhost:3001/carts/${productId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
    } catch (error) {
      console.log(error);
    }
    return response;
  };
  
  export default updateCart;
  