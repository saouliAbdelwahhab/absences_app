let nextAbsence = 0;
export const addAbsence = absence => {
  return {
    type: "ADD_ABSENCE",
    absence: { id: nextAbsence++, ...absence }
  };
};

export const load_absence = absence => {
  return {
    type: "LOAD_ABSENCES",
    absence
  };
};

export const validAbsence = id => {
  return {
    type: "VALID_ABSENCE",
    id
  };
};

export const refusAbsence = id => {
  return {
    type: "REFUS_ABSENCE",
    id
  };
};

export const addUser = (user, TypeUser) => {
  return {
    type: "ADD_USER",
    TypeUser,
    user
  };
};

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  payload: { id }
});
