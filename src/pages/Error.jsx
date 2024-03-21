import notfound from '../assets/3793096.jpg'
import { NavLink } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">Oops! The page you're looking for does not exist.</p>
      <img src={notfound} alt="404 Illustration" className="mt-8 w-64 h-64" />
      <NavLink to={'/'} className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Go Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
