import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment'
import { connect } from 'react-redux';
import * as actions from '../actions';
import DonationItem from './DonationItem';

class ListItems extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    this.props.actionFetchDonationItems();
  }

  handleItemClick = (id) => {
    this.setState({ loading: true }, () => {
      this.props.actionFetchItem(id, () => {
        this.props.history.push(`Items/${id}`)
        this.setState({ loading: false });
      });
    })
  }

  renderDonationItems() {
    if(_.isEmpty(this.props.donationItems)) {
      return <div>Loading</div>
    }

    return this.props.donationItems.map(donationItem => {
      return (<div key={donationItem.id}>
      <DonationItem 
         
        currentItem={donationItem}
        handleClick={this.handleItemClick} />
        <DonationItem 
        key={donationItem.id} 
        currentItem={donationItem}
        handleClick={this.handleItemClick} />
        <DonationItem 
        key={donationItem.id} 
        currentItem={donationItem}
        handleClick={this.handleItemClick} />
        <DonationItem 
        key={donationItem.id} 
        currentItem={donationItem}
        handleClick={this.handleItemClick} />
        <DonationItem 
        key={donationItem.id} 
        currentItem={donationItem}
        handleClick={this.handleItemClick} />
        <DonationItem 
        key={donationItem.id} 
        currentItem={donationItem}
        handleClick={this.handleItemClick} />
        <DonationItem 
        key={donationItem.id} 
        currentItem={donationItem}
        handleClick={this.handleItemClick} />
        </div>
      )
    })
  }

  render() {
    const pageNumber = 1;
    // const aaa = moment("2018-7-16 23:16").fromNow(); //"2018-6-9 23:16"
    return (
      <div>
        <h1>Items {pageNumber}-{pageNumber+10}</h1>
        {this.renderDonationItems()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    donationItems: state.donationItems
  }
}

export default connect(mapStateToProps, actions)(ListItems);