import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? [s.link, s.active].join(' ') : s.link;
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="movies"
        className={({ isActive }) => {
          return isActive ? [s.link, s.active].join(' ') : s.link;
        }}
      >
        Movies
      </NavLink>
    </nav>
  );
};
export default Navigation;
