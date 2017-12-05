const update = (state, commands) => {
  const newState = { ...state, name: "Bob" };

  return newState;
};

module.exports = update;
