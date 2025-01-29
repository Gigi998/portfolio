import UniversiyOfSplitImage from "@/assets/images/universityOfSplit.png";
import Image from "next/image";

const EducationContainer = () => {
  return (
    <div className='mt-10 flex gap-x-10'>
      <Image
        src={UniversiyOfSplitImage}
        alt='University'
        className='rounded-3xl w-[200px] h-[200px] object-cover'
      />
      <div className='flex flex-col gap-y-2'>
        <span className='text-2xl'>University of Split</span>
        <span className='text-body-1'>
          University department of professional studies
        </span>
        <span className='text-body-1'>
          Master's degree, Electrical and Electronics Engineering
        </span>
        <span>2017-2024</span>
      </div>
    </div>
  );
};

export default EducationContainer;
