module.exports = {
  apps: [
    {
      name: 'unclez',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: '.output/server/index.mjs',
      env: {
        NODE_ENV: 'production',
      }
    }
  ]
}