import { Product } from "../models/productsModel.js";
import ApiFeaturesHandler from "../utils/apiFeaturesHandler.js";

import catchAsyncErrors from "../utils/catchAsyncErrors.js";

const getAllProducts = catchAsyncErrors(async (req, res) => {
  const apiFeatures = new ApiFeaturesHandler(Product.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const totalProducts = await Product.countDocuments();
  const allProducts = await apiFeatures.queryObject;
  const pagination = apiFeatures.filter();

  res.status(200).json({
    status: "success",
    result: `${allProducts.length} ${
      allProducts.length > 1 ? "matches" : "match"
    }`,
    page: pagination.page,
    limit: pagination.limit,
    totalProducts: totalProducts,
    data: allProducts,
  });
});

const getAProduct = catchAsyncErrors(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      status: "error",
      message: "Product not found",
    });
  }
  res.status(200).json({
    status: "success",
    data: { product },
  });
});

const createNewProduct = catchAsyncErrors(async (req, res) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json({
    status: "success",
    data: { newProduct },
  });
});

const updateProduct = catchAsyncErrors(async (req, res) => {
  const productToUpdate = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  if (!productToUpdate) {
    return res.status(404).json({
      status: "failed",
      message: "Product not updated",
    });
  }

  res.status(200).json({
    status: "success",
    data: { productToUpdate },
  });
});

const deleteProduct = catchAsyncErrors(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(404).json({
      status: "error",
      message: "Product not found",
    });
  }

  res.status(200).json({
    status: "success",
    message: "Product, deleted successfully",
  });
});

export const productsController = {
  getAllProducts,
  getAProduct,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
