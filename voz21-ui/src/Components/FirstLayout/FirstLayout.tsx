import React from 'react'

const FirstLayout = () => {
  const cardStyle = {
    // backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div>
        <h2>Voz 21 es una Agencia de locución</h2>

        <div
      className="bg-white rounded-lg shadow-md p-4 
        ${window.innerWidth > 1200 ? 'w-80 h-80' : 'w-40 h-40'}` 
        overflow-hidden transition-transform transform scale-100 
        hover:scale-110 "
      style={cardStyle}
    >
      <div className="bg-opacity-75 rounded-t-lg p-4">
        <div className="md:py-5 md:my-5 lg:py-20 lg:my-20 space-y-5 sm:py-20"></div>
        <h2 className="text-xl font-semibold text-white">Dos</h2>
        <p className="text-gray-200">Uno</p>
      </div>
    </div>

    </div>
  )
}

export default FirstLayout