import React from 'react'

const AdoptionForms = () => {
    return (
        <div class="flex flex-col">
            <a
                class="px-2 p-1 bg-[#E5BC01] rounded-full"
                href="../../assets/barkadoptionformcanine.doc"
                download="barkadoptionformcanine.doc">
                Canine Application</a>
            <a
                class="px-2 p-1 bg-[#E5BC01] rounded-full"
                href="src/assets/barkadoptionform.feline.doc"
                download="barkadoptionform.feline.doc">
                Feline Application</a>
        </div>
    )
}

export default AdoptionForms