import React from 'react';
import styles from './Card.module.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let additional = this.props.className;
    return (
      <div className={`${styles.Card} ${additional ? additional : ''}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
