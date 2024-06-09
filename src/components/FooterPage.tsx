const FooterPage = () => {
    return (
        <div className="flex flex-col items-center px-16 pt-16 border-t border-gray-200 border-solid bg-neutral-100 max-md:px-5">
            <div className="flex flex-col max-w-full w-[1216px]">
                <div className="max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col pr-2.5 max-md:mt-5">
                                <div className="flex flex-col">
                                    <div className="text-lg font-semibold leading-7 text-gray-900">
                                        About
                                    </div>
                                    <div className="mt-3 text-base leading-6 text-zinc-500">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam
                                    </div>
                                </div>
                                <div className="flex flex-col mt-6 text-base font-semibold leading-6 text-zinc-700">
                                    <div>
                                        Email :{" "}
                                        <span className=" text-zinc-700">info@jstemplate.net</span>
                                    </div>
                                    <div className="mt-1">
                                        Phone :{" "}
                                        <span className=" text-zinc-700">880 123 456 789</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                            <div className="flex justify-center items-center px-16 max-md:px-5 max-md:mt-5 max-md:max-w-full">
                                <div className="flex gap-5 justify-between max-w-full w-[259px]">
                                    <div className="flex flex-col">
                                        <div className="text-lg font-semibold leading-7 text-gray-900">
                                            Quick Link
                                        </div>
                                        <div className="flex flex-col mt-6 text-base leading-6 whitespace-nowrap text-zinc-700">
                                            <div>Home</div>
                                            <div className="mt-2">About</div>
                                            <div className="mt-2">Blog</div>
                                            <div className="mt-2">Archived</div>
                                            <div className="mt-2">Author</div>
                                            <div className="mt-2">Contact</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col whitespace-nowrap">
                                        <div className="text-lg font-semibold leading-7 text-gray-900">
                                            Category
                                        </div>
                                        <div className="flex flex-col mt-6 text-base leading-6 text-zinc-700">
                                            <div>Lifestyle</div>
                                            <div className="mt-2">Technology</div>
                                            <div className="mt-2">Travel</div>
                                            <div className="mt-2">Business</div>
                                            <div className="mt-2">Economy</div>
                                            <div className="mt-2">Sports</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow p-8 w-full bg-white rounded-xl max-md:px-5 max-md:mt-5">
                                <div className="flex flex-col text-center">
                                    <div className="self-center text-xl font-semibold leading-6 text-gray-900">
                                        Weekly Newsletter
                                    </div>
                                    <div className="mt-2 text-base leading-6 text-zinc-500">
                                        Get blog articles and offers via email
                                    </div>
                                </div>
                                <div className="flex flex-col mt-8 text-base leading-6">
                                    <div className="flex flex-col justify-center text-neutral-400">
                                        <div className="flex gap-2.5 px-4 py-3 bg-white rounded-md border border-solid border-zinc-200">
                                            <div className="flex-1">Your Email</div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe2659d6aa215655dbaa9b291ea76efd01d18b57dbc1c788653699c9ab014b2c?apiKey=33a64a0f93c2493da0447121a699bf7a&"
                                                className="shrink-0 my-auto w-5 aspect-square"
                                            />
                                        </div>
                                    </div>
                                    <div className="justify-center items-center px-5 py-3 mt-2 font-medium text-white whitespace-nowrap bg-indigo-500 rounded-md">
                                        Subscribe
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-8 mt-16 border-t border-solid border-zinc-200 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
                            <div className="flex grow gap-2.5 text-gray-900 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea8d840d6222dd6a4874950551acb5e84411623ee24c6fa043899de85f4c9719?apiKey=33a64a0f93c2493da0447121a699bf7a&"
                                    className="shrink-0 my-auto w-12 aspect-square fill-indigo-500"
                                />
                                <div className="flex flex-col">
                                    <div className="text-xl font-bold leading-7">
                                        <span className="text-gray-900 ">Meta</span>
                                        <span className="font-extrabold text-gray-900">Blog</span>
                                    </div>
                                    <div className="text-base leading-6">
                                        © <span className="text-gray-900">JS Template</span> 2023.
                                        All Rights Reserved.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
                            <div className="flex gap-4 self-stretch pr-20 my-auto text-base leading-6 text-zinc-700 max-md:flex-wrap max-md:mt-10">
                                <div>Terms of Use</div>
                                <div>Privacy Policy</div>
                                <div>Cookie Policy</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterPage;