function GetWithTimeOut() {
  AddLog("Getting from URL");

  axios.get("http://slowwly.robertomurray.co.uk/delay/5000/url/https://api.thecatapi.com/v1/images/search")
  .then((response) => { 
    AddLog("success");
    AddLog(response.data);
  })
  .catch((error) => { 
    AddLog("error");
    console.error(error);
  });
};
