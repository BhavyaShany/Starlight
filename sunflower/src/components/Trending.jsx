import React, { useState } from 'react';

export const Trending = () => {
  const boards = [
    // Page 1
    { id: "#19", t: "Workwear edits", img: "https://i.pinimg.com/736x/89/fe/b8/89feb85e4f4535dd3276b73e3fb43b6d.jpg" },
    { id: "#20", t: "Lisbon city guide", img: "https://i1-c.pinimg.com/1200x/cb/37/1b/cb371b4d0b9f63c625d6b0d2b0c2fc67.jpg" },
    { id: "#21", t: "No-bake desserts", img: "https://i.pinimg.com/736x/25/8e/68/258e680ff519f417c9a30ac0558741bd.jpg" },
    // Page 2
    { id: "#22", t: "Mid-century vibes", img: "https://i.pinimg.com/736x/97/59/14/97591457888e163efc99434d54078cee.jpg" },
    { id: "#23", t: "Athleisure looks", img: "https://i1-c.pinimg.com/1200x/fd/1c/80/fd1c80587a15c3f375394889bf164639.jpg" },
    { id: "#24", t: "Patagonia trekking", img: "https://i1-c.pinimg.com/1200x/94/02/03/940203dbff5a981feaae52859e7a1344.jpg" },
    // Page 3
    { id: "#25", t: "Minimalist desk", img: "https://i.pinimg.com/736x/d5/f4/55/d5f455bd810cc86f0140def8337e6031.jpg" },
    { id: "#26", t: "Japan street food", img:"https://i.pinimg.com/736x/e8/1f/0c/e81f0ca6a2b4495d4a3e1a9e7e828f11.jpg" },
    { id: "#27", t: "Summer ceramics", img: "https://i.pinimg.com/736x/0c/d5/13/0cd51337f064ef29befa7190a0decf16.jpg" }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 
  const totalPages = 3;

  const currentBoards = boards.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  return (
    <section id="explore" className="max-w-7xl mx-auto px-8 py-24">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-5xl font-bold tracking-tight text-white">Trending boards</h2>
        <p className="text-gray-500 text-sm font-medium">Page {currentPage} of 3</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentBoards.map((b, i) => (
          <div key={i} className="group cursor-pointer">
            {/* THE FIX: Use an image tag inside a container with overflow-hidden */}
            <div className="relative aspect-square rounded-4xl overflow-hidden border border-white/5 transition-transform hover:scale-[0.98]">
              <img 
                src={b.img} 
                alt={b.t} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay to ensure ID is readable */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              <span className="absolute top-6 right-8 text-[11px] font-bold text-white opacity-80 z-10">
                {b.id}
              </span>
            </div>
            
            <h3 className="mt-6 text-lg font-bold text-white">{b.t}</h3>
            <p className="text-xs text-gray-500 mt-1">200+ pins · 80 followers</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-20 flex justify-center items-center gap-2">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed"
        >
          ‹ Previous
        </button>
        
        <div className="flex items-center gap-1">
          {[1, 2, 3].map((num) => (
            <button 
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`w-10 h-10 rounded-xl text-sm font-medium transition-all
                ${currentPage === num 
                  ? 'bg-white/10 text-white border border-white/10' 
                  : 'text-gray-600 hover:bg-white/5 hover:text-gray-300'
                }`}
            >
              {num}
            </button>
          ))}
        </div>

        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed"
        >
          Next ›
        </button>
      </div>
    </section>
  );
};
