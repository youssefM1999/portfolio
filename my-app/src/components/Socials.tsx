import { FaGithub, FaInstagram, FaStrava } from 'react-icons/fa';

export const Socials = () => {
  return (
    <div className='socials'>
      <a href="https://github.com/youssefM1999" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://instagram.com/youssefkamel_" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.strava.com/athletes/120376507" target="_blank" rel="noopener noreferrer">
        <FaStrava />
      </a>
    </div>
  );
};