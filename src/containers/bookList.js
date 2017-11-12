import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Grid, Col, Row} from "react-bootstrap";

import BookItem from "../components/bookItem";

import {getBooks} from "../actions/bookActions";

class BookList extends React.Component {
    componentDidMount() {
        // Dispatch an action
        this.props.getBooks();
    }

    render() {
        const bookList = this.props.books.map((book) => {
            return (
                <Col xs={12} sm={6} md={4} key={book._id}>
                    <BookItem
                        _id={book._id}
                        title={book.title}
                        description={book.description}
                        price={book.price}
                    />                                
                </Col>
            );
        });
        return (
            <Grid>
                <Row>
                    {bookList}                    
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books.books
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getBooks
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);