import IntialLayout from "../layout/IntialLayout";
import Navbar from "../layout/Navbar";

const Root = () => {
  return (
    <div id="root-container" data-testid="root-container">
      <Navbar />
      <IntialLayout />
    </div>
  );
};

export default Root;
