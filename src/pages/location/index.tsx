import Header from "../../../components/header"
import Main from "../../../components/mainContainer"

export default function Location() {
  return (
    <Main>
      <div className="container mx-auto flex flex-col items-center px-4 py-12">
        <Header displayText="Standort und Anfahrt" />
        <div className="mt-8 space-y-2 bg-backgroundColor p-6 text-center shadow-lg dark:bg-gray-800">
          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            Bitzfeld ist ein Ortsteil der Gemeinde Bretzfeld und liegt an der
            A6s Heilbronn - Nürnberg. Von Heilbronn kommend: Ausfahrt Bretzfeld
            Von Nürnberg kommend: Ausfahrt Öhringen Nach Bitzfeld sind es
            jeweils 4km (der Beschilderung folgen). Formenbau:
          </p>
        </div>
        <div className="mt-8 h-auto w-full">
          <iframe
            className="w-full" // Dies sorgt dafür, dass die Breite der Karte sich an den Container anpasst
            height="450" // Du kannst die Höhe anpassen, um das richtige Verhältnis zu erhalten
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://maps.google.de/maps?f=q&amp;source=s_q&amp;hl=de&amp;geocode=&amp;q=Wei%C3%9Flensburger+Stra%C3%9Fe+6,+Bitzfeld,+Bretzfeld&amp;aq=t&amp;sll=49.187222,9.443672&amp;sspn=0.002135,0.004624&amp;t=m&amp;ie=UTF8&amp;hq=&amp;hnear=Wei%C3%9Flensburger+Stra%C3%9Fe+6,+Bitzfeld+74626+Bretzfeld,+Stuttgart,+Baden-W%C3%BCrttemberg&amp;z=14&amp;ll=49.190184,9.445164&amp;output=embed"
          ></iframe>
        </div>
      </div>
    </Main>
  )
}
