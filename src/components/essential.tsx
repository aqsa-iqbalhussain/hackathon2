export default function Essentials() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8  text-gray-800">
        The Essentials
      </h2>

      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Men's Section */}
        <div className="relative group aspect-w-16 aspect-h-9">
          <img
            src="/photos/essential1.png"
            alt="Men's"
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute left-4 bottom-4 bg-white py-2 px-4 text-sm font-medium rounded-full shadow-lg group-hover:scale-105 transition-transform">
            Men's
          </button>
        </div>

        {/* Women's Section */}
        <div className="relative group aspect-w-16 aspect-h-9">
          <img
            src="/photos/essential2.png"
            alt="Women's"
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute left-4 bottom-4 bg-white py-2 px-4 text-sm font-medium rounded-full shadow-lg group-hover:scale-105 transition-transform">
            Women's
          </button>
        </div>

        {/* Kids' Section */}
        <div className="relative group aspect-w-16 aspect-h-9">
          <img
            src="/photos/essential3.png"
            alt="Kid's"
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute left-4 bottom-4 bg-white py-2 px-4 text-sm font-medium rounded-full shadow-lg group-hover:scale-105 transition-transform">
            Kid's
          </button>
        </div>
      </div>
    </div>
  );
}