const nodeHtmlToImage = require('node-html-to-image');
const Handlebars = require('handlebars');
const fs = require('fs');

function UpdateMyData() {
  // Function to fill the Not Available
  if (data.special_offer_zone.length < 3) {
    while (data.Chicken.length != 3) {
      data.Chicken.push({ menu_name: 'NA', Offer_Price: '-' });
    }
  }
  if (data.combos_of_the_day.length < 2) {
    while (data.Chicken.length != 2) {
      data.Chicken.push({ menu_name: 'NA', Offer_Price: '-' });
    }
  }
  if (data.Chicken.length < 5) {
    while (data.Chicken.length != 5) {
      data.Chicken.push({ menu_name: 'NA', Offer_Price: '-' });
    }
  }
  if (data.river_fish.length < 8) {
    while (data.river_fish.length != 8) {
      data.river_fish.push({ menu_name: 'NA', Offer_Price: '-' });
    }
  }
  if (data.fish_and_seaFood_sec1.length < 6) {
    while (data.fish_and_seaFood_sec1.length != 6) {
      data.fish_and_seaFood_sec1.push({ menu_name: 'NA', Offer_Price: '-' });
    }
  }
  if (data.fish_and_seaFood_sec2.length < 11) {
    while (data.fish_and_seaFood_sec2.length != 11) {
      data.fish_and_seaFood_sec2.push({ menu_name: 'NA', Offer_Price: '-' });
    }
  }
  if (data.Mutton.length < 5) {
    while (data.Mutton.length != 5) {
      data.Mutton.push({ menu_name: 'NA', Offer_Price: '-' });
    }
  }
}

const image = fs.readFileSync('./BgImg.jpg');
const base64Image = new Buffer.from(image).toString('base64');
const dataURI = 'data:image/Jpeg;base64,' + base64Image;


let data = {
  special_offer_zone: [
    { menu_name: 'tandoor', MRP: 150, Offer_Price: 123 },
    { menu_name: 'Leg', MRP: 150, Offer_Price: 1234 },
  ],
  combos_of_the_day: [
    { menu_name: 'tandoor', Offer_Price: 123 },
    { menu_name: 'Leg', Offer_Price: 1234 },
    { menu_name: 'bla', Offer_Price: 442 },
  ],
  Chicken: [
    { menu_name: 'tandoor', Offer_Price: 123 },
    { menu_name: 'Leg', Offer_Price: 1234 },
    { menu_name: 'bla', Offer_Price: 442 },
  ],
  fish_and_seaFood_sec1: [
    { menu_name: 'tandoor', Offer_Price: 123 },
    { menu_name: 'Leg', Offer_Price: 1234 },
    { menu_name: 'bla', Offer_Price: 442 },
  ],

  fish_and_seaFood_sec2: [
    { menu_name: 'tandoor', Offer_Price: 123 },
    { menu_name: 'Leg', Offer_Price: 1234 },
    { menu_name: 'bla', Offer_Price: 442 },
  ],
  river_fish: [
    { menu_name: 'tandoor', Offer_Price: 123 },
    { menu_name: 'Leg', Offer_Price: 1234 },
    { menu_name: 'bla', Offer_Price: 442 },
  ],
  Mutton: [
    { menu_name: 'tandoor', Offer_Price: 123 },
    { menu_name: 'Leg', Offer_Price: 1234 },
  ],
};

UpdateMyData();

