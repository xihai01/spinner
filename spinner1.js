setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  //need to escape the backslash since its a special character
  process.stdout.write('\r\\    ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r\\    ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r|   ');
  process.stdout.write('\n');
}, 1500);