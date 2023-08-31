const args = process.argv.slice(2);



const beepAfterDelay = (delay) => {
  if (delay >= 0 && !isNaN(delay)) {
    setTimeout(() => {
      process.stdout.write(' beep beep \n'); 
    }, delay * 1000);
  }
};
for (const arg of args) {
  const delay = parseInt(arg);
  beepAfterDelay(delay);
}
// I couldn`t make the sound feature work 