// const express = require("express");
const userModel = require("../model/user");
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

exports.getAllUsers = (req, res, next) => {
  userModel
    .queryAllUsers()
    .then(([row]) => {
      // console.log(row);
      res.send(row);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

exports.getUserById = (req, res, next) => {
  const userid = req.params.userid;
  // console.log(userid);
  userModel
    .queryUserByUserid(userid)
    .then(([row]) => {
      console.log(row);
      res.send(row);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

exports.getAllManagerPosition = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  userModel
    .queryAllManagerPosition(id)
    .then(([row]) => {
      console.log(row);
      res.send(row);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

exports.getUserByDepartment = (req, res, next) => {
  const id = req.params.id;
  // console.log(department);
  userModel
    .queryUserByDepartment(id)
    .then(([row]) => {
      console.log(row);
      res.send(row);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

exports.getUserStaffAnswerAllChoice = (req, res, next) => {
  const { year, part, choiceCount } = req.params;
  console.log(req.params);
  userModel
    .queryUserStaffAnswerAllChoice({ year, part, choiceCount })
    .then(([row]) => {
      console.log(row);
      res.send(row);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

exports.getUserStaffAnswerNotComplete = (req, res, next) => {
  const { year, part, choiceCount } = req.params;
  console.log(req.params);
  userModel
    .queryUserStaffAnswerNotComplete({ year, part, choiceCount })
    .then(([row]) => {
      console.log(row);
      res.send(row);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

exports.deleteUserById = (req, res, next) => {
  const { id } = req.params;
  userModel
    .deleteById({ id })
    .then(([row]) => {
      res.send(row);
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

exports.deleteLoginUserByUserid = (req, res, next) => {
  const { userid } = req.params;
  userModel
    .deleteLoginUserByUserid({ userid })
    .then(([row]) => {
      res.send(row);
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

exports.postOrPutUser = (req, res, next) => {
  // const { userid } = req.params;
  const {
    userid,
    title_name,
    name,
    lastname,
    nickname,
    phone,
    email,
    department,
    position,
  } = req.body;

  userModel
    .queryUserByUserid(userid)
    .then(([row]) => {
      if (row.length !== 0) {
        console.log(row);
        userModel
          .updateUser({
            userid,
            title_name,
            name,
            lastname,
            nickname,
            phone,
            email,
            department,
            position,
          })
          .then(() => {
            res.status(201).json({
              message: "success",
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      } else {
        userModel
          .insertUser({
            userid,
            title_name,
            name,
            lastname,
            nickname,
            phone,
            email,
            department,
            position,
          })
          .then(() => {
            res.status(201).json({
              message: "success",
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};
