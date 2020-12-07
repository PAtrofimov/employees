import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../redux/user/userActions";
import Birthdays from "./BirthDays";
import Employees from "./Employees";

function Users({ userData, getUsers }) {
  useEffect(() => {
    getUsers();
  }, []);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <React.Fragment>
      <main className="employees-wrapper">
        <section className="employees-alphabet">
          <h1 className="employees-heading">Employees</h1>
          <Employees />
        </section>

        <article className="employees-birthday-wrapper">
          <h1 className="employees-heading">Employees birthday</h1>
          <hr className="line line-right" />
          <Birthdays />
        </article>
      </main>
      <hr className="line line-bottom" />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
