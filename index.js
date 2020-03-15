const { Confirm } = require('enquirer')
new Confirm({ message: 'Run?' })
  .run()
  .then((answer) => console.log(answer))
