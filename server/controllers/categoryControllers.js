import Category from '../models/categoryModel.js';

const create = async (req, res, next) => {
  const { category_name, category_code } = req.body;

  try {
    const categoryExists = await Category.findOne({ category_code });

    if (categoryExists) {
      const error = new Error('Category already exists');
      error.statusCode = 409;
      throw error;
    }

    const newCategory = await Category.create({ category_name, category_code });

    res.status(200).json({
      success: true,
      message: 'Category created!',
      data: newCategory,
    });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const allCategory = await Category.find({});

    res.json({ success: true, data: allCategory });
  } catch (error) {
    next(error);
  }
};

const get = async (req, res, next) => {
  const { id } = req.params;

  try {
    const category = await Category.findOne({ _id: id });

    if (!category) {
      const error = new Error('Category not found');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ success: true, data: category });
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  const { category_code, category_name } = req.body;

  try {
    const targetCategory = await Category.findOne({ _id: id });

    if (!targetCategory) {
      const error = new Error('Category not found');
      error.statusCode = 404;
      throw error;
    }

    targetCategory.category_code = category_code;
    targetCategory.category_name = category_name;
    targetCategory.save();

    // const anotherInsertSyntax = await targetCategory.updateOne({
    //   category_code,
    //   category_name,
    // });

    // console.log(test);

    res.status(200).json({
      success: true,
      message: 'Category updated',
      data: targetCategory,
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;

  try {
    const findAndDelete = await Category.findByIdAndDelete({ _id: id });

    if (findAndDelete === null) {
      const error = new Error('Category not found');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ success: true, message: 'Category deleted' });
  } catch (error) {
    next(error);
  }
};

export default { create, get, getAll, edit, destroy };
