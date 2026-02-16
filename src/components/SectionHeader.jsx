import React from 'react';

const SectionHeader = ({ title, subtitle, align = "left" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9]">
      {title.split(' ').map((word, i) => (
        <span key={i} className={i % 2 !== 0 ? "text-red-600 block md:inline" : "block md:inline"}>{word} </span>
      ))}
    </h2>
    {subtitle && <p className="text-xs font-mono mt-4 uppercase tracking-widest opacity-60">/// {subtitle}</p>}
  </div>
);

export default SectionHeader;
