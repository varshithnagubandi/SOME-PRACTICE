const Employee = require("../model/Employee");

const NewEmployee = async (request, response) => {
  try {
    const { name, email, phone, address } = request.body;

    const employee = new Employee({
      name,
      email,
      phone,
      address,
    });

    await employee.save();
    response.status(200).json(employee);
  } catch (error) {
    console.log("SERVER ERROR");
    response.status(500).json({ message: "SERVER ERROR" });
  }
};

module.exports = { NewEmployee };
