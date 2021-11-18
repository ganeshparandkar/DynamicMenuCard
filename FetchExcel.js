const { google } = require('googleapis');
const keys = require('./key.json');

const client = new google.auth.JWT(keys.client_email, null, keys.private_key, [
  'https://www.googleapis.com/auth/spreadsheets',
]);



client.authorize((err, tokens) => {
  if (err) {
    console.log(err);
    return; 
  } else {
    console.log('Connected');
    gsrun(client).then((data) => {
      let mydata = data;
      // console.log(mydata);
      for (let i = 0; i < mydata.length; i++) {
        // console.log(mydata[i][0]);
        if (0 <= i && i < 3) {
          special_offer.push({
            menu_id: mydata[i][0],
            menu_name: mydata[i][1],
            Offer_Price: mydata[i][2],
            MRP: mydata[i][3],
          });
        }
        if (3 <= i && i < 5) {
          combo_offer.push({
            menu_id: mydata[i][0],
            menu_name: mydata[i][1],
            Offer_Price: mydata[i][2],
          });
        }
        if (5 <= i && i < 10) {
          chicken_items.push({
            menu_id: mydata[i][0],
            menu_name: mydata[i][1],
            Offer_Price: mydata[i][2],
          });
        }

        if (10 <= i && i < 16) {
          fish_and_seaFood_sec1.push({
            menu_id: mydata[i][0],
            menu_name: mydata[i][1],
            Offer_Price: mydata[i][2],
          });
        }
        if (16 <= i && i < 28) {
          fish_and_seaFood_sec2.push({
            menu_id: mydata[i][0],
            menu_name: mydata[i][1],
            Offer_Price: mydata[i][2],
          });
        }
        if (28 <= i && i < 36) {
          river_fish.push({
            menu_id: mydata[i][0],
            menu_name: mydata[i][1],
            Offer_Price: mydata[i][2],
          });
        }
        if (36 <= i && i < 41) {
          mutton_items.push({
            menu_id: mydata[i][0],
            menu_name: mydata[i][1],
            Offer_Price: mydata[i][2],
          });
        }
      }
    });
  }
});

var gsrun = async (cl) => {
  const gsapi = google.sheets({
    version: 'v4',
    auth: cl,
  });
  const Meatable_menu = {
    spreadsheetId: '1IbUQGGpbsc9PcDxpsfZB3Jyo0C4PaXNxp5lIlq9lOPw', // Menu Card Data
    range: 'Sheet1!A1:D41',
  };
  let MyMenu = await gsapi.spreadsheets.values.get(Meatable_menu);
  let MenuCard = MyMenu.data.values;
  return MenuCard;
};

setTimeout(() => {
  MyMenu = {
    special_offer_zone: special_offer,
    combos_of_the_day: combo_offer,
    Chicken: chicken_items,
    fish_and_seaFood_sec1:fish_and_seaFood_sec1,
  
    fish_and_seaFood_sec2: fish_and_seaFood_sec2,
    river_fish: river_fish,
    Mutton: mutton_items,
  };
  console.log(MyMenu)

  // console.log(special_offer);
  // console.log(combo_offer)
  // console.log(chicken_items);
  // console.log(fish_and_seaFood_sec1);
  // console.log(fish_and_seaFood_sec2);
  // console.log(river_fish);
  // console.log(mutton_items);
}, 2000);
