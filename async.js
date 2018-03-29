async function getData() {
  try {
    let response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      let jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
}
