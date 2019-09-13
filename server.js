const cron = require('node-cron');
const shell = require('shelljs');

cron.schedule('28 20 * * MON-FRI', () => {
  shell.exec('notify-send \'Dinner Time\' "Hope you got something special!" --icon="$HOME/Icons/restaurant.png"');
});

cron.schedule('50 22 * * MON-FRI', () => {
  shell.exec('notify-send \'Synergy\' "Fill you daily task." --icon="$HOME/Icons/contract.png"');
});

cron.schedule('45 16 * * SAT', () => {
  shell.exec('notify-send \'Synergy\' "Fill you daily task." --icon="$HOME/Icons/contract.png"');
});
