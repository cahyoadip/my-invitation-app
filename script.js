document.getElementById('copyButton').addEventListener('click', function() {
    const recipient = document.getElementById('recipientInput').value;
    const formattedRecipient = recipient.replace(/ /g, '+');
    const templateText = `Salam sejatera bagi kita semua…
Bersama rahmat dan berkat Tuhan yang telah menyatukan kami dan tanpa mengurangi rasa hormat, kami berniat ingin mengumumkan kepada Bapak/Ibu/Saudara/i mengenai acara Pernikahan kami:

Clara Indah Wulandari, S.T.P & Isidorus Cahyo Adi Prasetyo, S.Kom

Detail acara :
https://wedding.goodchoice.id/clara-cahyo/?to=${formattedRecipient}

Merupakan suatu kehormatan dan kebahagiaan apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do’a restu pada acara kami.
Kami memohon maaf yang sebesar - besarnya perihal undangan hanya di bagikan melalui pesan ini, dikarenakan keterbatasan jarak dan waktu.
Atas perhatiannya kami sampaikan terimakasih.

kami yang berbahagia, 

Clara & Cahyo`;

    document.getElementById('outputText').value = templateText;

    // Copy the generated text to clipboard
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // For mobile devices

    try {
        const successful = document.execCommand('copy');
        const msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
});
