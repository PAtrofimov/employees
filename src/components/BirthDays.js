import { MONTHS } from "../utils/constants";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const BirthDays = ({ users }) => {
  const showMonths = (users) => {
    const months = MONTHS.filter(
      (month) =>
        users.find((user) => user.month === month.number && user.active) !==
        undefined
    );

    if (months.length === 0) {
      return <p className="employees-birthday-noselected">No selected employees</p>;
    }

    return months.map((month) => {
      return (
        <a className="employees-birthday-month" key={month.number} href="#">
          <h2 className="employees-birthday-heading">{month.name}</h2>
          <ul className="employees-birthday-items">
            {showEmployees(users, month)}
          </ul>
        </a>
      );
    });
  };

  const showEmployees = (users, month) => {
    const filteredUsers = users.filter(
      (user) => user.month === month.number && user.active
    );

    return filteredUsers.map((user) => {
      const details = `${user.fullName} - ${user.number} ${month.name}, ${user.year} year`;
      return (
        <li className="employees-birthday-item" key={user.id}>
          {details}
        </li>
      );
    });
  };
  return <nav className="employees-birthday">{showMonths(users)}</nav>;
};

BirthDays.propTypes = {
  users: PropTypes.array,
};

BirthDays.defaultProps = {
  users: [],
};

const actions = {};

const mapStateToProps = ({ user }) => ({
  users: user.users,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BirthDays);
