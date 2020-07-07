const db = require("../modeli");
const oxy = db.oxygen;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const table = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  seq.create(table)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the task."
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  seq.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the task."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  oxy.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving the task with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  oxy.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "The task was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update the task with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating the task with id=" + id
      });
    });
};

exports.delete = (req, res) => {
   const id = req.params.id;

  oxy.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "The task was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete the task with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete the task with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  oxy.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} The task was deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tasks."
      });
    });
};

exports.findAllPublished = (req, res) => {
  oxy.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the task."
      });
    });
};A