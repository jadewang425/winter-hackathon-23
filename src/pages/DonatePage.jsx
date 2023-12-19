import SectionHeader from '../components/SectionHeader'
import ExpandableDropdown from '../components/ExpandableDropdown';
import { Link } from 'react-router-dom';

export default function DonatePage() {
    return (
        <div className="w-full flex flex-col justify-center pt-2">
            <SectionHeader title="Donate Today" />
            <div className="mb-5 flex flex-col max-w-6xl w-[100%] self-center">
                <div className="p-5">Donate today, every dollar counts! You can make a one time donation or you can set up monthly donations to increase your impact. See how below.</div>
                <div className="w-[100px] bg-[#E5BC01] text-[#214038] rounded-full self-center">
                    <a target='_blank' href='http://barkanimalrescue.org/Donate' rel="noreferrer" className="bg-[#E5BC01] mt-4 text-[#214038] font-semibold hover:bg-[#f8d36d] py-[10px] px-[30px]  rounded-full focus:outline-none focus:shadow-outline-green active:bg-green-700">
                        DONATE
                    </a>
                </div>
            </div>
            <SectionHeader title="Donation Impact" />
            <div className="mb-5 flex flex-col max-w-6xl w-[100%] self-center">
                <div className="p-5">You can set it up TODAY with your bank to have an automatic check sent to our Post Office Box each month on the same day or you can set up monthly donations through PayPal. Every little bit helps!</div>
                <div className="px-5">
                    <ul>
                        <li><span className="font-bold">$5/month</span>: Heartworm preventative for one dog</li>
                        <li><span className="font-bold">$10/month</span>: 2 bags of kitty litter</li>
                        <li><span className="font-bold">$25/month</span>: Feed one animal for two weeks</li>
                        <li><span className="font-bold">$30/month</span>: Vaccinations for one animal</li>
                        <li><span className="font-bold">$50/month</span>: Cat Spay or Neuter</li>
                        <li><span className="font-bold">$75/month</span>: Dog Spay or Neuter</li>
                        <li><span className="font-bold">$100/month</span>: Heartworm treatment of a small dog</li>
                        <li><span className="font-bold">$150/month</span>: Covers lawn care at our facility</li>
                    </ul>
                </div>
            </div>
            <SectionHeader title="In-Kind Donation Wishlist" />
            <ExpandableDropdown title="Cleaning Supplies">
                <div className="mb-5 flex flex-col max-w-6xl w-[100%] self-center">
                    <ul className="pl-10 pr-5 list-disc">
                        <li>Bleach</li>
                        <li>Pump Up 2 Gallon Sprayers</li>
                        <li>Disposable Gloves (any size)</li>
                        <li>Dawn Hand Soap</li>
                        <li>Antibacterial Hand Soap (any type)</li>
                    </ul>
                </div>
            </ExpandableDropdown>
            <ExpandableDropdown title="Food">
                <div className="mb-5 flex flex-col max-w-6xl w-[100%] self-center">
                    <ul className="pl-10 pr-5 list-disc">
                        <li>Canned Cat Food</li>
                        <li>Dry Dog Food (High Protein Retriever Brand from Tractor Supply)</li>
                    </ul>
                </div>
            </ExpandableDropdown>
            <ExpandableDropdown title="Other">
                <div className="mb-5 flex flex-col max-w-6xl w-[100%] self-center">
                    <ul className="pl-10 pr-5 list-disc">
                        <li>Baby Shampoo</li>
                        <li>Toilet Paper</li>
                        <li>Sandwich Size Zip Lock Bags</li>
                        <li>Towels, Sheets, Blankets</li>
                        <li>Cat Litter</li>
                        <li className="font-bold">Milk Bones (every dog gets a treat each morning- always in need of these)</li>
                        <li>Large, X-Large, and XX-Large Kong Toys</li>
                        <li>Commercial no kinking 100 foot water hoses</li>
                        <li>Metal Water Hose Nozzles (Gilmore)</li>
                        <li>Standing Pooper Scooper</li>
                        <li>Dog houses (New or Old)</li>
                        <li>Wal-Mart, Tractor Supply or Petsmart Gift Cards</li>
                        <li>Monetary Donations</li>
                    </ul>

                </div>
            </ExpandableDropdown>
            <div className="flex flex-col max-w-6xl w-[100%] self-center mb-5">
                <div className='font-bold p-5'>
                    Please <Link to="/contactus" className="text-[#7F3F98]" onClick={() => {window.scroll(0, 0)}}>contact us</Link> to set up a time to drop off donations.
                </div>
            </div>
        </div>
    )
}