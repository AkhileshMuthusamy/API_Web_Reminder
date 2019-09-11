const cron = require('node-cron');
const shell = require('shelljs');

cron.schedule('28 20 * * MON-FRI', () => {
  shell.exec('notify-send \'Dinner Time\' "Hope you got something special!" --icon="$HOME/Icons/restaurant.png"');
});
