module.exports = (sequelize, Sequelize) => {
  const seq = sequelize.define("Sequalize", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return seq;
};