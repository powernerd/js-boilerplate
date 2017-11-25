$.ajax({
  url: 'https://api-to-call.com/endpoint',
  type: 'GET',
  dataType: 'json',
  success(response) {
    console.log(response);
  },
  error(jqXHR, status, errorThrown) {
    console.log(jqXHR);
  }
});
