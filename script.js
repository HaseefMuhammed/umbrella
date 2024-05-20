function showWelcome() {
    // Get the name from the input field
    var name = document.getElementById('inputName').value;

    // Display the welcome message
    document.getElementById('welcomeModalLabel').innerHTML = 'Hello, ' + name + '! Join the Umbrella Movement and Stay Covered!';

    // Show the welcome modal
    $('#welcomeModal').modal('show');

}
// function music(){
//     var audio = new Audio("images/song invitation by Haseef.mp3"); // Replace with the path to your music file
//         audio.loop = true; // Set the loop property to true
//         audio.play(); // Start playing the music
// }
// function stopMusic() {
//     if (audio) {
//         audio.pause(); // Pause the audio
//         audio.currentTime = 0; // Reset the playback to the beginning
//     }
// }

var audio; // Declare the audio variable globally

function music() {
    // Display an alert

    // Play looped music after the alert is closed
    setTimeout(function () {
        audio = new Audio('images/vote.mp3'); // Replace with the path to your music file
        audio.loop = true; // Set the loop property to true
        audio.play(); // Start playing the music
    }, 100);
}

function stopMusic() {
    if (audio) {
        audio.pause(); // Pause the audio
        audio.currentTime = 0; // Reset the playback to the beginning
    }
}

console.log("Made By Haseef Muhammed PC")