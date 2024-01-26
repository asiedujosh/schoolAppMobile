export const timer = async time => {
  let timer = time;

  let updateAndCheck = () => {
    updateTimer();

    if (timer <= 0) {
      //showAlert();
      clearInterval(interval);
      return 0;
    } else {
      return timer--;
    }
  };

  // Initial display
  updateTimer();

  // Update the timer every second
  const interval = setInterval(updateAndCheck, 1000);
};
