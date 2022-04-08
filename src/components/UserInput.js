import React from 'react';
import styles from './UserInput.module.css';
import Card from '../UI/Card';

export class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      username: '',
      age: '',
    };
    this.ageChangeHandler = this.ageChangeHandler.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  formSubmitHandler(event) {
    event.preventDefault();
    this.props.submit(this.state);
    this.setState((prev) => {
      return {
        username: '',
        age: '',
      };
    });
  }
  nameChangeHandler(event) {
    this.setState((prev) => {
      return {
        ...prev,
        username: event.target.value,
      };
    });
  }
  ageChangeHandler(event) {
    this.setState((prev) => {
      return {
        ...prev,
        age: +event.target.value,
      };
    });
  }

  render() {
    return (
      <Card>
        <form className={styles.inputs} onSubmit={this.formSubmitHandler}>
          <div className={styles.input}>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              type='text'
              value={this.state.username}
              onChange={this.nameChangeHandler}
            ></input>
          </div>
          <div className={styles.input}>
            <label htmlFor='age'> Age</label>
            <input
              id='age'
              type='number'
              min='18'
              max='80'
              value={this.state.age}
              onChange={this.ageChangeHandler}
            ></input>
          </div>
          <button type='submit'>Add User</button>
        </form>
      </Card>
    );
  }
}
