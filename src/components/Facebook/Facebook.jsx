import { FaFacebook } from "react-icons/fa"
import { FacebookEmbed } from 'react-social-media-embed';

export default function Facebook () {
    return (
        <div className="w-full max-w-2xl flex flex-col">
            <div className="py-5 px-4 sm:px-2 flex self-center">
                <div className="flex flex-col w-auto">
                    <div className="flex">
                        <div className="pr-3 font-semibold">
                            <p>Get to know us!</p>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/barkanimalrescue"  target="_blank" rel="noreferrer">
                                <FaFacebook size={25} />
                            </a>
                        </div>
                    </div>
                    <div className="flex"><p className="text-[14px]">Our recent posts</p></div>
                </div>
            </div>
            <div className="flex justify-center px-5">
                <FacebookEmbed url="https://www.facebook.com/barkanimalrescue/posts/pfbid02CqS4KVLoyYmnuXfkGCFcs1PzLgcD3Ye5DA3pYjfpuU32RX1AdiPCNVYaDekFFkVJl" width={380} />
            </div>
        </div>
    )
}