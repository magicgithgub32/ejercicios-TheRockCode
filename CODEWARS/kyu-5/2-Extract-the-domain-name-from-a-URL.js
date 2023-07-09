// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// function domainName(url) {
//   const arr = url.split("//");

//   const newArr = arr.splice(1, 1);

//   const secArr = newArr.join(" ").split("/");

//   const dotCom = secArr.splice(0, 1);

//   const dotComSplitted = dotCom.join("").split(".");

//   return dotComSplitted.splice(0, 1).join(" ");
// }

function domainName(url) {
  let urlWithNoHttp = url.replace("http://", "").replace("https://", "");

  let urlWithNoWww = urlWithNoHttp.replace("www.", "");

  let urlWithNoBar = urlWithNoWww.split("/")[0];

  let domain = urlWithNoBar.split(".")[0];

  return domain;
}

console.log(domainName("https://youtube.com"));
