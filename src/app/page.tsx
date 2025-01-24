import Hero from "./(components)/Application/Hero/Hero";
import ContactInfoContainer from "./(components)/Application/ContactInfo/ContactInfoContainer/ContactInfoContainer";
import ProfileCard from "./(components)/Application/Profile/ProfileCard/ProfileCard";

export default function Home() {
  return (
    <>
      <div className='flex'>
        <Hero />
        <ProfileCard />
      </div>
      <ContactInfoContainer />
    </>
  );
}
