$.ajax({
  url: 'https://api-to-call.com/endpoint',
  type: 'POST',
  data: JSON.stringify({id: 200}),
  dataType: 'json',
  success(response) {
    console.log(response);
	},
  error(jqXHR, status, errorThrown) {
  	console.log(jqXHR)
	}
});
