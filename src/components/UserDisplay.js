import React from 'react';
import { UserItem } from './UserItem';
import styles from './UserDisplay.module.css';
import Card from '../UI/Card';

export class UserDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      this.props.list.length > 0 && (
        <Card>
          <div className={styles.displayPanel}>
            {this.props.list.map((item) => (
              <UserItem key={Math.random()} data={item} />
            ))}
          </div>
        </Card>
      )
    );
  }
}
