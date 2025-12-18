const Task = require("../models/task");


exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user._id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.createTask = async (req, res) => {
  const { title, description, category, dueDate } = req.body;

  try {
    const task = await Task.create({
      title,
      description,
      category,
      dueDate,
      userId: req.user._id,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (task.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    Object.assign(task, req.body);
    const updatedTask = await task.save();

    res.json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    if (task.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await task.deleteOne();
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
