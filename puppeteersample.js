const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://developer.mozilla.org/ja/docs/Web/JavaScript');
  await page.screenshot({ path: 'example.png' });

  let listSelector="#sidebar-quicklinks > div > div > ol > li > details > ol > li > a";

  var datas = await page.$$eval(listSelector, list => {
    var datas=[];
    for (let i = 0; i < list.length; i++) {
      var data = {
        href: list[i].href,
        textContent: list[i].textContent,
        innerHTML: list[i].innerHTML
      };
      datas.push(data);
    }
    return datas;
  });
  console.log("some items some attributes using $$eval");
  console.log(datas);

  await browser.close();
})();
