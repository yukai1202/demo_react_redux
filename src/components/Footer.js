import React from 'react';
import FilterLink from '../containers/FilterLink'
import { Link } from 'react-router'
const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>

    Links:
        {' '}
        <Link to="/">about</Link>
        {' '}
        <Link to="/home">home</Link>
        {' '}
 
  </p>
 
)

export default Footer