nodeHtmlToImage({
  content: [{ background_image: dataURI, data: data, output: './image1.png' }],

  html: `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <style>
          .main-Section {
              background-image: url("{{background_image}}");
              background-repeat: no-repeat;
              background-size: contain;
              height: 750px;
              width: 1000px;
          }
  
          .heading {
              color: rgb(218, 0, 0);
              font-size: 16px;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
              font-weight: bold;
          }
  
          .item-Section {
              width: 300px;
              padding: 10px;
              margin-left: -10px;
              width: 420px;
          }
  
          .borderme {
              border: 2px black solid;
          }
  
          .item-row {
              font-size: 14px;
              font-weight: 600;
              padding: 2.5px;
              margin-bottom: 1px;
  
          }
  
          .tem-name {
              padding-left: px;
          }
  
          .item-MRP {
              position: absolute;
              left: 290px;
          }
  
          .item-offerPrice {
              position: absolute;
              left: 380px;
          }
  
          .MRP {
              position: absolute;
              left: 290px;
          }
  
          .offerPrice {
              position: absolute;
              left: 350px;
          }
  
          .row {
              margin: 0px;
              padding-left: 0px;
          }
  
          body {
              width: 985px;
              height: 750px;
          }
  
  
          .call-section {
              background-color: black;
              color: aliceblue;
              font-weight: 700;
              height: 80px;
              border-radius: 15px;
              width: 300px;
              margin: auto;
              width: 75%;
              padding-top: 25px;
          }
  
          .contact-heading {
              font-weight: 800;
              font-size: 13px;
          }
  
          .last-line {
              width: 70%;
              margin-left: 15% !important;
              margin-right: 25% !important;
              margin-top: 5px;
              margin-bottom: 10px;
          }
  
          /*
  
              !Positioning for specific Sections
          */
          .special-offer-zone {
              position: fixed;
              top: 110px;
              left: 40px;
          }
  
          .combos-of-the-day {
              position: fixed;
              top: 240px;
              left: 40px;
          }
  
          .chicken-section {
              position: fixed;
              top: 350px;
              left: 40px;
          }
  
          .fish-and-sea-food-first-page {
              position: fixed;
              top: 510px;
              left: 40px;
          }
  
          .fish-and-sea-food-second-page {
              position: fixed;
              top: 20px;
              left: 520px;
          }
  
          .river-fish {
              position: fixed;
              top: 310px;
              left: 520px;
          }
  
          .mutton-section {
              position: fixed;
              top: 545px;
              left: 520px;
          }
  
          .contact-me-section {
              position: fixed;
              top: 600px;
              left: 560px;
          }
      </style>
  
  </head>
  
  <body>
      <div class="main-Section">
          <!-- ! Start of Special Offer -->
          <div class="special-offer-zone item-Section">
              <div class="heading" style="margin-bottom: 0px;">
                  SPECIAL OFFER ZONE (UPTO 15% OFF)
              </div>
  
              <div class="item-row row " style="margin-bottom: 10px;">
  
                  <span class="item-name">
                  </span>
                  <span class="item-MRP fw-bold">
                      <b>MRP</b>
                  </span>
                  <div class="item-offerPrice fw-bold" style="width: 30px; position:absolute; left:380px">
                      <b>Offer Price</b>
                  </div>
              </div>
              <br>

              {{#each data.special_offer_zone}}
              <div class="item-row row ">
  
                  <div class="item-name">
                      {{menu_name}}
                  </div>
                  <div class="item-MRP">
                      {{MRP}}
                  </div>
                  <div class="item-offerPrice">
                        {{Offer_Price}}
                  </div>
              </div>
              {{/each}}
          </div>
          <!-- ! End Of Special Offer -->
  
          <!-- ! Start of Combo"s Day -->
          <div class="item-Section combos-of-the-day">
              <div class="heading" style="margin-bottom: -2px;">
                  COMBO"S OF THE DAY
              </div>
           
              {{#each data.combos_of_the_day}}
              <div class="item-row row ">
  
                  <div class="item-name">
                      {{menu_name}}
                  </div>
                  <div class="item-MRP">
                      
                  </div>
                  <div class="item-offerPrice">
                        {{Offer_Price}}
                  </div>
              </div>
              {{/each}}
       
          </div>
          <!-- ! End of Combo"s Day -->
  
          <!-- ! Start of CHICKEN -->
          <div class="chicken-section item-Section">
              <div class="heading" style="margin-bottom: 0px;">
                  CHICKEN
              </div>
  
         
              {{#each data.Chicken}}
              <div class="item-row row ">
  
                  <div class="item-name">
                      {{menu_name}}
                  </div>
                  <div class="item-MRP">
                      
                  </div>
                  <div class="item-offerPrice">
                        {{Offer_Price}}
                  </div>
              </div>
              {{/each}}
         
          
          </div>
          <!-- ! End Of CHICKEN -->
  
          <!-- ! Start of Fish And SeaFood -->
          <div class="fish-and-sea-food-first-page item-Section ">
              <div class="heading" style="margin-bottom: 0px;">
                  Fish And SeaFood
              </div>
  
            
              {{#each data.fish_and_seaFood_sec1}}
              <div class="item-row row ">
  
                  <div class="item-name">
                      {{menu_name}}
                  </div>
                  <div class="item-MRP">
                      
                  </div>
                  <div class="item-offerPrice">
                        {{Offer_Price}}
                  </div>
              </div>
              {{/each}}
       
          </div>
          <!-- ! End Of Fish And SeaFood -->
  
          <!-- todo End OF 1st Page -->

          <!-- ! Continue of Fish And SeaFood on 2nd Page -->
          <div class="fish-and-sea-food-second-page item-Section">
    
           
          {{#each data.fish_and_seaFood_sec2}}
          <div class="item-row row ">

              <div class="item-name">
                  {{menu_name}}
              </div>
              <div class="item-MRP">
                  
              </div>
              <div class="item-offerPrice">
                    {{Offer_Price}}
              </div>
          </div>
          {{/each}}
          </div>
          <!-- ! End Of Fish And SeaFood -->
  
          <!-- ! Start of River Fish -->
          <div class="river-fish item-Section">
              <div class="heading" style="margin-bottom: 0px;">
                  RIVER FISH
              </div>
  
              {{#each data.river_fish}}
              <div class="item-row row ">
    
                  <div class="item-name">
                      {{menu_name}}
                  </div>
                  <div class="item-MRP">
                      
                  </div>
                  <div class="item-offerPrice">
                        {{Offer_Price}}
                  </div>
              </div>
              {{/each}}
  
          </div>
          <!-- ! End Of  River Fish -->
  
  
          <!-- ! Start of Mutton -->
          <div class="mutton-section item-Section ">
              <div class="heading" style="margin-bottom: 0px;">
                  MUTTON
              </div>
  
              {{#each data.Mutton}}
              <div class="item-row row ">
    
                  <div class="item-name">
                      {{menu_name}}
                  </div>
                  <div class="item-MRP">
                      
                  </div>
                  <div class="item-offerPrice">
                        {{Offer_Price}}
                  </div>
              </div>
              {{/each}}
  
          </div>
          <!-- ! End Of CHICKEN -->
  
  
          <!-- Contact Me Section -->
          <!-- <div class="contact-me-section">
              <div class="contact-heading">
                  TO ORDER YOUR FAVORITE FISH | CHICKEN | MUTTON
                  <hr class="last-line" />
              </div>
              <center>
                  <div class="call-section"">
                      
                          CALL /WHATSAPP
                          8884442062
              
                  </div>
              </center>
  
          </div> -->
  
  
  
  
  
          <script src=" https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
              </script>
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
              integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
              crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
              integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
              crossorigin="anonymous"></script>
  </body>
  
  </html>`,
}).then(() => console.log('The images were created successfully!'));
