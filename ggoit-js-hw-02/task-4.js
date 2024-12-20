function getShippingCost(country) {
  if (country == "China") {
    return "Shipping to China will cost 100 credits";
  } else if (country == "Chile") {
    return "Shipping to Chile will cost 250 credits";
  } else if (country == "Australia") {
    return "Shipping to Australia will cost 170 credits";
  } else if (country == "Jamaica") {
    return "Shipping to Jamaica will cost 120 credits";
  } else return "Sorry, there is no delivery to your country";
}

console.log(getShippingCost("Australia")); // Shipping to Australia will cost 170 credits
console.log(getShippingCost("Germany")); // Sorry, there is no delivery to your country
console.log(getShippingCost("China")); // Shipping to China will cost 100 credits
console.log(getShippingCost("Chile")); // Shipping to Chile will cost 250 credits
console.log(getShippingCost("Jamaica")); // Shipping to Jamaica will cost 120 credits
console.log(getShippingCost("Sweeden")); // Sorry, there is no delivery to your country
