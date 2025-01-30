import Hero from "./(components)/Application/Hero/Hero";
import ContactInfoContainer from "./(components)/Application/ContactInfo/ContactInfoContainer/ContactInfoContainer";
import ProfileCard from "./(components)/Application/Profile/ProfileCard/ProfileCard";
import ProjectsContainer from "./(components)/Application/Project/ProjectsContainer/ProjectsContainer";
import SectionWrapper from "./(components)/Wrapper/SectionWrapper/SectionWrapper";
import ExperienceContainer from "./(components)/Application/Experience/ExperienceContainer/ExperienceContainer";
import { experienceCurrent, experiencesStart } from "@/data";
import EducationContainer from "./(components)/Application/Education/EducationContainer/EducationContainer";

export default function Home() {
  return (
    <>
      <SectionWrapper className='flex flex-col lg:flex-row mt-0 items-center'>
        <Hero />
        <ProfileCard />
      </SectionWrapper>
      <SectionWrapper>
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
    </>
  );
}
