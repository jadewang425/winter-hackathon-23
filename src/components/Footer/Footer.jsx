import { Link } from "react-router-dom"

export default function Footer () {
    return (
        <div className="w-full flex justify-between px-5">
            <div className="mb-2">
                <div className="hover:underline"><Link to="about">About Us</Link></div>
                <div className="hover:underline"><Link to="/adoption">Adoption</Link></div>
                <div className="hover:underline"><Link to="/contactus">Contact Us</Link></div>
                <div className="hover:underline"><a href="https://www.facebook.com/barkanimalrescue"  target="_blank" rel="noreferrer">Facebook</a></div>
            </div>
            <div className="text-xs w-[50%] h-auto self-end mb-3">
                <div className="inset-x-0 bottom-0 justify-end">Boudreaux’s Animal Rescue Krewe (B.A.R.K.) is a 501(c)(3) non-profit animal welfare organization.</div>
            </div>
        </div>
    )
}