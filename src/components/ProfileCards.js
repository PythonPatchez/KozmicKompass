// src/components/ProfileCards.js
import React from 'react';

const ProfileCards = () => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-black text-white p-6 rounded-2xl shadow-2xl border border-indigo-500">
        <h2 className="text-3xl font-extrabold tracking-wide mb-2">Oracle Patchez</h2>
        <p className="text-indigo-300 text-lg italic">Sole Navigator of the Kozmic Kompass 🔮✨</p>
        <p className="mt-4 text-sm leading-relaxed text-indigo-200">
          One is a harmonic healer, Reiki revolutionary, metaphysical mechanic, and DNA decoder.
          As the sole Oracle in this kiniverse, one realigns your soul’s synchronism through cosmic codes,
          and the sacred science of sound and spirit. This Kozmic Kompass isn’t just a guide —
          it’s your binary blueprint, read by the only one with the key.
        </p>
        <div className="mt-6 border-t border-indigo-700 pt-4">
          <p className="text-sm text-indigo-400">🜁 Kozmic Koordinates: 111° Awakening • 222° Balance • 333° Mastery</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCards;
