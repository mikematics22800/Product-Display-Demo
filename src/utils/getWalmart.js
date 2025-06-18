import axios from 'axios';

const getWalmart = async (query) => {
  try {
    const response = await axios.request({
    method: 'GET',
    url: 'https://walmart-data.p.rapidapi.com/walmart-serp.php',
    params: {
      url: `https://www.walmart.com/search?q=${query}`
    },
    headers: {
      'x-rapidapi-key': '5d1cec5327msh0985d5851532445p1b7934jsne1532e11dd5c',
      'x-rapidapi-host': 'walmart-data.p.rapidapi.com'
    }
  });
    console.log(response.data.body.products);
    return response.data.body.products;
  } catch (error) {
    console.error(error);
  }
}

export default getWalmart
