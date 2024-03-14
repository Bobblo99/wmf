import Header from "../../../components/header"
import Main from "../../../components/mainContainer"

export default function Impressum() {
  return (
    <>
      <Main>
        <div className="container mx-auto grid grid-cols-1 grid-rows-1 gap-10 text-gray-800 dark:text-gray-300">
          <Header displayText="Impressum" />

          <div className="mx-auto flex max-w-md flex-col items-center break-words text-center">
            <h2 className="mb-2 text-xl font-semibold">
              Angaben gemäß § 5 TMG:
            </h2>
            <p>
              Ihr Unternehmen GmbH
              <br />
              Musterstraße 123
              <br />
              12345 Musterstadt
            </p>

            <h2 className="mb-2 mt-4 text-xl font-semibold">Kontakt:</h2>
            <p>
              E-Mail: info@ihre-unternehmen.de
              <br />
              Telefon: 01234 56789-0
            </p>

            <h2 className="mb-2 mt-4 text-xl font-semibold">
              Vertreten durch:
            </h2>
            <p>Geschäftsführer: Max Mustermann</p>

            <h2 className="mb-2 mt-4 text-xl font-semibold">
              Registereintrag:
            </h2>
            <p>
              Registergericht: Amtsgericht Musterstadt
              <br />
              Registernummer: HRB 12345
            </p>

            <h2 className="mb-2 mt-4 text-xl font-semibold">
              Umsatzsteuer-ID:
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
              DE123456789
            </p>

            <h2 className="mb-2 mt-4 text-xl font-semibold">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
            </h2>
            <p>
              Max Mustermann
              <br />
              Musterstraße 123
              <br />
              12345 Musterstadt
            </p>

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
