import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    category_code: {
      type: String,
      required: [true, 'Category code is required'],
    },
    category_name: {
      type: String,
      required: [true, 'Category name is required'],
    },
  },
  { timestamps: true }
);

const Category = mongoose.model('Category', categorySchema);

export default Category;
