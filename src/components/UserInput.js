import React from 'react';
import styles from './UserInput.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

export class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      data: {
        username: '',
        age: '',
      },
      error: {
        message: '',
      },
    };
    this.ageChangeHandler = this.ageChangeHandler.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  formSubmitHandler(event) {
    event.preventDefault();

    if (
      +this.state.data.age < 18 ||
      +this.state.data.age > 80 ||
      this.state.data.username.trim().length === 0
    ) {
      return;
    }

    this.props.submit(this.state.data);

    this.setState((prev) => {
      return {
        error: {
          message: '',
        },
        data: {
          username: '',
          age: '',
        },
      };
    });
  }
  nameChangeHandler(event) {
    this.setState((prev) => {
      return {
        ...prev,
        data: {
          ...this.state.data,
          username: event.target.value,
        },
      };
    });
  }
  ageChangeHandler(event) {
    this.setState((prev) => {
      return {
        ...prev,
        data: {
          ...this.state.data,
          age: +event.target.value,
        },
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
              value={this.state.data.username}
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
              value={this.state.data.age}
              onChange={this.ageChangeHandler}
            ></input>
          </div>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    );
  }
}
