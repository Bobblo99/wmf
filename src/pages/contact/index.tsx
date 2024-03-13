import ContactCard from "../../../components/contactCard"
import Header from "../../../components/header"
import LocationCard from "../../../components/locationCard"
import Main from "../../../components/mainContainer"

export default function Location() {
  return (
    <Main>
      <div className="w-full max-w-6xl space-y-12">
        {" "}
        {/* Begrenzt die maximale Breite des Inhalts */}
        <Header displayText="Geschäftsführung" />
        <div className="mb-8 flex justify-center">
          {" "}
          {/* Zentriert die Karte horizontal */}
          <ContactCard
            name="Manfred Walter"
            role="Geschäftsführer"
            fax="07946-9143-77"
            phone="07946-9143-12"
            imageSrc="/avatar.jpg"
          />
        </div>
        <Header displayText="Formenbau" />
        <div className="flex flex-wrap justify-center gap-4">
          {" "}
          {/* Flex Container für Karten */}
          <ContactCard
            name="Karlheinz Sinn"
            role="Leiter Formenbau"
            fax="07946-9143-80"
            phone="07946-9143-13"
            imageSrc="/avatar.jpg"
          />
          <ContactCard
            name="Joachim Kircher"
            role="Programmierung Formenbau"
            fax="07946-9143-80"
            phone="07946-9143-20"
            imageSrc="/avatar.jpg"
          />
        </div>
        <div className="">
          <LocationCard />
        </div>
      </div>
    </Main>
  )
}
