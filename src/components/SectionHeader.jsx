const SectionHeader = ({title}) => {
    return (
      <div className='w-full p-4 bg-[#214038] flex justify-center items-start'>
        <div className="max-w-6xl w-full">
          <h1 className="text-base font-[Poppins] font-semibold text-[#F9F9F9]">{title}</h1>
        </div>
      </div>
    )
} 

export default SectionHeader