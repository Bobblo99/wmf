import Header from "../../../components/header"
import Main from "../../../components/mainContainer"

export default function Impressum() {
  return (
    <>
      <Main>
        <div className="container mx-auto grid grid-cols-1 grid-rows-1 gap-10 text-gray-800 dark:text-gray-300">
          <Header displayText="Impressum" />

          <div className="mx-auto flex max-w-lg flex-col items-center break-words text-center text-lg">
            <h2 className="mb-2 text-xl font-semibold">
              Angaben gemäß § 5 TMG:
            </h2>
            <p>
              Fritz Walter Modell- und Formenbau GmbH Weißlensburger Str. 6
              74626 Bretzfeld-Bitzfeld
              <br />
              Handelsregister: HRB 398 Registergericht: Amtsgericht Schwäbisch
              Hall
            </p>
            <h2 className="mb-2 mt-4 text-xl font-semibold">
              Vertreten durch den Geschäftsführer:
            </h2>
            <p>Manfred Walter</p>
            <h2 className="mb-2 mt-4 text-xl font-semibold">Kontakt:</h2>
            <p>
              <p>Telefon: +49 (0) 7946 9143 0</p>
              <p>Telefax: +49 (0) 7946 9143 77</p>
              <a
                className=" text-blue-800 underline"
                href={`mailto:${"modellbau-walter@t-online.de"}`}
              >
                modellbau-walter@t-online.de
              </a>
            </p>
            <h2 className="mb-2 mt-4 text-xl font-semibold">Umsatzsteuer</h2>
            <div className="space-y-4 text-gray-800 dark:text-gray-300">
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß §27 a
                Umsatzsteuergesetz: DE 206740640
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
            <div className="space-y-4 text-gray-800 dark:text-gray-300">
              <h2 className="mb-2 mt-4 text-xl font-semibold">
                Haftung für Inhalte
              </h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>{" "}
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </div>{" "}
            <div className="space-y-4 text-gray-800 dark:text-gray-300">
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß §27 a
                Umsatzsteuergesetz: DE123456789
              </p>
              <h2 className="mb-2 mt-4 text-xl font-semibold">
                Haftung für Links
              </h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>{" "}
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </p>
            </div>{" "}
            <div className="space-y-4 text-gray-800 dark:text-gray-300">
              <h2 className="mb-2 mt-4 text-xl font-semibold">Urheberrecht</h2>
              <p>
                Urheberrecht Die durch die Seitenbetreiber erstellten Inhalte
                und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und
                jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                Erstellers. Downloads und Kopien dieser Seite sind nur für den
                privaten, nicht kommerziellen Gebrauch gestattet.
              </p>{" "}
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
            </div>
            <p className="mt-8">
              Quelle:{" "}
              <a
                className="text-blue-800 underline hover:text-blue-900 dark:text-blue-800"
                href="https://www.e-recht24.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                e-recht24.de
              </a>
            </p>
          </div>
        </div>
      </Main>
    </>
  )
}
