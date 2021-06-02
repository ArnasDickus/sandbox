import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

interface ICustomNavLink {
  to: string;
  activeClassName: string;
  children: string;
}

const CustomNavLink: React.FC<ICustomNavLink> = ({ to, activeClassName, children }) => (
  <NavLink to={to} activeClassName={activeClassName} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{children}</NavLink>
);


export default CustomNavLink;
