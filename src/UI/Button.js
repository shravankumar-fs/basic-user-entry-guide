import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <button
        className={styles.button}
        type={this.props.type || 'button'}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
