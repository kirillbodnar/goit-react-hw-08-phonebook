import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export function Navigation() {
  return (
    <>
      <div className={s.Container}>
        <NavLink to="/" className={s.Link}>
          Contacts
        </NavLink>
        <NavLink to="register" className={s.Link}>
          Register
        </NavLink>
        <NavLink to="login" className={s.Link}>
          Login
        </NavLink>
      </div>
    </>
  );
}
