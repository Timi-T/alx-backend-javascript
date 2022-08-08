// Simple program to write to stdout

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  const uname = data.toString();
  if (uname !== '\n') {
    process.stdout.write(`Your name is: ${uname}`);
    console.log('This important software is now closing');
    process.exit();
  }
});
