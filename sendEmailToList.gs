function sendEmails() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const dataRange = sheet.getRange("A3:B60");
  const data = dataRange.getValues();

  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const emailAddress = row[0];
    const participantsName = row[1];
    const subject = `Online Group Chat Invitation | Google Cloud Arcade Facilitator Program`;

    console.log(`Row ${i + 2}: ${participantsName}, ${emailAddress}`); // Logging the data

    if (!emailAddress) {
      console.log(`Row ${i + 2}: Email address is missing. Skipping this row.`);
      continue;
    }

    const body = createEmailMessage(participantsName);

  function createEmailMessage(participantsName) {
    const body = 

`
<div style="font-family: Arial, sans-serif; color: #333;">
<p>Dear <strong>${participantsName}</strong>,</p>

<p>We are excited to invite you to join our online chat community on WhatsApp!</p>

<p>We have already created a WhatsApp group where participants can connect, share ideas, ask questions, and receive support from facilitator. This group is a great opportunity for you to engage with other participants and enhance your learning experience.</p>


<p>Here are the details to join the WhatsApp group:</p>

<p><strong>Group Link: bit.ly/GroupGoogleArcade</strong></p>

<p><strong>Facilitator Name: Muhammad Ali Yusuf</strong></p>


<p>We look forward to seeing you in the group and hope you find this community valuable for your learning journey.</p>

<p>See you on the community,<br>
Your Google Cloud Arcade Facilitators</p>
</div>
`;

  return body;
}
    try {
      MailApp.sendEmail({
        to: emailAddress, 
        subject: subject,
        htmlBody: body,
        name: "Google Cloud Arcade Facilitator"
        });
      console.log(`Row ${i + 2}: Email sent to ${emailAddress}`);
    } catch (error) {
      console.log(`Row ${i + 2}: Error sending email to ${emailAddress}. Error message: ${error.message}`);
    }
  }
}
