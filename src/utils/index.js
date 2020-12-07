export const UserByName = (a, b) => {
    if (a.fullName > b.fullName) {
      return 1;
    }
    if (a.fullName < b.fullName) {
      return -1;
    }
    return 0;
  };