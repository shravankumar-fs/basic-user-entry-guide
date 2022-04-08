import React from 'react';
import styles from './UserItem.module.css';
export class UserItem extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className={styles.userItem}>
        {this.props.data.username} ({this.props.data.age} years old)
      </div>
    );
  }
}
