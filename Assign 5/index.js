
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function fetchData() {
    return delay(2000).then(() => Math.floor(Math.random() * 100) + 1);
}


function processData(data) {
    console.log("Fetched Data:", data);
    return delay(1000).then(() => data * 2);
}


fetchData()
    .then(data => processData(data))
    .then(result => console.log("Processed Data:", result))
    .catch(error => console.error("Error:", error));

        