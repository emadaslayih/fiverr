import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';

class DonationDetail extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    if(_.isEmpty(this.props.currentItem)) {
      this.setState({ loading: true }, () => {
        this.props.actionFetchItem(id, () => {
          this.setState({ loading: false });
        });
      })
    }
  }

  render() {
    if(_.isEmpty(this.props.currentItem)) {
      return <div>Loading</div>
    }
    const styles = {
      image: {
        width: 200,
        height: 200
      }
    }
    const { name, image } = this.props.currentItem;
    return (
      <div>
        <p>{name}</p>
        <img src={require(`../assets/avatars/${image}`)} 
          style={styles.image}
          alt="donation person" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentItem: state.currentItem
  };
}

export default connect(mapStateToProps, actions)(DonationDetail);