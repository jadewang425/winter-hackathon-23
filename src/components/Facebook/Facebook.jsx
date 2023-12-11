import { FaFacebook } from "react-icons/fa"
import { FacebookEmbed } from 'react-social-media-embed';

export default function Facebook () {
    return (
        <div className="w-full max-w-2xl">
            <div className="py-5 px-4 sm:px-2">
                <div className="flex">
                    <div className="pr-3 font-semibold  flex justify-center items-center">
                        <p>Get to know us!</p>
                    </div>
                    <div className="self-center">
                        <a href="https://www.facebook.com/barkanimalrescue"  target="_blank" rel="noreferrer">
                            <FaFacebook size={25} />
                        </a>

                    </div>
                </div>
                <div><p className="text-[14px]">Our recent posts</p></div>
            </div>
            <div className="flex justify-center px-5">
                <FacebookEmbed url="https://www.facebook.com/barkanimalrescue/posts/pfbid02CqS4KVLoyYmnuXfkGCFcs1PzLgcD3Ye5DA3pYjfpuU32RX1AdiPCNVYaDekFFkVJl" width={380} />
            </div>
        </div>
    )
}