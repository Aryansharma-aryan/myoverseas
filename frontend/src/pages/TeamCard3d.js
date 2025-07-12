// src/components/TeamCard.js
import React from "react";

const TeamCard = ({ name, role, image }) => {
  return (
    <div className="w-[280px] h-[380px] rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 relative group hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute bottom-0 w-full bg-black/70 px-4 py-3 backdrop-blur-sm">
        <h3 className="text-white font-bold text-lg">{name}</h3>
        <p className="text-blue-300 text-sm">{role}</p>
      </div>
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-20 transition-all duration-700 pointer-events-none" />
    </div>
  );
};

export default TeamCard;
