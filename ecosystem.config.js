module.exports = {
  apps : [{
    name   : "pixoo",
    script : "./index.js",
    instances: 1,
    cron_restart: '* * * * *'
  }]
}
