import { useState } from "react";
import { usePet } from "../utilities/PetContext";
import { Link } from "react-router-dom";
import AdoptionForms from "../components/AdoptionForms/AdoptionForms";
import Logo from "../assets/NewLogo.svg"

const AdoptionPage = () => {
  const { getPetByType } = usePet();
  const [pets, setPets] = useState([]);
  const [zipcode, setZipcode] = useState("");
  const [error, setError] = useState("");

  const handleButtonClick = async (animalType) => {
    if (isNaN(zipcode) || zipcode === "") {
      setError("Please enter a valid zipcode.");
      return;
    }
    try {
      setError("");
      const petsByType = await getPetByType(animalType, zipcode);
      console.log(petsByType)
      setPets(petsByType);
    } catch (error) {
      console.error("Error fetching pets:", error);
      setError("Error fetching pets. Please try again.");
    }
  };



  return (
    <div>
      <h1>AdoptionPage</h1>
      <div className="flex gap-10 m-10 ">
        <input className=" bg-slate-500 text-white p-2" placeholder="zip code" type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
        <button className="px-5 py-3 rounded-lg bg-purple-100" onClick={() => handleButtonClick("dog")}>Get Dogs</button>
        <button className="px-5 py-3 rounded-lg bg-purple-100" onClick={() => handleButtonClick("cat")}>Get Cats</button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {/* below is code to make sure you are getting results. we still need to ad css to the page container which is why it looks very funky 
      when the below code is uncommented */}
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Age</th>
              <th>Breed</th>
              <th>Gender</th>
              {/* <th>Url</th> */}
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <tr key={pet.id}>
                <td>
                  {pet.photos.length > 0 && ( 
                  <img src={pet.photos[0].small} alt={pet.name} style={{ maxWidth: '100px'}} />)}
                </td>
                <Link to={`/adoption/${pet.id}`}>{pet.name}</Link>
                <td>{pet.age}</td>
                <td>{pet.breeds.length > 0 && pet.breeds.primary}</td>
                <td>{pet.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="font-bold p-3 bg-[#214038] text-white">Adopt a Pet</div>
        <p class="p-5">If you would like to adopt a pet, please fill out the applicable form below and send it to LongJ1003@aol.com when complete.</p>
        <AdoptionForms/>
        <img src={Logo}></img>
        <p>Find your new best friend today!</p>
    </div>
  );
};

export default AdoptionPage;
