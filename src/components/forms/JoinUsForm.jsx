import ImageButtons from "../buttons/ImageButtons";

export default function JoinUsForm() {
    return (
        <form className="max-w-xl mx-auto">
            <div className="mb-5">
                <label htmlFor="full_name" className="block mb-2 text-base font-medium">Full Name</label>
                <input type="text" id="full_name" className="bg-gray-50 border border-gray-300 text-gray-500 h-[3.5rem] text-sm rounded-lg block w-full p-2.5 " placeholder="Enter your full name" required />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-base font-medium">Email Address</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 h-[3.5rem] text-gray-500 text-sm rounded-lg block w-full p-2.5 " placeholder="Enter your email address" required />
            </div>
            <div className="mb-5">
                <label htmlFor="phone" className="block mb-2 text-base font-medium">Phone Number</label>
                <input type="text" id="phone" className="bg-gray-50 border border-gray-300 h-[3.5rem] text-gray-500 text-sm rounded-lg block w-full p-2.5 " placeholder="Enter your contact number" required />
            </div>
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium">I'm ready to receive special missions and rewards from KURIXEL Studios</label>
            </div>
            <ImageButtons
                text={'Join The adventure'}
                source="/images/Group.png"
                alt={'Join The adventure Button'}
                className="mt-8 px-6 py-2 md:px-8 md:py-5"
                textSize="text-base"
            />
        </form>
    )
}
