import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import SearchBox from '../../components/SearchBox/SearchBox';
import './MoviesPage.css'

 
function MoviesPage() {
 

    return (
        <div class="p-actors">
            <Container>
                <SearchBox 
                    placeholder="Search actors..." 
                    searchText="{searchText} "
                    onSearchChange="{handleSearchChange}"
                    results="ddd"/>
                <Row>
                    <Col>jj</Col>                    
                </Row>
            </Container>
        </div>
    );
}

export default MoviesPage;