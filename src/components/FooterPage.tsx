const FooterPage = () => {
    return (
        <footer className="bg-white shadow-lg mt-10">
            <div className="w-10/12 mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    {/* Footer Left Section */}
                    <div className="flex sm:flex-col items-center space-x-4">
                        <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Privacy Policy</a>
                    </div>

                    {/* Footer Right Section */}
                    <div className="flex sm:flex-col items-center space-x-4">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Facebook</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Twitter</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">LinkedIn</a>
                    </div>
                </div>
                <div className="text-center text-gray-500 mt-4">
                    &copy; 2024 MyCompany. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default FooterPage;