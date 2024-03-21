const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
  

    {/* Hero Section */}
    <section className=" text-black py-20">
        <div className="container mx-auto px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <h2 className="text-4xl font-bold mb-4">Welcome to Our Store</h2>
                    <p className="text-lg mb-6">Discover amazing products tailored just for you.</p>
                    {/* Add a call-to-action button */}
                    <a href="/products" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out">Explore Products</a>
                </div>
                <div className="lg:w-1/2">
                    <img src="https://via.placeholder.com/800x500" alt="Hero" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    </section>

    {/* Footer */}
    {/* <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-8 text-center">
            <p>&copy; 2024 Your E-Commerce Store. All rights reserved.</p>
        </div>
    </footer> */}
</div>
  )
}

export default Home
