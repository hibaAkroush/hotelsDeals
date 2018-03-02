function app() {
	$.ajax({
	  url: "http://localhost:9000/hotels",
	  cache: false,
	  type: 'GET',
	  success: function(result){
	    console.log(result)
	  },
	  error: function(error) {
	  	alert(error)
	  }
	});
}