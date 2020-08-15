import React from 'react';
import { Link } from "react-router-dom";
import { Nav } from 'bootstrap-4-react';

const Pagination = ({ usersPerPage, totalListOfUsers, paginate }) => {
    const pageNumber = [];

    for (let i = 1; i<=Math.ceil(totalListOfUsers / usersPerPage); i++){
        pageNumber.push(i);
    }

    return (
        <Nav 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            className="mt-2 mb-2"
        >
            <ul className="pagination">
                {pageNumber.map(number => (
                    <li key={number} className="page-item">
                        <Link 
                            onClick={() => paginate(number)} 
                            to="users#" 
                            className="page-link"
                        >{number}</Link>
                    </li>
                ))}
            </ul>
        </Nav>
    )
}

export default Pagination;