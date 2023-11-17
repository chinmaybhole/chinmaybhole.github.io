//index.js
function sendEmail() {
  console.log("Hello WOrldd");
  Email.send({
    Host: "smtp.gmail.com",
    Username: "chinmay.bhole@somaiya.edu",
    Password: "chinmay.bhole",
    To: "chinmaymotog5@gmail.com",
    From: "chinmay.bhole@somaiya.edu",
    Subject: "TESTING",
    Body: "Just testing mail for portfolio website",
  })
    .then((message) => alert("mail sent successfully"))
    .catch(() => alert("ERR"));
}
