import UniversiyOfSplitImage from "@/assets/images/universityOfSplit.png";
import Image from "next/image";

const EducationContainer = () => {
  return (
    <div className='sm:ml-10 lg:ml-20  mt-10 flex gap-x-10 flex-col sm:flex-row items-center gap-y-10'>
      <Image
        src={UniversiyOfSplitImage}
        alt='University'
        className='rounded-3xl w-[200px] h-[200px] object-cover'
      />
      <div className='flex flex-col gap-y-2 text-secondary text-body-1 text-center sm:text-left'>
        <span className='text-2xl font-bold text-primary'>
          University of Split
        </span>
        <span>University department of professional studies</span>
        <span>{`Master's degree, Electrical and Electronics Engineering`}</span>
        <span>2017-2024</span>
      </div>
    </div>
  );
};

export default EducationContainer;
