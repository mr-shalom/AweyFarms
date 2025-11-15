import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product must have a title"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Product must have a category"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Product must have a description"],
      trim: true,
    },
    image_url: {
      type: String,
      required: [true, "Product must have an image"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Product must have a price"],
      min: [1, "price cannot be less than 1"],
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (val) {
          return val === null || val < this.price;
        },
        message:
          "Discount price ({VALUE}) should always be less than the selling price",
      },
    },
    unit: {
      type: String,
      enum: ["kg", "bag", "crate", "piece", "bunch", "liter", "litre"],
      default: "kg",
      required: [true, "Product must have a unit"],
    },
    quantity: {
      type: Number,
      default: 0,
      required: [true, "Product must have a quantity"],
      min: [0, "you cannot have a negative quantity value"],
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, "Stock value cannot be negative"],
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
