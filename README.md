## **What does Nike Scraper do?**

With this scraper tool, you can **get product data from Nike’s website**. The scraper visits the Nike website of your choice (usually a specific country) and scrapes all available Nike product data from that branch. One dataset takes around 30 min to take its shape and includes product name, price, sale price, currency, country, description, URL, item number, category, subcategory, time of listing, and image URL.

## **What Nike product data can I extract with a scraper?**

Each product will be listed in the dataset under a specific category, subcategory, and division along with its price, image, URL, posting time, and other specifications. <br>

👶 👩 👱‍♂️ 🧝 **Divisions:** Kids, Women, Men, Unisex. <br>

🧢 👕 🎽 🥾 **Product categories:** Accessories, Clothing, Shoes. <br>

 🏀 ⚽ 🎾 🏃‍♂️ 🏌️‍♀️ 🏋️‍♀️ 🚴‍♂️ 🧘‍♀️ **Product subcategories:** Lifestyle, Running, Golf, Basketball, Soccer/Football, Cycling, Tennis, Training, Yoga, Skateboarding, Volleyball, American Football, Walking, Spinning, Swimming, High Intensity Training, Weightlifting, Baseball, Studio Classes, Outdoor Court, Hiking, Ice Hockey, Rugby, Padel Hockey. <br>

🇺🇸 🇲🇽 🇫🇷 🇩🇪 🇮🇹 🇦🇺 🇨🇦 🇪🇸 🇬🇧 🇨🇳 **Branches:** United States, Mexico, France, Germany, Italy, Australia, Canada, Spain, United Kingdom, China. <br>

## **Why scrape Nike?**

🕵️ Conduct **market research** or analysis by price, popularity, newness, etc. <br>

✨ Find new **athleisure-related trends** across sportswear in retail industry <br>

👟 Keep an eye on **rare items for sneaker market** and sneaker resale market <br>

🤖 Create a **sneaker bot** with notifications <br>

💪 Monitor pricing for **competition research** <br>

## **How do I use Nike Scraper?**

Nike Scraper was designed to be easy to start with even if you've never extracted product data from e-commerce websites before. Here's how you can scrape Nike product data using this tool:

