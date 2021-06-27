function AddLog(line) {
    document.getElementById("LogLines").textContent += line + "\n";
};

function GetUrlWithDelay(milli) {
    return "https://deelay.me/" + milli + "/https://dog.ceo/api/breeds/image/random";
}

function GetWithTimeOut(urlDelay, timeout) {
    AddLog("Getting from URL will take " + urlDelay + " ms, the timeout is " + timeout + " ms");

    var url = GetUrlWithDelay(urlDelay);

    axios.get(url, { timeout: timeout })
        .then((response) => {
            AddLog("success");
            AddLog(response.data);
        })
        .catch((error) => {
            AddLog("error");
            AddLog(error);
            console.log(error);
        });
};
