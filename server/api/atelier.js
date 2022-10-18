const dotenv = require('dotenv');
const axios = require('axios');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';
const authHeader = {
  headers: {
    Authorization: process.env.API_KEY,
  },
};

const getProducts = async () => {
  try {
    const results = await axios.get(`${baseURL}/products`, authHeader);
    return results.data;
  } catch (err) {
    if (err) {
      console.error(err);
    }
    return false;
  }
};

const getProduct = async (id) => {
  try {
    const results = await axios.get(`${baseURL}/products/${id}`, authHeader);
    return results.data;
  } catch (err) {
    if (err) {
      console.error(err);
    }
    return false;
  }
};

const getRelatedProducts = async (id) => {
  try {
    const results = await axios.get(`${baseURL}/products/${id}/related`, authHeader);
    return results.data;
  } catch (err) {
    if (err) {
      console.error(err);
    }
    return false;
  }
};

const getStarsById = async (id) => {
  try {
    const results = await axios.get(`${baseURL}/reviews/meta?product_id=${id}`, authHeader);
    return results.data.ratings;
  } catch (err) {
    if (err) {
      console.error(err);
    }
    return false;
  }
};

const getThumbnailImages = async (id) => {
  try {
    const results = await axios.get(`${baseURL}/products/${id}/styles`, authHeader);
    return results.data;
  } catch (err) {
    if (err) {
      throw new Error(err);
    }
    return false;
  }
};

const getQuestions = async (id) => {
  try {
    const results = await axios.get(`${baseURL}/qa/questions?product_id=${id}`, authHeader);
    return results.data;
  } catch (err) {
    if (err) {
      throw new Error(err);
    }
    return false;
  }
};

const postQuestion = async (text, qname, qemail, id) => {
  const inputs = {
    body: text,
    name: qname,
    email: qemail,
    product_id: id
  };
  try {
    const results = await axios.post('/qa/questions', inputs)
  } catch (err) {
    if (err) {
      throw new Error(err);
    }
    return false;
  }
}
module.exports = {
  getProducts,
  getProduct,
  getRelatedProducts,
  getStarsById,
  getThumbnailImages,
  getQuestions,
  postQuestion,
};
