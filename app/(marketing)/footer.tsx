import { FlagButton } from '@/components/flag-button';

const displayCountries = [
  {
    id: 1,
    imagePath: '/flags/it.svg',
    altText: 'Italian',
    title: 'Italian',
  },

  {
    id: 2,
    imagePath: '/flags/hr.svg',
    altText: 'Croatian',
    title: 'Croatian',
  },

  {
    id: 3,
    imagePath: '/flags/es.svg',
    altText: 'Spanish',
    title: 'Spanish',
  },

  {
    id: 4,
    imagePath: '/flags/jp.svg',
    altText: 'Japanese',
    title: 'Japanese',
  },

  {
    id: 5,
    imagePath: '/flags/fr.svg',
    altText: 'French',
    title: 'French',
  },
];
export const Footer = () => {
  return (
    <footer className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        {displayCountries.map((country) => (
          <FlagButton
            key={country.id}
            imagePath={country.imagePath}
            altText={country.altText}
            title={country.title}
          />
        ))}
      </div>
    </footer>
  );
};
