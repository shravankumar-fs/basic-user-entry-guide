import React from 'react';
import Card from '../Card';
import Button from '../Button';
import styles from './ErrorModal.module.css';

import ReactDOM from 'react-dom';

class BackDrop extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return <div onClick={this.props.closeThis} className={styles.backDrop} />;
  }
}

class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <Card className={styles.modal}>
        <header>
          <h2>{this.props.error.title || 'An Error Occured!'}</h2>
        </header>
        <div className={styles.content}>
          <p>{this.props.error.message || 'Something went wrong! :( '}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={this.props.closeThis}>Okay</Button>
        </footer>
      </Card>
    );
  }
}

export default class ErrorModal extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <>
        {ReactDOM.createPortal(
          <BackDrop closeThis={this.props.closeThis} />,
          document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal(
          <Overlay error={this.props.error} closeThis={this.props.closeThis} />,
          document.getElementById('overlay-root')
        )}
      </>
    );
  }
}
