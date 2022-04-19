function filterByCity(targetCity, listingCityArray) {
  // This code is here to show you what the UI 
  // looks like and will put every listing onto 
  // the page no matter what you search for. 
  // Remove/comment out this code and replace 
  // it with your filtering code.
  // return [...listingCityArray.keys()];
  let cities = [];
  for (let i = 0; i < listingCityArray.length; i++){
    if(listingCityArray[i].toLowerCase() === targetCity.toLowerCase()){
    // I did this with lanne to make sure the test is passing
    // console.log("hello");
      cities.push(i);
    } 
  }
  console.log(cities);
  return cities;
}
filterByCityTest()

function filterByPrice(minPrice, maxPrice, listingPriceArray) {
  // This code is here to show you what the UI 
  // looks like and will put every listing onto 
  // the page no matter what you search for. 
  // Remove/comment out this code and replace 
  // it with your filtering code.
  //
 // empty results to store 
  // loop through entire price array
  // if it is greater than min price and less than max price and if that is case we want to store
  // return the results 
  
//   return [...listingPriceArray.keys()];
// }
   let prices = [];
  for (let i = 0; i < listingPriceArray.length; i++){
     if (listingPriceArray[i]   >= minPrice && listingPriceArray[i] < maxPrice){
       prices.push(i);
     } 
  }
  return prices;
 }

filterByPriceTest()

function filterByTypesTest(targetTypes, listingTypeArray) {
  // This code is here to show you what the UI 
  // looks like and will put every listing onto 
  // the page no matter what you search for. 
  // Remove/comment out this code and replace 
  // it with your filtering code.
 //   return [...listingTypeArray.keys()];

  // function need to return an array that is defined or inside type
  // below is the code i tried for level up, but i gave up 

 //  let theTargets = [];
 //  for (let i = 0; i <  listingTypeArray.length; i++){
 //    for (let j = 0; j < listingTypeArray[i].length; j++){
 //      theTargets *= targetTypes[i], listingTypeArray[j];
 //    }
 //  }
 //  console.log(theTargets);
 //  return theTargets;
  }
 // filterByTypesTest([], [], [], []);