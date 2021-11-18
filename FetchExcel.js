const { google } = require('googleapis');
const keys = require('./key.json');

const client = new google.auth.JWT(keys.client_email, null, keys.private_key, [
  'https://www.googleapis.com/auth/spreadsheets',
]);

client.authorize((err, tokens) => {
  if (err) {
    console.log(err);
    return; // just get out from the function
  } else {
    console.log('Connected');
    gsrun(client).then((data) => {
      let mydata = data;
      console.log(mydata);
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
    range: 'Sheet1!A1:C100',
  };
  let MyMenu = await gsapi.spreadsheets.values.get(Meatable_menu);
  let MenuCard = MyMenu.data.values;
  return MenuCard;
};
