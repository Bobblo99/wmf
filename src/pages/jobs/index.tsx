import React, { useState } from "react"
import { GetServerSideProps } from "next"
import { createClient } from "contentful"

import Header from "../../../components/header"
import Main from "../../../components/mainContainer"

// interface Job {
//   id: string
//   title: string
//   shortDescription: string
//   details: string
// }

// interface JobsPageProps {
//   jobs: Job[]
// }

// Definiere die getServerSideProps Funktion
export const getServerSideProps: GetServerSideProps = async (context) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  })

  const res = await client.getEntries({ content_type: "jobs" })

  return {
    props: {
      jobs: res.items,
    },
  }
}

export default function JobPage({ jobs }: any) {
  console.log(jobs)

  return (
    <>
      <Main>
        <div className=" container mx-auto grid grid-cols-1 grid-rows-1 gap-10">
          <Header displayText="Stellenanzeige" />
          {/* <JobList jobList={jobss} /> */}
          <JobList />
          {jobs.map((jobs: any) => {
            console.log(jobs)
            return <div key={jobs.sys.id}>{jobs.fields.title}</div>
          })}
        </div>
      </Main>
    </>
  )
}

// Annahme eines Job-Typs für die Demonstration
interface Job {
  id: number
  title: string
  shortDescription: string
  details: string
}

// Beispiel-Daten
const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend-Entwickler",
    shortDescription:
      "Spannende Gelegenheit für einen erfahrenen Frontend-Entwickler.",
    details: "Vollzeitstelle, Erfahrung mit React und TypeScript erforderlich.",
  },
  {
    id: 2,
    title: "Backend-Entwickler",
    shortDescription: "Treten Sie unserem Backend-Entwicklungsteam bei!",
    details:
      "Auf der Suche nach jemandem mit Erfahrung in Node.js und Datenbanken.",
  },
  // Füge hier weitere Jobs hinzu
]

const JobList = () => {
  const [openJobId, setOpenJobId] = useState<number | null>(null)

  const toggleJob = (id: number) => {
    setOpenJobId(openJobId === id ? null : id)
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="overflow-hidden rounded-lg border transition duration-500 ease-in-out dark:border-gray-600"
        >
          <div className="bg-light-200 dark:bg-darker-800 flex w-full items-center justify-between p-4">
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">
                {job.title}
              </div>
              <div className="text-light-600 dark:text-gray-400">
                {job.shortDescription}
              </div>
            </div>
            <button
              onClick={() => toggleJob(job.id)}
              className="dark:text-purpleDark-400 dark:hover:text-purpleDark-500 text-purple-600 underline hover:text-purple-700 focus:outline-none"
            >
              {openJobId === job.id ? "Weniger anzeigen" : "Mehr anzeigen"}
            </button>
          </div>
          <div
            className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${openJobId === job.id ? "max-h-96" : "max-h-0"} dark:bg-darker-900 bg-white`}
          >
            <div className="p-4 text-gray-900 dark:text-gray-200">
              <p>{job.details}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
