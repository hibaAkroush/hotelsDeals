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
	    		console.log(val.hotelInfo.hotelImageUrl)
				// var box = '<div id = "box"></div>'
				var hotelImage = '<img src =' + val.hotelInfo.hotelImageUrl+'/>'
				// var p2img = '<img src =' + val.playerTwoImg + ' id="playerTwoImg"/>'
				// var titlelogo = '<img src =' + val.titleLogo + ' id="titleLogo"/>'
				// var p1name = '<p id = "playerOneName">'+ val.playerOneName+'</p>'
				// var p2name = '<p id = "playerTwoName">'+ val.playerTwoName +'</p>'
				// var vs = '<p id="vs">' + val.vs + '</p>'
				// var title ='<p id="title">' + val.title + '</p>'
				// var date = '<p id="date">' + val.date + '</p>'
				// var time = '<p id="time">' + val.time + '</p>'
				// var place = '<p id="place">' + val.place + '</p>'
				// var event = '<p id="event">' + val.event + '</p>'
				// var seats = '<p id="seats">' + val.seatsRemaining +  ' Remaining of '  + val.seatsTotal +  ' Seats</p>'
				// var background = '<img src =' + val.background +' id="backgroundImg"/>'
				// var coming = '<img src =' + val.coming +' id="coming"/>'

				$("#hotel"+i).append(hotelImage)
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
// destination.city
// destination.country
// hotelInfo.hotelImageUrl
// hotelInfo.hotelName
// hotelInfo.hotelStarRating
// hotelInfo.hotelStreetAddress
// hotelPricingInfo.averagePriceValue
// hotelPricingInfo.crossOutPriceValue
// hotelPricingInfo.percentSavings
// hotelPricingInfo.currency
// for all 
// offerDateRange.lengthOfStay
// offerDateRange.travelEndDate
// offerDateRange.travelStartDate
// [{
//     "offerDateRange": {
//         "travelStartDate": [2018, 4, 21],
//         "travelEndDate": [2018, 4, 24],
//         "lengthOfStay": 3
//     },
//     "destination": {
//         "regionID": "178286",
//         "associatedMultiCityRegionId": "178286",
//         "longName": "Miami (and vicinity), Florida, United States of America",
//         "shortName": "Miami",
//         "country": "United States of America",
//         "province": "Florida",
//         "city": "Miami",
//         "tla": "FLL",
//         "nonLocalizedCity": "Miami"
//     },
//     "hotelInfo": {
//         "hotelId": "20175753",
//         "hotelName": "Villa Royal Luxury House Near the Bay",
//         "localizedHotelName": "Villa Royal Luxury House Near the Bay",
//         "hotelDestination": "North Miami",
//         "hotelDestinationRegionID": "9173",
//         "hotelLongDestination": "North Miami,FL,USA",
//         "hotelStreetAddress": "10960 N Bayshore Dr",
//         "hotelCity": "North Miami",
//         "hotelProvince": "FL",
//         "hotelCountryCode": "USA",
//         "hotelLatitude": 25.87667,
//         "hotelLongitude": -80.16465,
//         "hotelStarRating": "3.5",
//         "hotelGuestReviewRating": 0,
//         "hotelReviewTotal": 0,
//         "hotelImageUrl": "https://images.trvl-media.com/hotels/21000000/20180000/20175800/20175753/c36dd3b7_t.jpg",
//         "vipAccess": false,
//         "isOfficialRating": false
//     },
//     "hotelPricingInfo": {
//         "averagePriceValue": 919.08,
//         "totalPriceValue": 2757.24,
//         "crossOutPriceValue": 3916.08,
//         "originalPricePerNight": 3916.08,
//         "currency": "USD",
//         "percentSavings": 76.53,
//         "drr": false
//     },
//     "hotelUrls": {
//         "hotelInfositeUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Finfo%2F20175753%2F2018-04-21%2F2018-04-24",
//         "hotelSearchResultUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Fsearch%2FDestination%2F2018-04-21%2F2018-04-24%3FSearchType%3DDestination%26CityName%3DNorth+Miami%26RegionId%3D178286%26Selected%3D20175753"
//     }
// }, {
//     "offerDateRange": {
//         "travelStartDate": [2018, 4, 27],
//         "travelEndDate": [2018, 4, 30],
//         "lengthOfStay": 3
//     },
//     "destination": {
//         "regionID": "178294",
//         "associatedMultiCityRegionId": "178294",
//         "longName": "Orlando (and vicinity), Florida, United States of America",
//         "shortName": "Orlando",
//         "country": "United States of America",
//         "province": "Florida",
//         "city": "Orlando",
//         "tla": "ORL",
//         "nonLocalizedCity": "Orlando"
//     },
//     "hotelInfo": {
//         "hotelId": "804984",
//         "hotelName": "Westgate Lakes Resort & Spa Universal Studios Area",
//         "localizedHotelName": "Westgate Lakes Resort & Spa Universal Studios Area",
//         "hotelDestination": "Orlando",
//         "hotelDestinationRegionID": "2693",
//         "hotelLongDestination": "Orlando,FL,USA",
//         "hotelStreetAddress": "9500 Turkey Lake Rd",
//         "hotelCity": "Orlando",
//         "hotelProvince": "FL",
//         "hotelCountryCode": "USA",
//         "hotelLatitude": 28.428934,
//         "hotelLongitude": -81.47504,
//         "hotelStarRating": "4.0",
//         "hotelGuestReviewRating": 3.82,
//         "hotelReviewTotal": 7735,
//         "hotelImageUrl": "https://images.trvl-media.com/hotels/1000000/810000/805000/804984/ab33e4c5_t.jpg",
//         "vipAccess": true,
//         "isOfficialRating": false
//     },
//     "hotelPricingInfo": {
//         "averagePriceValue": 70.64,
//         "totalPriceValue": 211.92,
//         "crossOutPriceValue": 230.49,
//         "originalPricePerNight": 230.49,
//         "currency": "USD",
//         "percentSavings": 69.35,
//         "drr": false
//     },
//     "hotelUrls": {
//         "hotelInfositeUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Finfo%2F804984%2F2018-04-27%2F2018-04-30",
//         "hotelSearchResultUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Fsearch%2FDestination%2F2018-04-27%2F2018-04-30%3FSearchType%3DDestination%26CityName%3DOrlando%26RegionId%3D178294%26Selected%3D804984"
//     }
// }, {
//     "offerDateRange": {
//         "travelStartDate": [2018, 4, 3],
//         "travelEndDate": [2018, 4, 4],
//         "lengthOfStay": 1
//     },
//     "destination": {
//         "regionID": "178276",
//         "associatedMultiCityRegionId": "178276",
//         "longName": "Las Vegas (and vicinity), Nevada, United States of America",
//         "shortName": "Las Vegas",
//         "country": "United States of America",
//         "province": "Nevada",
//         "city": "Las Vegas",
//         "tla": "LAS",
//         "nonLocalizedCity": "Las Vegas"
//     },
//     "hotelInfo": {
//         "hotelId": "203613",
//         "hotelName": "Mandalay Bay Resort And Casino",
//         "localizedHotelName": "Mandalay Bay Resort And Casino",
//         "hotelDestination": "Las Vegas",
//         "hotelDestinationRegionID": "2008",
//         "hotelLongDestination": "Las Vegas,NV,USA",
//         "hotelStreetAddress": "3950 Las Vegas Blvd S",
//         "hotelCity": "Las Vegas",
//         "hotelProvince": "NV",
//         "hotelCountryCode": "USA",
//         "hotelLatitude": 36.091961,
//         "hotelLongitude": -115.173037,
//         "hotelStarRating": "4.0",
//         "hotelGuestReviewRating": 4.25,
//         "hotelReviewTotal": 21175,
//         "hotelImageUrl": "https://images.trvl-media.com/hotels/1000000/210000/203700/203613/273ad265_t.jpg",
//         "vipAccess": false,
//         "isOfficialRating": false
//     },
//     "hotelPricingInfo": {
//         "averagePriceValue": 56.08,
//         "totalPriceValue": 56.08,
//         "crossOutPriceValue": 155,
//         "originalPricePerNight": 155,
//         "currency": "USD",
//         "percentSavings": 63.82,
//         "drr": false
//     },
//     "hotelUrls": {
//         "hotelInfositeUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Finfo%2F203613%2F2018-04-03%2F2018-04-04",
//         "hotelSearchResultUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Fsearch%2FDestination%2F2018-04-03%2F2018-04-04%3FSearchType%3DDestination%26CityName%3DLas+Vegas%26RegionId%3D178276%26Selected%3D203613"
//     }
// }, {
//     "offerDateRange": {
//         "travelStartDate": [2018, 6, 10],
//         "travelEndDate": [2018, 6, 16],
//         "lengthOfStay": 6
//     },
//     "destination": {
//         "regionID": "178280",
//         "associatedMultiCityRegionId": "178280",
//         "longName": "Los Angeles (and vicinity), California, United States Of America",
//         "shortName": "Los Angeles",
//         "country": "United States of America",
//         "province": "California",
//         "city": "Los Angeles",
//         "tla": "QLA",
//         "nonLocalizedCity": "Los Angeles"
//     },
//     "hotelInfo": {
//         "hotelId": "1180295",
//         "hotelName": "Hollywood Inn Express South",
//         "localizedHotelName": "Hollywood Inn Express South",
//         "hotelDestination": "Los Angeles",
//         "hotelDestinationRegionID": "2011",
//         "hotelLongDestination": "Los Angeles,CA,USA",
//         "hotelStreetAddress": "141 N Alvarado St.",
//         "hotelCity": "Los Angeles",
//         "hotelProvince": "CA",
//         "hotelCountryCode": "USA",
//         "hotelLatitude": 34.067782,
//         "hotelLongitude": -118.269633,
//         "hotelStarRating": "2.0",
//         "hotelGuestReviewRating": 2.66,
//         "hotelReviewTotal": 1822,
//         "hotelImageUrl": "https://images.trvl-media.com/hotels/2000000/1190000/1180300/1180295/1180295_19_t.jpg",
//         "vipAccess": false,
//         "isOfficialRating": false
//     },
//     "hotelPricingInfo": {
//         "averagePriceValue": 117.9,
//         "totalPriceValue": 707.4,
//         "crossOutPriceValue": 254.84,
//         "originalPricePerNight": 254.84,
//         "currency": "USD",
//         "percentSavings": 53.74,
//         "drr": false
//     },
//     "hotelUrls": {
//         "hotelInfositeUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Finfo%2F1180295%2F2018-06-10%2F2018-06-16",
//         "hotelSearchResultUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Fsearch%2FDestination%2F2018-06-10%2F2018-06-16%3FSearchType%3DDestination%26CityName%3DLos+Angeles%26RegionId%3D178280%26Selected%3D1180295"
//     }
// }, {
//     "offerDateRange": {
//         "travelStartDate": [2018, 3, 16],
//         "travelEndDate": [2018, 3, 20],
//         "lengthOfStay": 4
//     },
//     "destination": {
//         "regionID": "178293",
//         "associatedMultiCityRegionId": "178293",
//         "longName": "New York (and vicinity), New York, United States of America",
//         "shortName": "New York",
//         "country": "United States of America",
//         "province": "New York",
//         "city": "New York",
//         "tla": "NYC",
//         "nonLocalizedCity": "New York"
//     },
//     "hotelInfo": {
//         "hotelId": "25906",
//         "hotelName": "Salisbury Hotel",
//         "localizedHotelName": "Salisbury Hotel",
//         "hotelDestination": "New York",
//         "hotelDestinationRegionID": "2621",
//         "hotelLongDestination": "New York,NY,USA",
//         "hotelStreetAddress": "123 W 57th St",
//         "hotelCity": "New York",
//         "hotelProvince": "NY",
//         "hotelCountryCode": "USA",
//         "hotelLatitude": 40.764841,
//         "hotelLongitude": -73.978404,
//         "hotelStarRating": "3.0",
//         "hotelGuestReviewRating": 4.1,
//         "hotelReviewTotal": 16417,
//         "hotelImageUrl": "https://images.trvl-media.com/hotels/1000000/30000/26000/25906/4be9c969_t.jpg",
//         "vipAccess": true,
//         "isOfficialRating": false
//     },
//     "hotelPricingInfo": {
//         "averagePriceValue": 175.48,
//         "totalPriceValue": 701.92,
//         "crossOutPriceValue": 378.35,
//         "originalPricePerNight": 378.35,
//         "currency": "USD",
//         "percentSavings": 53.62,
//         "drr": false
//     },
//     "hotelUrls": {
//         "hotelInfositeUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Finfo%2F25906%2F2018-03-16%2F2018-03-20",
//         "hotelSearchResultUrl": "https%3A%2F%2Fwww.expedia.com%2Fgo%2Fhotel%2Fsearch%2FDestination%2F2018-03-16%2F2018-03-20%3FSearchType%3DDestination%26CityName%3DNew+York%26RegionId%3D178293%26Selected%3D25906"
//     }
// }]