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
let data = {
  special_offer_zone: [],
  combos_of_the_day: [],
  Chicken: [
    { menu_id: 'RF3', menu_name: 'Roopchand', Offer_Price: '179' },
    { menu_id: 'RF4', menu_name: 'SeaBass', Offer_Price: '689' },
    { menu_id: 'RF5', menu_name: 'Pabda', Offer_Price: '489' },
  ],
  fish_and_seaFood_sec1: [
    { menu_id: 'RF1', menu_name: 'Rohu', Offer_Price: '179' },
    { menu_id: 'RF2', menu_name: 'Catla', Offer_Price: '219' },
    { menu_id: 'RF3', menu_name: 'Roopchand', Offer_Price: '179' },
    { menu_id: 'RF4', menu_name: 'SeaBass', Offer_Price: '689' },
  ],

  fish_and_seaFood_sec2: [
    { menu_id: 'RF1', menu_name: 'Rohu', Offer_Price: '179' },
    { menu_id: 'RF2', menu_name: 'Catla', Offer_Price: '219' },
    { menu_id: 'RF3', menu_name: 'Roopchand', Offer_Price: '179' },
    { menu_id: 'RF4', menu_name: 'SeaBass', Offer_Price: '689' },
    { menu_id: 'RF5', menu_name: 'Pabda', Offer_Price: '489' },
    { menu_id: 'RF6', menu_name: 'Tengda', Offer_Price: '369' },
    { menu_id: 'RF7', menu_name: 'Basa Fillets', Offer_Price: '429' },
  ],
  river_fish: [
    { menu_id: 'RF1', menu_name: 'Rohu', Offer_Price: '179' },
    { menu_id: 'RF2', menu_name: 'Catla', Offer_Price: '219' },
    { menu_id: 'RF3', menu_name: 'Roopchand', Offer_Price: '179' },
    { menu_id: 'RF4', menu_name: 'SeaBass', Offer_Price: '689' },
    { menu_id: 'RF5', menu_name: 'Pabda', Offer_Price: '489' },
    { menu_id: 'RF6', menu_name: 'Tengda', Offer_Price: '369' },
    { menu_id: 'RF7', menu_name: 'Basa Fillets', Offer_Price: '429' },
  ],
  Mutton: [],
};
