import React, { Component } from 'react';

import Pagination from "react-js-pagination";

class MyPagination extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  // renderPages() {
  //   return [
  //     (<li className="page-item"><a className="page-link" href="#">Previous</a></li>),
  //     (<li className="page-item"><a className="page-link" href="#">1</a></li>),
  //     (<li className="page-item"><a className="page-link" href="#">2</a></li>),
  //     (<li className="page-item"><a className="page-link" href="#">3</a></li>),
  //     (<li className="page-item"><a className="page-link" href="#">Next</a></li>)
  //   ]
  // }

  render() {
    return (
      <div className="pagination-container">
        <Pagination
          hideDisabled
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.props.total || 1}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default MyPagination;