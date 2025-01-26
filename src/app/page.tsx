import Hero from "./(components)/Application/Hero/Hero";
import ContactInfoContainer from "./(components)/Application/ContactInfo/ContactInfoContainer/ContactInfoContainer";
import ProfileCard from "./(components)/Application/Profile/ProfileCard/ProfileCard";
import ProjectsContainer from "./(components)/Application/Project/ProjectsContainer/ProjectsContainer";
import SectionWrapper from "./(components)/Wrapper/SectionWrapper/SectionWrapper";
import ExperienceContainer from "./(components)/Application/Experience/ExperienceContainer/ExperienceContainer";

export default function Home() {
  return (
    <>
      <SectionWrapper className='flex'>
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
        <ExperienceContainer />
      </SectionWrapper>
      <SectionWrapper title="How it's going">Bla bla</SectionWrapper>
    </>
  );
}
