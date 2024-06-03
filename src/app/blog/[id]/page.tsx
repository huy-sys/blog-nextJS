// app/posts/[id]/page.tsx
import { notFound } from 'next/navigation';
import { posts } from '../../../lib/posts';

interface PostDetailProps {
    params: {
        id: string;
    };
}
export async function generateStaticParams() {
    return posts.map(post => ({
        id: post.id,
    }));
}

const PostDetailPage = ({ params }: PostDetailProps) => {
    const post = posts.find(post => post.id === params.id);

    if (!post) {
        notFound();
    }

    return (
        <>
            <div>
                <h1>{post?.title}</h1>
                <p>{post?.content}</p>
            </div>
            <div className="flex flex-col justify-center bg-white">
                <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex justify-center items-center px-16 py-8 w-full max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 justify-between max-w-full w-[1220px] max-md:flex-wrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccc8343a891916293e0885ec85dd6080fad46cfcaddfab48436f5f7bbb36ff2e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&"
                                className="shrink-0 max-w-full aspect-[4.35] w-[158px]"
                            />
                            <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                                <div className="flex justify-center items-center px-16 my-auto text-base leading-6 text-zinc-700 max-md:px-5 max-md:max-w-full">
                                    <div className="flex gap-5 justify-between px-px max-md:flex-wrap">
                                        <div className="justify-center whitespace-nowrap">Home</div>
                                        <div className="justify-center whitespace-nowrap">Blog</div>
                                        <div className="justify-center">Single Post</div>
                                        <div className="justify-center whitespace-nowrap">Pages</div>
                                        <div className="justify-center whitespace-nowrap">
                                            Contact
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between text-sm leading-5 whitespace-nowrap text-zinc-400">
                                    <div className="flex gap-3 py-2 pr-2 pl-4 rounded-md bg-zinc-100">
                                        <div className="flex-1">Search</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e1024d9c520cd635a66c84da1cba18cde0a18948f7d97bef90c8a00935a7be7?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&"
                                            className="shrink-0 my-auto w-4 aspect-square"
                                        />
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e85a5e0f7160aca9ae30b1a32fa98d56c6946a7411322a0b1e6dab7d9996d7f6?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&"
                                        className="shrink-0 my-auto w-12 aspect-[1.72]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-8 w-full max-md:max-w-full">
                        <div className="flex flex-col justify-center self-center max-w-full w-[800px]">
                            <div className="flex flex-col max-md:max-w-full">
                                <div className="flex flex-col max-md:max-w-full">
                                    <div className="flex flex-col max-md:max-w-full">
                                        <div className="flex flex-col px-5 max-md:max-w-full">
                                            <div className="justify-center self-start px-3 py-1.5 text-sm font-medium leading-5 text-white whitespace-nowrap bg-indigo-500 rounded-md">
                                                Technology
                                            </div>
                                            <div className="mt-4 text-4xl font-semibold leading-10 text-gray-900 max-md:max-w-full">
                                                The Impact of Technology on the Workplace: How Technology
                                                is Changing
                                            </div>
                                        </div>
                                        <div className="flex gap-5 justify-between self-start px-5 mt-5 text-sm leading-5 text-zinc-500">
                                            <div className="flex gap-2 font-medium">
                                                <img
                                                    loading="lazy"
                                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/de2ae904bb899f9613e17a14ed65f46fbfd66d4ff0ff629c8473d33b9e71bb0e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/de2ae904bb899f9613e17a14ed65f46fbfd66d4ff0ff629c8473d33b9e71bb0e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/de2ae904bb899f9613e17a14ed65f46fbfd66d4ff0ff629c8473d33b9e71bb0e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/de2ae904bb899f9613e17a14ed65f46fbfd66d4ff0ff629c8473d33b9e71bb0e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/de2ae904bb899f9613e17a14ed65f46fbfd66d4ff0ff629c8473d33b9e71bb0e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/de2ae904bb899f9613e17a14ed65f46fbfd66d4ff0ff629c8473d33b9e71bb0e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/de2ae904bb899f9613e17a14ed65f46fbfd66d4ff0ff629c8473d33b9e71bb0e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/de2ae904bb899f9613e17a14ed65f46fbfd66d4ff0ff629c8473d33b9e71bb0e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&"
                                                    className="shrink-0 w-7 aspect-square"
                                                />
                                                <div className="my-auto">Tracey Wilson</div>
                                            </div>
                                            <div className="my-auto">August 20, 2022</div>
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7d9573287eb78253b771903dec757493925c9589d191fe5d1f2ed20863bff6ac?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d9573287eb78253b771903dec757493925c9589d191fe5d1f2ed20863bff6ac?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d9573287eb78253b771903dec757493925c9589d191fe5d1f2ed20863bff6ac?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d9573287eb78253b771903dec757493925c9589d191fe5d1f2ed20863bff6ac?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d9573287eb78253b771903dec757493925c9589d191fe5d1f2ed20863bff6ac?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d9573287eb78253b771903dec757493925c9589d191fe5d1f2ed20863bff6ac?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d9573287eb78253b771903dec757493925c9589d191fe5d1f2ed20863bff6ac?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7d9573287eb78253b771903dec757493925c9589d191fe5d1f2ed20863bff6ac?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&"
                                        className="mt-8 w-full aspect-[1.72] max-md:max-w-full"
                                    />
                                    <div className="justify-center px-5 mt-8 text-xl leading-8 text-zinc-700 max-md:max-w-full">
                                        Traveling is an enriching experience that opens up new
                                        horizons, exposes us to different cultures, and creates
                                        memories that last a lifetime. However, traveling can also be
                                        stressful and overwhelming, especially if you don't plan and
                                        prepare adequately. In this blog article, we'll explore tips
                                        and tricks for a memorable journey and how to make the most of
                                        your travels.
                                        <br />
                                        <br />
                                        One of the most rewarding aspects of traveling is immersing
                                        yourself in the local culture and customs. This includes
                                        trying local cuisine, attending cultural events and festivals,
                                        and interacting with locals. Learning a few phrases in the
                                        local language can also go a long way in making connections
                                        and showing respect.
                                    </div>
                                    <div className="flex flex-col px-5 mt-8 max-md:max-w-full">
                                        <div className="text-2xl font-semibold leading-7 text-gray-900 max-md:max-w-full">
                                            Research Your Destination
                                        </div>
                                        <div className="mt-4 text-xl leading-8 text-zinc-700 max-md:max-w-full">
                                            Before embarking on your journey, take the time to research
                                            your destination. This includes understanding the local
                                            culture, customs, and laws, as well as identifying top
                                            attractions, restaurants, and accommodations. Doing so will
                                            help you navigate your destination with confidence and avoid
                                            any cultural faux pas.
                                            <br />
                                            <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. In hendrerit gravida rutrum quisque non tellus orci
                                            ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper
                                            sit amet. Aenean euismod elementum nisi quis eleifend quam
                                            adipiscing vitae. Viverra adipiscing at in tellus.
                                        </div>
                                    </div>
                                    <div className="flex flex-col px-5 mt-8 max-md:max-w-full">
                                        <div className="text-2xl font-semibold leading-7 text-gray-900 max-md:max-w-full">
                                            Plan Your Itinerary
                                        </div>
                                        <div className="mt-4 text-xl leading-8 text-zinc-700 max-md:max-w-full">
                                            While it's essential to leave room for spontaneity and
                                            unexpected adventures, having a rough itinerary can help you
                                            make the most of your time and budget. Identify the must-see
                                            sights and experiences and prioritize them according to your
                                            interests and preferences. This will help you avoid
                                            overscheduling and ensure that you have time to relax and
                                            enjoy your journey.
                                            <br />
                                            <br />
                                            Vitae sapien pellentesque habitant morbi tristique. Luctus
                                            venenatis lectus magna fringilla. Nec ullamcorper sit amet
                                            risus nullam eget felis. Tincidunt arcu non sodales neque
                                            sodales ut etiam sit amet.
                                        </div>
                                    </div>
                                    <div className="justify-center p-8 mt-8 text-2xl italic leading-8 text-gray-900 rounded-xl border-l-4 border-gray-200 border-solid bg-neutral-100 max-md:px-5 max-md:max-w-full">
                                        “ Traveling can expose you to new environments and potential
                                        health risks, so it's crucial to take precautions to stay safe
                                        and healthy. ”
                                    </div>
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/939b9ed8da35a6403f680474e78eb81eee0b7e0137b002ab3eeb75bbaaac977e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/939b9ed8da35a6403f680474e78eb81eee0b7e0137b002ab3eeb75bbaaac977e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/939b9ed8da35a6403f680474e78eb81eee0b7e0137b002ab3eeb75bbaaac977e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/939b9ed8da35a6403f680474e78eb81eee0b7e0137b002ab3eeb75bbaaac977e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/939b9ed8da35a6403f680474e78eb81eee0b7e0137b002ab3eeb75bbaaac977e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/939b9ed8da35a6403f680474e78eb81eee0b7e0137b002ab3eeb75bbaaac977e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/939b9ed8da35a6403f680474e78eb81eee0b7e0137b002ab3eeb75bbaaac977e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/939b9ed8da35a6403f680474e78eb81eee0b7e0137b002ab3eeb75bbaaac977e?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&"
                                        className="mt-8 w-full aspect-[1.72] max-md:max-w-full"
                                    />
                                    <div className="flex justify-center items-center px-16 py-4 mx-6 mt-8 text-center bg-gray-200 rounded-xl text-zinc-500 max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                                        <div className="flex flex-col items-center">
                                            <div className="text-sm leading-5">Advertisement</div>
                                            <div className="self-stretch text-xl font-semibold leading-6">
                                                You can place ads
                                            </div>
                                            <div className="text-lg leading-6">750x100</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col px-5 mt-8 max-md:max-w-full">
                                        <div className="text-2xl font-semibold leading-7 text-gray-900 max-md:max-w-full">
                                            Pack Lightly and Smartly
                                        </div>
                                        <div className="mt-4 text-xl leading-8 text-zinc-700 max-md:max-w-full">
                                            Packing can be a daunting task, but with some careful
                                            planning and smart choices, you can pack light and
                                            efficiently. Start by making a packing list and sticking to
                                            it, focusing on versatile and comfortable clothing that can
                                            be mixed and matched. Invest in quality luggage and packing
                                            organizers to maximize space and minimize wrinkles.
                                        </div>
                                    </div>
                                    <div className="flex flex-col px-5 mt-8 max-md:max-w-full">
                                        <div className="text-2xl font-semibold leading-7 text-gray-900 max-md:max-w-full">
                                            Stay Safe and Healthy
                                        </div>
                                        <div className="mt-4 text-xl leading-8 text-zinc-700 max-md:max-w-full">
                                            Traveling can expose you to new environments and potential
                                            health risks, so it's crucial to take precautions to stay
                                            safe and healthy. This includes researching any required
                                            vaccinations or medications, staying hydrated, washing your
                                            hands frequently, and using sunscreen and insect repellent.
                                            It's also essential to keep your valuables safe and secure
                                            and to be aware of your surroundings at all times.
                                        </div>
                                    </div>
                                    <div className="flex flex-col px-5 mt-8 max-md:max-w-full">
                                        <div className="text-2xl font-semibold leading-7 text-gray-900 max-md:max-w-full">
                                            Immerse Yourself in the Local Culture
                                        </div>
                                        <div className="mt-4 text-xl leading-8 text-zinc-700 max-md:max-w-full">
                                            One of the most rewarding aspects of traveling is immersing
                                            yourself in the local culture and customs. This includes
                                            trying local cuisine, attending cultural events and
                                            festivals, and interacting with locals. Learning a few
                                            phrases in the local language can also go a long way in
                                            making connections and showing respect.
                                        </div>
                                    </div>
                                    <div className="flex flex-col px-5 mt-8 max-md:max-w-full">
                                        <div className="text-2xl font-semibold leading-7 text-gray-900 max-md:max-w-full">
                                            Capture Memories
                                        </div>
                                        <div className="mt-4 text-xl leading-8 text-zinc-700 max-md:max-w-full">
                                            Finally, don't forget to capture memories of your journey.
                                            Whether it's through photographs, journaling, or souvenirs,
                                            preserving the moments and experiences of your travels can
                                            bring joy and nostalgia for years to come. However, it's
                                            also essential to be present in the moment and not let
                                            technology distract you from the beauty of your
                                            surroundings.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center mt-8 max-md:max-w-full">
                                    <div className="flex flex-col px-5 max-md:max-w-full">
                                        <div className="text-2xl font-semibold leading-7 text-gray-900 max-md:max-w-full">
                                            Conclusion:
                                        </div>
                                        <div className="mt-4 text-xl leading-8 text-zinc-700 max-md:max-w-full">
                                            Traveling is an art form that requires a blend of planning,
                                            preparation, and spontaneity. By following these tips and
                                            tricks, you can make the most of your journey and create
                                            memories that last a lifetime. So pack your bags, embrace
                                            the adventure, and enjoy the ride.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center px-16 pt-16 mt-20 w-full border-t border-gray-200 border-solid bg-neutral-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
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
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam
                                                    </div>
                                                </div>
                                                <div className="flex flex-col mt-6 text-base font-semibold leading-6 text-zinc-700">
                                                    <div>
                                                        Email :{" "}
                                                        <span className=" text-zinc-700">
                                                            info@jstemplate.net
                                                        </span>
                                                    </div>
                                                    <div className="mt-1">
                                                        Phone :{" "}
                                                        <span className=" text-zinc-700">
                                                            880 123 456 789
                                                        </span>
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
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe2659d6aa215655dbaa9b291ea76efd01d18b57dbc1c788653699c9ab014b2c?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&"
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
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea8d840d6222dd6a4874950551acb5e84411623ee24c6fa043899de85f4c9719?apiKey=7bddcbeb62394b8999c930ade4f7a5fe&"
                                                    className="shrink-0 my-auto w-12 aspect-square fill-indigo-500"
                                                />
                                                <div className="flex flex-col">
                                                    <div className="text-xl font-bold leading-7">
                                                        <span className="text-gray-900 ">Meta</span>
                                                        <span className="font-extrabold text-gray-900">
                                                            Blog
                                                        </span>
                                                    </div>
                                                    <div className="text-base leading-6">
                                                        © <span className="text-gray-900">JS Template</span>{" "}
                                                        2023. All Rights Reserved.
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostDetailPage;
