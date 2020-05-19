function getClearResponse(res) {
  return res.data;
}

export default function(axios) {
  axios.interceptors.response.use(getClearResponse);
}
