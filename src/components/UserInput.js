import React from 'react';
import styles from './UserInput.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ERROR/ErrorModal';
export class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      // data: {
      //   username: '',
      //   age: '',
      // },
      error: null,
    };
    this.nameRef = React.createRef();
    this.ageRef = React.createRef();
    this.resetError = this.resetError.bind(this);
    // this.ageChangeHandler = this.ageChangeHandler.bind(this);
    // this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  formSubmitHandler(event) {
    event.preventDefault();
    const checkifError = this.checkError(
      // this.state.data.username,
      // +this.state.data.age
      this.nameRef.current.value,
      +this.ageRef.current.value
    );

    if (checkifError > 0) {
      if (checkifError === 1) {
        this.setState({
          error: {
            title: 'Invalid Inputs',
            message:
              'Name shouldnt be empty and age should be between 18 to 80!',
          },
        });
      } else if (checkifError === 2) {
        this.setState({
          error: {
            title: 'Invalid Age',
            message: 'Age should be between 18 to 80!',
          },
        });
      } else if (checkifError === 3) {
        this.setState({
          error: {
            title: 'Invalid Name',
            message: "Name shouldn't be empty!",
          },
        });
      }
      return;
    } else {
      this.resetError();
    }

    this.props.submit(
      {
        username: this.nameRef.current.value,
        age: +this.ageRef.current.value,
      }
      // this.state.data
    );

    this.setState((prev) => {
      return {
        error: null,
        // data: {
        //   username: '',
        //   age: '',
        // },
      };
    });
    this.nameRef.current.value = '';
    this.ageRef.current.value = '';
  }

  checkError(name, age) {
    if ((age < 18 || age > 80) && name.trim().length === 0) {
      return 1;
    } else if (age < 18 || age > 80) {
      return 2;
    } else if (name.trim().length === 0) {
      return 3;
    } else {
      return -1;
    }
  }
  // nameChangeHandler(event) {
  //   this.setState((prev) => {
  //     return {
  //       ...prev,
  //       data: {
  //         ...this.state.data,
  //         username: event.target.value,
  //       },
  //     };
  //   });
  // }
  // ageChangeHandler(event) {
  //   this.setState((prev) => {
  //     return {
  //       ...prev,
  //       data: {
  //         ...this.state.data,
  //         age: +event.target.value,
  //       },
  //     };
  //   });
  // }

  resetError() {
    this.setState({
      error: null,
    });
  }

  render() {
    return (
      <>
        {this.state.error && (
          <ErrorModal error={this.state.error} closeThis={this.resetError} />
        )}
        <Card>
          <form className={styles.inputs} onSubmit={this.formSubmitHandler}>
            <div className={styles.input}>
              <label htmlFor='name'>Name</label>
              <input
                id='name'
                type='text'
                // value={this.state.data.username}
                // onChange={this.nameChangeHandler}
                ref={this.nameRef}
              ></input>
            </div>
            <div className={styles.input}>
              <label htmlFor='age'> Age</label>
              <input
                id='age'
                type='number'
                min='18'
                max='80'
                // value={this.state.data.age}
                // onChange={this.ageChangeHandler}
                ref={this.ageRef}
              ></input>
            </div>
            <Button type='submit'>Add User</Button>
          </form>
        </Card>
      </>
    );
  }
}
