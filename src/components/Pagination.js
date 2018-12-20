/**
 * pagination component for posts
 * 
 * @2018/12/19
 */

import React from 'react';
import {Link } from 'gatsby';

const ulstyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  listStyle: 'none',
}

const lkstyle = (i, currentPage) => {
  return {
    padding: 10,
    textDecoration: 'none',
    color: i + 1 === currentPage ? '#ffffff' : '', 
    background: i + 1 === currentPage ? '#007acc' : ''
  }
}

const Pagination = ({currentPage, numPages}) => {

  let isFirst = currentPage === 1;
  let  prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
  let isLast = currentPage === numPages;
  let nextPage = (currentPage + 1).toString();
  
  return (
    <ul style={ulstyle}>
      {
        !isFirst &&
        <Link to={prevPage} rel="prev">← Previous Page</Link>
      }
      {
        Array.from({ length: numPages }, (_, i) => (
          <li
           key={`pagination-number${i + 1}`}
           style={{
             margin: 0,
           }}
          >
            <Link 
              to={`/${i === 0 ? '' : i + 1}`}
              style={lkstyle(i, currentPage)}
            >
              {i + 1}
            </Link>
          </li>
        ))
      }
      {
        !isLast &&
        <Link to={nextPage} rel="next">Next Page →</Link>
      }
    </ul>
  )
}

// TODO, add propTypes
// Pagination.propTypes = {}

export default Pagination