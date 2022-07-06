const pool = require("../server/AssessmentDatabase");

exports.queryAllUsers = async () => {
  try {
    // const { userid, password } = req.body;
    return await pool.query("SELECT * FROM history");
  } catch (err) {
    console.log(err.message);
  }
};

exports.queryAllManagerPosition = async (id) => {
  try {
    return await pool.query("SELECT * FROM history WHERE position = ?", [id]);
  } catch (err) {
    console.log(err.message);
  }
};

exports.queryUserByUserid = async (userid) => {
  console.log(userid);
  try {
    return await pool.query("SELECT * FROM history WHERE userid = ?", [userid]);
  } catch (err) {
    console.log(err.message);
  }
};

exports.queryUserByDepartment = async (id) => {
  // console.log(department)
  try {
    return await pool.query("SELECT * FROM history WHERE department = ?", [id]);
  } catch (err) {
    console.log(err.message);
  }
};

exports.queryUserStaffAnswerAllChoice = async ({ year, part, choiceCount }) => {
  try {
    return await pool.query(
      "SELECT  *  FROM history LEFT JOIN aws2 ON aws2.userid = history.userid WHERE aws2.year = ? and aws2.part = ? GROUP BY aws2.userid HAVING count(aws2.number) >= ?",
      [year, part, choiceCount]
    );
  } catch (err) {
    console.log(err.message);
  }
};

exports.queryUserStaffAnswerNotComplete = async ({
  year,
  part,
  choiceCount,
}) => {
  console.log(year);
  console.log(part);
  console.log(choiceCount);
  try {
    return await pool.query(
      "SELECT  *  FROM history LEFT JOIN aws2 ON aws2.userid = history.userid WHERE aws2.year = ? and aws2.part = ? GROUP BY aws2.userid HAVING count(aws2.number) < ?",
      [year, part, choiceCount]
    );
  } catch (err) {
    console.log(err.message);
  }
};

exports.queryUserStaffAnswerNotComplete = async ({
  year,
  part,
  choiceCount,
}) => {
  console.log(year);
  console.log(part);
  console.log(choiceCount);
  try {
    return await pool.query(
      "SELECT * FROM history LEFT JOIN aws2 ON aws2.userid = history.userid WHERE aws2.year = ? and aws2.part = ? GROUP BY aws2.userid HAVING count(aws2.number) < ?",
      [year, part, choiceCount]
    );
  } catch (err) {
    console.log(err.message);
  }
};

exports.queryUserManagerAnswerAllChoice = async ({
  year,
  part,
  choiseCount,
}) => {
  try {
    return await pool.query(
      "SELECT  *  FROM history LEFT JOIN aws1 ON aws1.userid = history.userid WHERE aws1.year = ? and aws1.part = ? GROUP BY aws1.userid HAVING count(aws1.number) >= ?",
      [year, part, choiseCount]
    );
  } catch (err) {
    console.log(err.message);
  }
};

exports.deleteById = async ({ id }) => {
  try {
    return await pool.query("DELETE FROM history WHERE id=?;", [id]);
  } catch (err) {
    console.log(err.message);
  }
};

exports.deleteLoginUserByUserid = async ({ userid }) => {
  try {
    return await pool.query("DELETE FROM loginqt WHERE userid=?;", [userid]);
  } catch (err) {
    console.log(err.message);
  }
};

exports.insertUser = async ({
  userid,
  title_name,
  name,
  lastname,
  nickname,
  phone,
  email,
  department,
  position,
}) => {
  try {
    return await pool.query(
      "INSERT INTO history (userid, title_name, name, lastname, nickname, phone, email, department, position) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        userid,
        title_name,
        name,
        lastname,
        nickname,
        phone,
        email,
        department,
        position,
      ]
    );
  } catch (err) {
    console.log(err.message);
  }
};

exports.updateUser = async ({
  userid,
  title_name,
  name,
  lastname,
  nickname,
  phone,
  email,
  department,
  position,
}) => {
  try {
    return await pool.query(
      "UPDATE history SET  title_name=?, name=?, lastname=?, nickname=?, phone=?, email=?, department=?, position=? WHERE userid=?",
      [
        title_name,
        name,
        lastname,
        nickname,
        phone,
        email,
        department,
        position,
        userid,
      ]
    );
  } catch (err) {
    console.log(err.message);
  }
};
