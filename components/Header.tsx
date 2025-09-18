import React from 'react';
import { GoogleGIcon } from './icons/GoogleGIcon';

export const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800 tracking-tight sm:text-5xl flex items-center justify-center gap-3">
        <GoogleGIcon className="h-10 w-10 sm:h-12 sm:w-12" />
        <span>SWACOM Expert Finder 🧭</span>
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Find the right person for the job. Search by name, expertise, or popular themes.
      </p>
      <p className="mt-2 text-sm text-slate-500">Created by @robbiedenuzzo</p>
    </header>
  );
};
