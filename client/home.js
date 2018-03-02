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
				var hotelImage = '<img src= ' + '"' + val.hotelInfo.hotelImageUrl + '"' + 'id="hotelImage"/>'
				var starLogo = '<img src= "star.png" id="starLogo"/>'
				var cityCountry = '<p id = "country">Country: '+ val.destination.country + " City: " + val.destination.city +'</p>'
				var hotelName = '<p id="hotelName">Hotel Name: ' + val.hotelInfo.hotelName + '</p>'
				var hotelStarRating ='<p id="hotelStarRating">' + val.hotelInfo.hotelStarRating + '</p>'
				var hotelStreetAddress = '<p id="hotelStreetAddress">Street: ' + val.hotelInfo.hotelStreetAddress + '</p>'
				var smallLine1 = '<hr id="smallLine1">'
				var smallLine2 = '<hr id="smallLine2">'
				var averagePriceValue = '<p id="averagePriceValue">' + Math.ceil(val.hotelPricingInfo.averagePriceValue) + '</p>'
				var crossOutPriceValue = '<p id="crossOutPriceValue" >' + Math.ceil(val.hotelPricingInfo.crossOutPriceValue) + '</p>'
				var percentSavings = '<p id="percentSavings">Save ' + Math.ceil(val.hotelPricingInfo.percentSavings) + "%" + '</p>'
				$("#hotel"+i).append(hotelImage, box, cityCountry, hotelName,smallLine1, hotelStreetAddress, averagePriceValue, crossOutPriceValue,percentSavings, smallLine2, starLogo, hotelStarRating)
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