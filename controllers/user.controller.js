const User = require("../models/User");

// Get all users (Admin)
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update role (Admin)
exports.updateRole = async (req, res) => {
  try {
    const { role } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select("-password");

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Activate / Deactivate user
exports.toggleStatus = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    user.isActive = !user.isActive;
    await user.save();

    res.json({
      message: "User status updated",
      isActive: user.isActive
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
