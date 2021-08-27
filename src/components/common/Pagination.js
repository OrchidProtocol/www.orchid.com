import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const PaginationLink = styled.div`
    display: block;
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    vertical-align: middle;
    &[data-active="true"] {
        font-weight: bolder;
        text-decoration: underline;
    }
`;

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto var(--margin) auto;
    max-width: 400px;
`;

const Pagination = ({ pageContext }) => {
    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 <= 1 ? '/' : '/' + (currentPage - 1).toString()
    const nextPage = '/' + (Math.min(numPages, currentPage + 1)).toString()

    const pageElements = [];
    const pageStart = Math.max(1, currentPage - 2);
    const pageEnd = Math.min(numPages+1, pageStart + 5);
    for (let page = pageStart; page < pageEnd; page++) {
        pageElements.push(<Link to={page === 1 ? '/' : `/${page}/`}>
            <PaginationLink data-active={page === currentPage ? 'true' : 'false'}>
                {page}
            </PaginationLink>
        </Link>)
    }


    return (
        <PaginationContainer role="navigation">
            {prevPage && !isFirst && (
                <Link to={prevPage} rel="prev">
                    <PaginationLink>
                        &laquo;
                    </PaginationLink>
                </Link>
            )}

            {pageStart > 1 && <>
                <Link to="/">1</Link>
                <span>...</span>
            </>}

            {pageElements}

            {pageEnd <= numPages && <>
                <span>...</span>
                <Link to={`/${numPages}`}>{numPages}</Link>
            </>}

            {nextPage && !isLast && (
                <Link to={nextPage} rel="next">
                    <PaginationLink>
                        &raquo;
                    </PaginationLink>
                </Link>
            )}
        </PaginationContainer>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default Pagination
