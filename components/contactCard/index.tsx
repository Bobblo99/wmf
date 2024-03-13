const ContactCard = ({ name, role, phone, email, imageSrc }: IContactCard) => {
  return (
    <div className=" bg-white p-6 shadow-lg dark:bg-gray-800 w-80">
      <div className="mb-4 flex items-center space-x-6">
        <img
          className="h-24 w-24 rounded-full object-cover object-center"
          src={imageSrc}
          alt={`${name}`}
        />
        <div className=" space-y-2">
          <p className="text-xl text-gray-800 dark:text-white">{name}</p>
          <p className="text-gray-700 dark:text-gray-300">{role}</p>
          <p className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-300">
            <a href={`tel:${phone}`}>
              <div className="flex justify-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 text-black dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              {phone}
              </div>
            </a>
          </p>
          <p className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-300">
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
      </div>
    </div>
  )
}
export default ContactCard
