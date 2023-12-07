import { FaFacebook } from "react-icons/fa"
import { FacebookEmbed } from 'react-social-media-embed';

export default function Facebook () {
    return (
        <div className="w-full">
            <div className="p-5">
                <div className="flex">
                    <div className="pr-2 font-bold">Get to know us!</div>
                    <div className="self-center">
                        <a href="https://www.facebook.com/barkanimalrescue"  target="_blank" rel="noreferrer">
                            <FaFacebook size={30} />
                        </a>
                    </div>
                </div>
                <div><p>Our recent posts</p></div>
            </div>

            <div className="flex justify-center px-5">
                <FacebookEmbed url="https://www.facebook.com/barkanimalrescue/posts/pfbid02CqS4KVLoyYmnuXfkGCFcs1PzLgcD3Ye5DA3pYjfpuU32RX1AdiPCNVYaDekFFkVJl" width={380} />
            </div>
        </div>
    )
}