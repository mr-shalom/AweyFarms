export const formatCurrency = function (value, currency = "NGN") {
  return new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency,
  }).format(value);
};
