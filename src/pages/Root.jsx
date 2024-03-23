import IntialLayout from "../layout/IntialLayout";
import Navbar from "../layout/Navbar";
import AuthContextProvider from "../components/context/AuthContext";
const Root = () => {
  return (
    <div id="root-container" data-testid="root-container" >
      <AuthContextProvider>
      <Navbar />
      <IntialLayout />
      </AuthContextProvider>
    </div>
  );
};

export default Root;
