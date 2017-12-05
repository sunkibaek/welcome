const update = (state, commands) => {
  const newState = { ...state };

  Object.keys(commands).forEach(key => {
    const command = commands[key];

    if (command.$set !== undefined) {
      newState[key] = command.$set;
    }
  });

  return newState;
};

module.exports = update;
