import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <ul class="flex justify-end pt-2 text-lg">
      <li class="mr-6 text-black hover:text-gray-600">
        <NavLink exact="true" to="/">
          home
        </NavLink>
      </li>
      <li class="mr-6 text-black hover:text-gray-600">
        <NavLink to="/projects">projects</NavLink>
      </li>
      <li class="mr-6 text-black hover:text-gray-600">
        <NavLink to="/resume">resume</NavLink>
      </li>
    </ul>
  );
}

export default NavBar;
