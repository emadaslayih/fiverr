import React, { Component } from 'react';

class DonationItem extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleDetailsButtonClick = () => {
    const { id } = this.props.currentItem;
    this.props.handleClick(id);
  }

  render() {
    const { name, image } = this.props.currentItem;
    const styles = {
      item: {
        width: 300,
        height: 300
      },
      image: {
        width: 200,
        height: 200
      }
    }
    return (
      <div className="col-sm-4 col-md-3">
        <div className="list-group-item" style={styles.item}>
          {/* <img src={require(`../assets/avatars/${image}`)}  */}
          <img src={require(`../assets/avatars/person1.png`)}
            style={styles.image}
            alt="donation person" />
          <p>{name}</p>
          <button className="btn btn-primary" 
            onClick={this.handleDetailsButtonClick}>
            More
          </button>
        </div>
      </div>
    );
  }
}

export default DonationItem;