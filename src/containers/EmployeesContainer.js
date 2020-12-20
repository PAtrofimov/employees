import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUsers, setUsersMarks } from "../redux/user/userActions";
import Birthdays from "../components/BirthDays";
import Employees from "../components/Employees";

function EmployeesContainer({ userData, getUsers, setUsersMarks}) {
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
          <Employees users={userData.users} setUsersMarks={setUsersMarks}/>
        </section>

        <article className="employees-birthday-wrapper">
          <h1 className="employees-heading">Employees birthday</h1>
          <hr className="line line-right" />
          <Birthdays users={userData.users}/>
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

const actions = { setUsersMarks, getUsers };

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer);
