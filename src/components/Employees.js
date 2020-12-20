import PropTypes from "prop-types";
import { ALPHABET } from "../utils/constants";
import { UserByName } from "../utils";

const Employees = ({ users, setUsersMarks }) => {
  const showLetters = (users) => {
    return [...ALPHABET].map((letter) => {
      return (
        <a className="employees-letter" key={letter} href="#">
          <h2 className="employees-letter-heading">{letter}</h2>
          <ul className="employees-letter-section">
            {showEmployees(users, letter)}
          </ul>
        </a>
      );
    });
  };

  const showEmployees = (users, letter) => {
    const filteredUsers = users
      .filter((user) => user.firstLetter === letter)
      .sort(UserByName);
    if (filteredUsers.length === 0) {
      return <li className="employee-letter-item">...</li>;
    }

    return filteredUsers.map((user) => {
      return (
        <li className="employee-letter-item" key={user.id}>
          <label className="employee-letter-fio">
            <span className="employee-letter-span">{user.fullName}</span>
            <input
              type="checkbox"
              className="employee-checkbox"
              checked={user.active}
              onChange={({ target }) => {
                console.log({user, setUsersMarks});
                setUsersMarks(user.id);
              }}
            />
          </label>
        </li>
      );
    });
  };

  return <nav className="employees-letters">{showLetters(users)}</nav>;
};

Employees.propTypes = {
  users: PropTypes.array,
  setUsersMarks: PropTypes.func,
};

Employees.defaultProps = {
  users: [],
};

export default Employees;
