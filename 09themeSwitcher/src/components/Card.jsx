export default function Card() {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow 
                        dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
            <a href="/">
                <img
                    className="p-8 rounded-t-lg"
                    src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="product_image1"
                />
            </a>

            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>

                <div className="flex items-center mt-2.5 mb-5">
                    {/* ⭐ Filled Stars */}
                    {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .587l3.668 7.431 8.207 1.193-5.938 5.787 
                                     1.402 8.168L12 18.896l-7.339 3.87 
                                     1.402-8.168L.125 9.211l8.207-1.193z" />
                        </svg>
                    ))}
                    {/* ⭐ Empty Star */}
                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.431 8.207 1.193-5.938 5.787 
                                 1.402 8.168L12 18.896l-7.339 3.87 
                                 1.402-8.168L.125 9.211l8.207-1.193z" />
                    </svg>

                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded 
                                     dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                                   focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                                   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
