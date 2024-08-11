let aStr = "abc123def456ghi";
let aMatch = aStr.match(/\d+|\D+/g) || [];

console.log(aMatch);
