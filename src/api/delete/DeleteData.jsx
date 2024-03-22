export const deleteData = async (url) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 204) {
        console.log("Successfully deleted the Cart.");
     
      } 
      else if (response.status === 404) {
        // console.error("Cart not found.");
      }  else {
        console.error(
          `Failed to delete the cart. Status code: ${response.status}`
        );
      }
    } catch (error) {
      console.error("An error occurred while deleting the cart:", error);
    }
  };