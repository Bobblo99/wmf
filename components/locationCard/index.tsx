import React from "react";

const LocationCard = () => {
  return (
    <div className="bg-backgroundColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]  p-6 dark:bg-gray-800 text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Unser Standort:</h2>
      <p className="text-gray-800 dark:text-gray-300">
        Weißlensburger Str. 6<br />
        74626 Bretzfeld - Bitzfeld
      </p>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300 mt-6">Postadresse:</h3>
      <p className="text-gray-800 dark:text-gray-300">
        Fritz Walter<br />
        Modell- und Formenbau GmbH<br />
        Weißlensburger Str. 6<br />
        74626 Bretzfeld - Bitzfeld
      </p>

      <div className="flex justify-center mt-6">
        <div className="text-gray-800 dark:text-gray-300">
          <p>Tel.: 07946-9143-0</p>
          <p>Fax: 07946-9143-77</p>
          <p>E-Mail: <a href="mailto:Modellbau-Walter@t-online.de" className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-300">Modellbau-Walter@t-online.de</a></p>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
