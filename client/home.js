// var jsonminify = require("jsonminify");

function app() {
	$.ajax({
	  url: "http://localhost:9000/hotels",
	  cache: false,
	  type: 'GET',
	  success: function(result){
	  	var hotels = JSON.parse(result)
	    console.log(JSON.parse(result))
	    	_.each(hotels,function(val,i){
				var box = '<div id = "box"></div>'
				var hotelImage = '<img src= ' + '"' + val.hotelInfo.hotelImageUrl + '"' + '/>'
				var city = '<p id = "city">'+ val.destination.city+'</p>'
				var country = '<p id = "country">'+ val.destination.country +'</p>'
				var hotelName = '<p id="hotelName">' + val.hotelInfo.hotelName + '</p>'
				var hotelStarRating ='<p id="hotelStarRating">' + val.hotelInfo.hotelStarRating + '</p>'
				var hotelStreetAddress = '<p id="hotelStreetAddress">' + val.hotelInfo.hotelStreetAddress + '</p>'
				var averagePriceValue = '<p id="averagePriceValue">' + val.hotelPricingInfo.averagePriceValue + '</p>'
				var crossOutPriceValue = '<p id="crossOutPriceValue">' + val.hotelPricingInfo.crossOutPriceValue + '</p>'
				var percentSavings = '<p id="percentSavings">' + val.hotelPricingInfo.percentSavings + '</p>'
				var currency = '<p id="currency">' + val.hotelPricingInfo.currency + '</p>'
				$("#hotel"+i).append(hotelImage, box, city, country, hotelName, hotelStarRating, hotelStreetAddress, averagePriceValue, crossOutPriceValue,  percentSavings, currency)
			});
	  },
	  error: function(error) {
	  	alert(error)
	  }
	});



	$('.multiple-items').slick({
	  infinite: false,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	   dots: false,
	   	prevArrow: false,
	   nextArrow: false
	});
}

// for all 
// offerDateRange.lengthOfStay
// offerDateRange.travelEndDate
// offerDateRange.travelStartDate