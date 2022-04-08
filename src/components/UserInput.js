import React from 'react';

export class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      username: '',
      age: 0,
    };
  }

  formSubmitHandler() {
    this.props.submit(this.state);
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
      <form className='inputs' onSubmit={this.formSubmitHandler}>
        <div className='input'>
          <label htmlFor='name'>Enter Name</label>
          <input
            name='name'
            type='text'
            onChange={this.nameChangeHandler}
          ></input>
        </div>
        <div className='input'>
          <label htmlFor='age'>Enter Age</label>
          <input
            name='age'
            type='number'
            min='18'
            max='80'
            onChange={this.ageChangeHandler}
          ></input>
        </div>
        <button type='submit'>Add User</button>
      </form>
    );
  }
}
