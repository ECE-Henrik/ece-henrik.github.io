document.addEventListener('DOMContentLoaded', () => {

    // Unix timestamp (in seconds) to count down to
    var twoDaysFromNow = (new Date("2024-12-01T00:00:00.000-05:00").getTime() / 1000);
  
    // Set up FlipDown
    var flipdown = new FlipDown(twoDaysFromNow)
  
      // Start the countdown
      .start()
  
      // Do something when the countdown ends
      .ifEnded(() => {
        console.log('The countdown has ended!');
      });
  
    // Toggle theme
    // var interval = setInterval(() => {
    //   let body = document.body;
    //   body.classList.toggle('light-theme');
    //   //body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    //   //body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
    // }, 5000);
    
    var ver = document.getElementById('ver');
    ver.innerHTML = flipdown.version;
  });
  