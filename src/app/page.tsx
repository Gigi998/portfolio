import Hero from "./(components)/Application/Hero/Hero";
import ContactInfoContainer from "./(components)/Application/ContactInfo/ContactInfoContainer/ContactInfoContainer";
import ProfileCard from "./(components)/Application/Profile/ProfileCard/ProfileCard";
import ProjectsContainer from "./(components)/Application/Project/ProjectsContainer/ProjectsContainer";
import SectionWrapper from "./(components)/Wrapper/SectionWrapper/SectionWrapper";
import ExperienceContainer from "./(components)/Application/Experience/ExperienceContainer/ExperienceContainer";
import { experienceCurrent, experiencesStart } from "@/shared/data";
import EducationContainer from "./(components)/Application/Education/EducationContainer/EducationContainer";
import Button from "./(components)/Basic/Button/Button";
import { Type } from "./(components)/Basic/Button/constants";
import ResumeIcon from "@/assets/icons/resume.svg";
import { resumeUrl } from "@/shared/contants";
import PageWrapper from "./(components)/Wrapper/PageWrapper/PageWrapper";

export default function Home() {
  return (
    <PageWrapper className='py-4'>
      <SectionWrapper className='flex flex-col lg:flex-row lg:mt-10 mt-0 items-center'>
        <Hero />
        <ProfileCard />
      </SectionWrapper>
      <SectionWrapper>
        <Button
          href={resumeUrl}
          className='w-fit mx-auto h-14 mb-10'
          element={Type.Link}
          download='Luigi_CV.pdf'
          startIcon={<ResumeIcon className='w-6 h-6 fill-primary' />}
        >
          Download CV
        </Button>
        <ContactInfoContainer />
      </SectionWrapper>
      <SectionWrapper title='Projects'>
        <ProjectsContainer />
      </SectionWrapper>
      <SectionWrapper title='How it all started'>
        <ExperienceContainer experiences={experiencesStart} />
      </SectionWrapper>
      <SectionWrapper title="How it's going">
        <ExperienceContainer experiences={experienceCurrent} />
      </SectionWrapper>
      <SectionWrapper title='Education'>
        <EducationContainer />
      </SectionWrapper>
    </PageWrapper>
  );
}
