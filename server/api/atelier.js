const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

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
    const results = await axios.get(`${baseURL}/qa/questions?product_id=${id}&page=1&count=200`, authHeader);
    return results.data;
  } catch (err) {
    if (err) {
      throw new Error(err);
    }
    return false;
  }
};

const postQuestion = async (obj) => {
  console.log('obj in api call: ', obj);
  try {
    const results = await axios.post(`${baseURL}/qa/questions`, obj, authHeader);
    return results;
  } catch (err) {
    console.log('error in api call:', err);
    throw new Error(err);
  }
}
const qHelpful = async (id) => {
  try {
    const results = await axios.put(`${baseURL}/qa/questions/${id}/helpful`, {'question_id': id}, authHeader);
    return results;
  } catch (err) {
    throw new Error(err);
  }
}
const qReport = async (id) => {
  try {
    const results = await axios.put(`${baseURL}/qa/questions/${id}/report`, {'question_id': id}, authHeader);
    return results;
  } catch (err) {
    throw new Error(err);
  }
}
const postAnswer = async (obj, id) => {
  try {
    const results = await axios.post(`${baseURL}/qa/questions/${id}/answers`, obj, authHeader);
    return results;
  } catch (err) {
    console.log('error in api call:', err);
    throw new Error(err);
  }
}
const aHelpful = async (id) => {
  try {
    const results = await axios.put(`${baseURL}/qa/answers/${id}/helpful`, {'question_id': id}, authHeader);
    return results;
  } catch (err) {
    throw new Error(err);
  }
}
const aReport = async (id) => {
  try {
    const results = await axios.put(`${baseURL}/qa/answers/${id}/report`, {'question_id': id}, authHeader);
    return results;
  } catch (err) {
    throw new Error(err);
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
  qHelpful,
  qReport,
  postAnswer,
  aHelpful,
  aReport
};
