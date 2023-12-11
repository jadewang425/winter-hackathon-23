import React from 'react'
import ExpandableDropdown from '../components/ExpandableDropdown';
import SectionHeader from '../components/SectionHeader';

const Resources = () => {

  return (
    <div className='w-full flex flex-col justify-center pt-2'>
      <SectionHeader title='Resources' />

      <div className='pt-0.5'>

        <ExpandableDropdown title="Animal Rescue Help">
          <div className='mb-5 p-5 flex flex-col max-w-6xl w-[100%] self-center gap-10'>
            <div>
              Be sure to research different rescue groups in our state as there are many volunteers that help with transporting of animals in need.
            </div>

            <div>
              Note: In Louisiana, if you have been caring for an animal for 30 days or longer, this animal is concerned your personal pet. If you surrender a personal pet to The Alexandria Animal Shelter or The Pineville Animal Shelter, they have the right to euthanize him or her the day surrendered because they do not have to wait for the owners to claim; you as the owners surrendered all rights. This does not mean they will euthanize your animal the same day. This means if they do not have space, deem the dog or cat unadoptable, have too many animals of that color or breed, etc., they could euthanize.
            </div>

            <div>
              All stray animals surrendered to the Pineville or Alexandria Animal Shelter are given 3 to 5 business days before being euthanized. Again some stay longer while others are not so lucky.
            </div>

            <div>
              1. Make flyers with a picture and a story about the animal in need of finding a new home. Pictures say a thousand words. Hang these flyers at all our local veterinarian hospitals along with Pet Friendly places like pet groomers or dog parks or even in neighborhoods. Be sure to ask questions to anyone who calls you wanting to adopt this animal. Any person can do a vet check. This means, with the permission of the potential adopter, you can contact their current veterinarian to ask them if they keep their current pets up to date on vaccinations and heartworm preventative. The potential adopters just need to contact their vet and agree to release this information to you. It is definitely a red flag if someone refuses this request.
            </div>

            <div>
              2. Post them on any animal rescue facebook pages in your area. Exposure is key to getting an animal adopted. BARK does courtesy posts all the time. If we cannot help by intaking the animal, we definitely will help by sharing your write up and picture. Many other groups do the same deed.
            </div>

            <div>
              3. It helps if you can have the animal spayed or neutered prior to adopting him or her out. Many people are overwhelmed by all the expenses they will have to incur by adopting a free pet. If you can have the animal spayed or neutered first, that is beneficial.
            </div>

            <div>
              Helpful article to read on how to adopt out your personal pet or a stray into the right a new home.
            </div>

            <a className="font-bold text-[#7F3F98]" href='http://bestfriends.org/uploadedFiles/Content/Resources/Resources_for_Rescuers/Adoption/HowtoFindHomesforHomelessPets.pdf'>
              Learn More!
            </a>
            <div>
            </div>
          </div>
        </ExpandableDropdown>

        <ExpandableDropdown title="Animal Rescue Locations">
          <div className='mb-5 p-5 flex flex-col max-w-6xl w-[100%] self-center gap-10'>
            <div>
              The Humane Society of West Louisiana
              <br />
              P.O. Box 1751
              <br />
              DeRidder, LA 70634
              <br />
              Phone: <a className="font-bold text-[#7F3F98]" href='tel:337-462-3321'>(337) 462-3321</a>
              <br />
              <a className="font-bold text-[#7F3F98]" href='www.facebook.com/HumaneSocietyofWestLouisiana'>
                Facebook
              </a>
              <br />
              (This group mostly does small breed dog rescue or puppies)
              <br />
            </div>

            <div>
              Labs 4 Rescue
              <br />
              <a className="font-bold text-[#7F3F98]" href='www.labs4rescue.com'>
                www.labs4rescue.com
              </a>
              <br />
              <a className="font-bold text-[#7F3F98]" href='mailto:keri4labs@gmail.com'>
                Keri4labs@gmail.com
              </a>
              <br />
              (This group rescues Labs and Mixed Breed dogs & cats)
              <br />
            </div>

            <div>
              Be sure to research different rescue groups in our state as there are many volunteers that help with transporting of animals in need.
            </div>
          </div>
        </ExpandableDropdown>

        <ExpandableDropdown title="Spay & Neuter Locations">
          <div className='mb-5 p-5 flex flex-col max-w-6xl w-[100%] self-center gap-10'>

            <div>
              Low Cost Spay Neuter Opinions:
            </div>

            <div>
              Robinson’s Rescue Low Cost Spay Neuter
              <br />
              2515 Line Avenue
              <br />
              Shreveport, Louisiana 71104
              <br />
              <a className="font-bold text-[#7F3F98]" href='tel:318-221-0017'>
                318-221-0017
              </a>
              <br />
              <a className="font-bold text-[#7F3F98]" href='www.robinsonrescue.org'>
                www.robinsonrescue.org
              </a>
            </div>

            <div>
              Spay Nation
              <br />
              1640 North Bertrand Drive
              <br />
              Lafayette, LA 70506
              <br />
              <a className="font-bold text-[#7F3F98]" href='tel:337-264-1088'>
                (337) 264-1088
              </a>
              <br />
              <a className="font-bold text-[#7F3F98]" href='mailto:spaynation@gmail.com'>
                spaynation@gmail.com
              </a>
              <br />
              <a className="font-bold text-[#7F3F98]" href='www.spaynation.net'>
                www.spaynation.net
              </a>
            </div>

            <div>
              Cenla Alliance for Animals (CAFA)
              <br />
              P.O. Box 8641
              <br />
              Alexandria, LA 71306
              <br />
              <a className="font-bold text-[#7F3F98]" href='www.cenlaanimals.com'>
                www.cenlaanimals.com
              </a>
              <br />
              <a className="font-bold text-[#7F3F98]" href='tel:318-443-0010'>
                318-443-0010
              </a>
              <br />
              *CAFA provides financial assistance to individuals that need to have their pets spayed or neutered.
            </div>

          </div>
        </ExpandableDropdown>

        <ExpandableDropdown title="Animal Cruelty">
          <div className='mb-5 p-5 flex flex-col max-w-6xl w-[100%] self-center gap-10'>
            <div>
              Top 10 Tips for Reporting Animal Cruelty
            </div>

            <div>
              1. Find out where to report cruelty.
            </div>

            <div>
              2. When you know who to contact, provide a concise, written, factual statement of what you observed, giving dates and approximate times whenever possible.
            </div>

            <div>
              3. If at all feasible, try to photograph the abusive situation and date your pictures.
            </div>

            <div>
              4. It would also be helpful to get short, factual written statements from other witnesses.
            </div>

            <div>
              5. When you call to report animal cruelty, always make sure to keep a careful record of exactly whom you contact, the date of the contacts and the content and outcome of your discussion.
            </div>

            <div>
              6. Never give away a document without making a copy for your file!
            </div>

            <div>
              7. Make it clear to the agent that you are very interested in pursuing the case, and that you are willing to lend whatever assistance you can.
            </div>

            <div>
              8. Follow up! If you don't receive a response from the officer assigned to your case within a reasonable length of time, don't be afraid to present your information to his or her supervisor and, if necessary, to local government officials, such as the county commissioner, and ask them to act.
            </div>

            <div>
              9. If you have witnessed the cruel act yourself, you can go to your local police commissioner and ask to swear out a warrant to summon the accused person to court.
            </div>

            <div>
              10. Remember that expert witnesses are sometimes necessary in animal cruelty cases. A veterinarian, for example, can sign a statement that it is his or her "expert opinion" that a dog suffers when hit with a chain, is deprived of food, etc. Expert opinions will very often make or break a case, so if you happen to know a sympathetic veterinarian, you may wish to seek his or her assistance and tell the officer that you have expert support lined up for your case.
            </div>

          </div>
        </ExpandableDropdown>

        <ExpandableDropdown title="Lost & Found">
          <div className='mb-5 p-5 flex flex-col max-w-6xl w-[100%] self-center gap-10'>
            <div>
              Please Check on Facebook page regarding the Lost & Found.
              BARK shares any lost & found pets in the area.
            </div>
            <div>
              If you found the pet, please make flyers to post on our Facebook page.
            </div>
          </div>
        </ExpandableDropdown>

      </div>

    </div>
  );
};

export default Resources