// app/page.js
'use client';

import React from 'react';
import ProfileCards from '@/components/ProfileCards';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-indigo-950 to-indigo-900 flex items-center justify-center">
      <div className="text-center px-4">
        <ProfileCards />
      </div>
    </main>
  );
}
