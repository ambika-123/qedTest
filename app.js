const rp = require("request-promise");
const cheerio = require("cheerio");
const got = require("got");
const url = "https://www.qed42.com/blog/javascript";

var resultArray = [];
got(url)
  .then(function (html) {
    //success!
    console.log("Success");
    cheerio.load(html.body).then((result) => {
      //console.log(result('a')[0]);
      result("a").each((i, link) => {
        const href = link.attribs.href;

        resultArray.push(href);
      });
      //console.log(html);
    });
  })
  .catch(function (err) {
    //handle error
  });

function getValue(pass) {
  resultArray.forEach((element) => {
    console.log(element);
    if (element.includes(pass)) return element;
  });
}
const finalValue = getValue("generators");
console.log(finalValue);


