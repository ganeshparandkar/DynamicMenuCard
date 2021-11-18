let sample = [
  ['CP1', 'CP1(1 kg Chicken Curry cut +500 gms Prawns)', '469'],
  ['CP2', 'CP2(1kg Prawn + 500 gm Chicken Curry Cut)', '589'],
  ['C1', 'Chicken Skinout', '249'],
  ['C2', 'Chicken Boneless', '369'],
  ['C3', 'Chicken Drumstick', '329'],
  ['C4', 'Chicken Whole leg', '329'],
  ['C5', 'Chicken Kheema', '389'],
  ['F1', 'Mathi', '299'],
  ['F2', 'Netholi', '399'],
  ['F3', 'Ayla', '489'],
  ['F4', 'Prawn', '499'],
  ['F5', 'Sankara', '489'],
  ['F6', 'Blue Crab', '629'],
  ['F7', 'Karimeen', '549'],
  ['F8', 'White Pomfret', '1099'],
  ['F9', 'Para', '699'],
  ['F10', 'Seer Fish', '1399'],
  ['F11', 'Salmon', '899'],
  ['RF1', 'Rohu', '179'],
  ['RF2', 'Catla', '219'],
  ['RF3', 'Roopchand', '179'],
  ['RF4', 'SeaBass', '689'],
  ['RF5', 'Pabda', '489'],
  ['RF6', 'Tengda', '369'],
  ['RF7', 'Basa Fillets', '429'],
  ['RF8', 'Indian Basa/Pangus', '159'],
  ['M1', 'Mutton Mix', '729'],
  ['M2', 'Mutton Leg/Shoulder', '789'],
  ['M3', 'Mutton Chops', '749'],
  ['M4', 'Mutton Kheema', '999'],
  ['M5', 'Mutton Boneless', '999'],
];
let m = { menu_name: 'Leg', MRP: 150, Offer_Price: 1234 };

let riverFish = []
let chicken = []
sample.forEach(element => {

    if (element[0].includes('RF'))
        riverFish.push({ menu_name: element[0]+'.  '+element[1], Offer_Price: element[2] })

        

    if (element[0].includes('C'))
        chicken.push({ menu_name: element[0]+'.  '+element[1], Offer_Price: element[2] })


});
console.log(riverFish);
console.log(chicken);