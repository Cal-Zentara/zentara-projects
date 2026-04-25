function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Zentara')
    .addItem('Send Emails', 'sendEmails')
    .addItem('Setup Sheet', 'setupSheet')
    .addToUi();
}

function setupSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clear();
  var headers = ['Company', 'Contact Name', 'Email', 'Status', 'Date Sent'];
  sheet.getRange(1, 1, 1, 5).setValues([headers]);
  sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
  var data = [
    ['Yorba Linda Remodel', 'John', 'john@yorbalindaremodel.com', '', ''],
    ['Aaron Alt Construction', 'Aaron', 'aaronaltconstruction@gmail.com', '', ''],
    ['Craig Beinlich Construction', 'Craig', 'craigbeinlich@sbcglobal.net', '', ''],
    ['Sea Pointe Design & Remodel', '', 'cservices@seapointe.com', '', ''],
    ['Inspired Remodels', 'Joe', 'info@inspiredremodels.com', '', ''],
    ['Preferred Kitchen & Bath', '', 'info@preferredkb.com', '', ''],
    ['Custom ADU Builder', '', 'contact@customadubuilder.com', '', ''],
    ['Tustin Hills Remodeling', '', 'scottshomepros@gmail.com', '', ''],
    ['Royal Construction', '', 'office@royal-construction.com', '', ''],
    ['Myles Construction', '', 'sales@mylesconstruction.com', '', ''],
    ['BEST Techs Contracting', 'Penny', 'penny@besttechscontracting.com', '', ''],
    ['DL Restcon', 'Darryl', 'dhuie@dlrestcon.com', '', ''],
    ['Kol & Co.', '', 'office@kol-and-co.com', '', ''],
    ['Tryangle Construction', '', 'hello@tryangleconstruction.com', '', ''],
    ['Vulcon Builders', '', 'office@vulconbuilders.com', '', ''],
    ['House of Remodeling', '', 'info@houseofremodelings.com', '', ''],
    ['OC Remodeling Studio', '', 'project@ocremodelingstudio.com', '', ''],
    ['Vertical Construction Inc.', '', 'office@verticalconstruction.com', '', ''],
    ['TNT Construction', '', 'stinturin@roadrunner.com', '', ''],
    ['USA Home Remodeling', '', 'contact@usahomeremodeling.com', '', ''],
    ['Horizon Remodeling Inc.', '', 'h@horizon-cr.com', '', ''],
    ['Horizon Builders', '', 'horizonbuildersoffice@gmail.com', '', ''],
    ['Developers General Contracting', '', 'info@developersgc.com', '', ''],
    ['Newland Construction', 'Terry', 'terry@newlandconstruction.com', '', ''],
    ['Dreamworks Remodeling', '', 'info@dreamworksremodeling.com', '', ''],
    ['OC Contractor', 'Isaac', 'info@occontractor.com', '', ''],
    ['The End Result', 'Jay', 'info@theendresult.net', '', ''],
    ['Signature Design Center', 'Fred', 'signature-design@sbcglobal.net', '', ''],
    ['Elegant Kitchens & Bath', '', 'info@elegantkab.com', '', ''],
    ['Jem Remodel', 'Jeanine', 'jeanine@jemremodel.com', '', ''],
    ['XL Contracting Inc.', '', 'kforde@pacbell.net', '', ''],
    ['G.A.P. Home Improvement', '', 'gapremodeling@gmail.com', '', ''],
    ['Modern Renovations', '', 'info@modernrenovations.com', '', ''],
    ['ALSA Construction', '', 'office@alsacon.com', '', ''],
    ['APlus Interior Design & Remodeling', '', 'sales@apluskitchen.com', '', ''],
    ['Dreamcatcher Remodeling', '', 'contact@dreamcatcher-remodeling.com', '', ''],
    ['Coastline Construction OC', '', 'contact@coastlineoc.com', '', ''],
    ['Greater Pacific Construction', '', 'info@greaterpacificconstruction.com', '', ''],
    ['Forever Home Remodeling', '', 'info@foreverhomeremodeling.com', '', ''],
    ['Serhal Builders', '', 'info@serhalbuilders.com', '', ''],
    ['Bourke Construction', '', 'bourkecon@gmail.com', '', ''],
    ['DESTINY Construction Inc.', 'Isaac', 'mydestinyconstruction@gmail.com', '', ''],
    ['Platinum Home Builders', '', 'platinumhomecenter@gmail.com', '', ''],
    ['JL Construction & Remodeling', '', 'jlconstructionandremodel@gmail.com', '', ''],
    ['Creative Home Remodeling Group', '', 'creativeremodeling.group@gmail.com', '', '']
  ];
  sheet.getRange(2, 1, data.length, 5).setValues(data);
  sheet.autoResizeColumns(1, 5);
  SpreadsheetApp.getUi().alert(data.length + ' companies loaded!');
}

function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var sent = 0;
  for (var i = 1; i < data.length; i++) {
    var company = data[i][0];
    var name = data[i][1];
    var email = data[i][2];
    var status = data[i][3];
    if (!email || status === 'Sent') continue;
    if (sent >= 5) break;
    var greeting = name ? 'Hi ' + name + ',' : 'Hi there,';
    var lines = [];
    lines.push(greeting);
    lines.push('');
    lines.push('I work with small construction businesses to give them a');
    lines.push('stronger online presence and make sure no enquiry slips');
    lines.push('through the cracks.');
    lines.push('');
    lines.push('I put together a quick demo to show you what that looks');
    lines.push('like - clean, professional, with built-in automation that');
    lines.push('handles enquiries and follow-ups while you are on the job.');
    lines.push('');
    lines.push('Here is the demo: https://cal-zentara.github.io/ApexBuilders/');
    lines.push('');
    lines.push('Worth a 10-minute look?');
    lines.push('');
    lines.push('Cal');
    lines.push('Zentara');
    var body = lines.join('\n');
    var subject = 'Quick idea for ' + company;
    GmailApp.sendEmail(email, subject, body);
    sheet.getRange(i + 1, 4).setValue('Sent');
    sheet.getRange(i + 1, 5).setValue(new Date().toLocaleDateString());
    sent++;
  }
  var remaining = 0;
  for (var j = 1; j < data.length; j++) {
    if (data[j][2] && data[j][3] !== 'Sent') remaining++;
  }
  remaining = remaining - sent;
  SpreadsheetApp.getUi().alert(sent + ' emails sent! ' + remaining + ' remaining.');
}
