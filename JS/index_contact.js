document.getElementById("contButton").addEventListener("click", function () {
    const userEmail = document.getElementById("mail").value;
    const userMessage = document.getElementById("message").value;

    if (!userEmail || !userMessage) {
        alert("Please fill in all fields!");
        return;
    }

    // Costruisci il link per Gmail nel browser
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=manuelbelli423@gmail.com&su=New%20Contact%20Form%20Submission&body=From:%20${userEmail}%0A%0AMessage:%0A${encodeURIComponent(userMessage)}`;

     // Apre una nuova scheda con Gmail precompilato
     window.open(gmailLink, '_blank');  // '_blank' apre una nuova scheda
});