class ApiFeaturesHandler {
  constructor(queryObject, queryString) {
    this.queryObject = queryObject;
    this.queryString = queryString;
  }

  // filtering   ?price[gte]=12&price[lte]=30
  filter() {
    let queryCopy = { ...this.queryString };
    const excludeQueries = ["sort", "page", "limit", "fields"];
    excludeQueries.forEach((query) => delete queryCopy[query]);

    let processedQuery = {};

    const operatorRegex = /\[(\w+)\]/;
    for (let key in queryCopy) {
      if (operatorRegex.test(key)) {
        const [, field, operator] = key.match(/(\w+)\[(\w+)\]/);
        processedQuery[field] = processedQuery[field] || {};
        processedQuery[field][`$${operator}`] = queryCopy[key];
      } else {
        processedQuery[key] = queryCopy[key];
      }
    }

    if (this.queryString.category) {
      processedQuery.category = {
        $regex: this.queryString.category,
        $options: "i",
      };
    }

    if (this.queryString.keyword) {
      processedQuery.name = { $regex: this.queryString.keyword, $options: "i" };
    }
    this.queryObject = this.queryObject.find(processedQuery);
    return this;
  }

  //sorting
  sort() {
    if (this.queryString.sort) {
      let sortParam = this.queryString.sort.split(",").join(" ");
      this.queryObject = this.queryObject.sort(sortParam);
    } else {
      this.queryObject = this.queryObject.sort("-createdAt");
    }
    return this;
  }

  //field limiting
  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.queryObject = this.queryObject.select(fields);
    } else {
      this.queryObject = this.queryObject.select("-__v");
    }
    return this;
  }

  //pagination
  paginate() {
    this.page = Number(this.queryString.page) || 1;
    this.limit = Number(this.queryString.limit) || 10;
    this.skip = (this.page - 1) * this.limit;
    this.queryObject = this.queryObject.skip(this.skip).limit(this.limit);

    return this;
  }
}

export default ApiFeaturesHandler;