1. 💌 [Create](https://console.apify.com/sign-up) a free Apify account using your email.
2. 👟 Open [Nike Scraper](https://apify.com/misceres/nike-scraper).
3. 🇬🇧 Choose a Nike branch (country) to scrape. 
4. 🏁 Click "Start" and wait for the data to be extracted. 
5. 📂 Download your data in JSON, JSONL, XML, CSV, Excel, or HTML.

## **How much will it cost me to scrape product data from Nike shops?**

[Apify Free plan](https://apify.com/pricing) provides you with **$5 free usage credits** per month. For those $5 you can get **up to 25,000 items** from this Nike Scraper. So it will be completely free for 25K results!

If you need to scrape data from Nike or other e-commerce shops on a more regular basis and larger scale, go for a $49/month [Personal plan](https://apify.com/pricing). 

## **Input**

The input for Nike Scraper should be a Nike franchise. You can pick one country per run; the scraper will extract data on every Nike item offered in that country.

```jsx
{
  "inputCountry": "UNITED KINGDOM"
}

```

## **Output sample**

The results will be wrapped into a dataset which you can always find in the **Storage** tab. Here's an excerpt from the data you'd get if you apply the input parameters above (UK):

![Apify - Nike Run - output](https://i.imgur.com/mHr8uh2.png)  

And here is the same data but in JSON. You can choose in which format to download your Nike data: JSON, JSONL, Excel spreadsheet, HTML table, CSV, or XML.

```jsx
[{
  "company": "NIKE",
  "country": "UNITED KINGDOM",
  "productName": "Nike Sportswear Revolution",
  "articleNo": "DX2321-258",
  "division": "Women",
  "category": "Clothing",
  "subCategory": "Lifestyle",
  "listPrice": 114.95,
  "salePrice": 68.97,
  "currency": "GBP",
  "description": "The weather isn't always predictable. Sometimes days that start chilly end up getting hot. Stay prepared for it all with the Nike Sportswear Revolution Jacket. Made from lightweight woven fabric, it easily packs away and converts into a hip pack when temperatures rise. A loose fit and 1/2-zip design keep it comfortable while a stow-away hood is there when you want it but gone when you don't.",
  "url": "https://nike.com/gb/t/sportswear-revolution-sports-utility-1-2-zip-jacket-lRRzsV/DX2321-258",
  "imageUrl": "https://static.nike.com/a/images/t_default/1c3b97df-35e3-4823-9ad2-0b76b39414fa/sportswear-revolution-sports-utility-1-2-zip-jacket-lRRzsV.png",
  "timestamp": "2023-03-03T11:40:58.789Z"
},
{
  "company": "NIKE",
  "country": "UNITED KINGDOM",
  "productName": "Nike Sportswear Revolution",
  "articleNo": "DX2321-010",
  "division": "Women",
  "category": "Clothing",
  "subCategory": "Lifestyle",
  "listPrice": 114.95,
  "salePrice": 68.97,
  "currency": "GBP",
  "description": "The weather isn't always predictable. Sometimes days that start chilly end up getting hot. Stay prepared for it all with the Nike Sportswear Revolution Jacket. Made from lightweight woven fabric, it easily packs away and converts into a hip pack when temperatures rise. A loose fit and 1/2-zip design keep it comfortable while a stow-away hood is there when you want it but gone when you don't.",
  "url": "https://nike.com/gb/t/sportswear-revolution-sports-utility-1-2-zip-jacket-lRRzsV/DX2321-010",
  "imageUrl": "https://static.nike.com/a/images/t_default/a3122f82-27c7-4c02-939a-9ad098bb47c2/sportswear-revolution-sports-utility-1-2-zip-jacket-lRRzsV.png",
  "timestamp": "2023-03-03T11:40:58.789Z"
},
{
  "company": "NIKE",
  "country": "UNITED KINGDOM",
  "productName": "Brazil Strike Home/Away",
  "articleNo": "DJ5032-433",
  "division": "Unisex",
  "category": "Accessories",
  "subCategory": "Soccer/Football",
  "listPrice": 16.95,
  "salePrice": null,
  "currency": "GBP",
  "description": "These socks have design details specifically tailored for football's rising stars. They hug your leg to the knee for secure coverage, and sweat-wicking yarns help keep you cool and composed while you fine-tune your skills.",
  "url": "https://nike.com/gb/t/brazil-strike-home-away-knee-high-football-socks-SLCTCp/DJ5032-433",
  "imageUrl": "https://static.nike.com/a/images/t_default/bca0722f-5d2f-40d8-8a9c-cb890526ebbb/brazil-strike-home-away-knee-high-football-socks-SLCTCp.png",
  "timestamp": "2023-03-03T11:40:57.862Z"
},
{
  "company": "NIKE",
  "country": "UNITED KINGDOM",
  "productName": "Brazil Strike Home/Away",
  "articleNo": "DJ5032-100",
  "division": "Unisex",
  "category": "Accessories",
  "subCategory": "Soccer/Football",
  "listPrice": 16.95,
  "salePrice": null,
  "currency": "GBP",
  "description": "These socks have design details specifically tailored for football's rising stars. They hug your leg to the knee for secure coverage, and sweat-wicking yarns help keep you cool and composed while you fine-tune your skills.",
  "url": "https://nike.com/gb/t/brazil-strike-home-away-knee-high-football-socks-SLCTCp/DJ5032-100",
  "imageUrl": "https://static.nike.com/a/images/t_default/0b2ba3ef-7ff4-48bc-8511-dad5f292e33b/brazil-strike-home-away-knee-high-football-socks-SLCTCp.png",
  "timestamp": "2023-03-03T11:40:57.862Z"
},
{
  "company": "NIKE",
  "country": "UNITED KINGDOM",
  "productName": "Nike Club Fleece",
  "articleNo": "DX0543-063",
  "division": "Men",
  "category": "Clothing",
  "subCategory": "Lifestyle",
  "listPrice": 54.95,
  "salePrice": null,
  "currency": "GBP",
  "description": "Made from soft, brushed fleece for lightweight warmth and comfort, these Nike Club Fleece trousers give you casual style for everyday wear. They're slightly cropped to give you more room for your shoes to shine.",
  "url": "https://nike.com/gb/t/club-fleece-cropped-trousers-vVPBLm/DX0543-063",
  "imageUrl": "https://static.nike.com/a/images/t_default/e7ecf88c-f980-43bb-996f-a663ac193250/club-fleece-cropped-trousers-vVPBLm.png",
  "timestamp": "2023-03-03T11:40:56.503Z"
}]
...

```

## **Integrations and Nike Scraper**

Last but not least, **Nike Scraper can be connected with almost any cloud service or web app** thanks to <a  href=" https://apify.com/integrations" target="_blank"> integrations on the Apify platform</a>. You can integrate with Make, Zapier, Slack, Airbyte, GitHub, Google Sheets, Google Drive, <a  href="https://docs.apify.com/integrations" target="_blank"> and more</a>. 

Or you can use  <a  href="https://docs.apify.com/integrations/webhooks"  target="_blank">webhooks</a> to carry out an action whenever an event occurs, e.g., get a notification whenever Nike Scraper successfully finishes a run.


## **Using Nike Scraper with the Apify API**

The Apify API gives you programmatic access to the Apify platform. The API is organized around RESTful HTTP endpoints that enable you to manage, schedule and run Apify actors. The API also lets you access any datasets, monitor actor performance, fetch results, create and update versions, and more.

To access the API using Node.js, use the `apify-client` NPM package. To access the API using Python, use the `apify-client` PyPI package.

## **Is it legal to scrape Nike data?**

Yes, it is. Our [e-commerce scrapers](https://apify.com/store/categories/ecommerce) are ethical and **only extract publicly available data** such as product names, product descriptions, prices, categories, etc. If you would like to learn more about the most recent legal practices of data scraping, see [this blogpost](https://blog.apify.com/is-web-scraping-legal/).
