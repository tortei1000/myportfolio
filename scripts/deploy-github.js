const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/tortei1000/tiago-profile',
  },
  () => {
    console.log('Deploy Complete!')
  }
)