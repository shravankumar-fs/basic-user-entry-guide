import React from 'react';

import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

export class ErrorModal extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  closeThis() {
    return;
  }

  render() {
    return (
      <>
        <div className={styles.backDrop} />
        <Card className={styles.modal}>
          <header>
            <h2>{this.props.title || 'An Error Occured!'}</h2>
          </header>
          <div className={styles.content}>
            <p>{this.props.message || 'Something went wrong! :( '}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={this.closeThis}>Okay</Button>
          </footer>
        </Card>
      </>
    );
  }
}
