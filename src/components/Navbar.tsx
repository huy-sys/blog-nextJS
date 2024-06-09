const NavbarHeader = () => {
    return (
        <div className="flex justify-center items-center px-16 py-8 max-md:px-5">
            <div className="flex gap-5 justify-between max-w-full w-[1218px] max-md:flex-wrap">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccc8343a891916293e0885ec85dd6080fad46cfcaddfab48436f5f7bbb36ff2e?apiKey=33a64a0f93c2493da0447121a699bf7a&"
                    className="shrink-0 max-w-full aspect-[4.35] w-[158px]"
                />
                <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <div className="flex justify-center items-center px-16 my-auto text-base leading-6 text-zinc-700 max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 justify-between max-md:flex-wrap">
                            <div className="justify-center whitespace-nowrap">Home</div>
                            <div className="justify-center whitespace-nowrap">Blog</div>
                            <div className="justify-center">Single Post</div>
                            <div className="justify-center whitespace-nowrap">Pages</div>
                            <div className="justify-center whitespace-nowrap">Contact</div>
                        </div>
                    </div>
                    <div className="flex gap-5 justify-between text-sm leading-5 whitespace-nowrap text-zinc-400">
                        <div className="flex gap-3 py-2 pr-2 pl-4 rounded-md bg-zinc-100">
                            <div className="flex-1">Search</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e1024d9c520cd635a66c84da1cba18cde0a18948f7d97bef90c8a00935a7be7?apiKey=33a64a0f93c2493da0447121a699bf7a&"
                                className="shrink-0 my-auto w-4 aspect-square"
                            />
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ac51fed1a80c9f9dd798e4b7517aa4c69f993c75174f7cffc7b71ff5769f914?apiKey=33a64a0f93c2493da0447121a699bf7a&"
                            className="shrink-0 my-auto w-12 aspect-[1.72]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarHeader;