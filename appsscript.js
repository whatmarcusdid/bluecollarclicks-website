function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // Get the email from the request
  var email = data.email;
  
  // Get current timestamp
  var timestamp = new Date();
  
  // Append the data to the sheet
  sheet.appendRow([timestamp, email]);
  
  // Return success response
  return ContentService.createTextOutput(JSON.stringify({
    'result': 'success',
    'email': email
  })).setMimeType(ContentService.MimeType.JSON);
} 