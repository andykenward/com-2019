workflow "Deploy to Now" {
  resolves = [
    "deploy"
  ]
  on = "push"
}

# NPM install packages
action "install" {
  uses = "actions/npm@master"
  runs = "npm ci"
}

# NPM run type-check
action "type-check" {
  uses = "actions/npm@master"
  needs = "install"
  runs = "npm run type-check"
}

# deploys to now
action "deploy" {
  uses = "primer/deploy@master"
  needs = [
    "install",
    "type-check"
  ]
  secrets = [
    "GITHUB_TOKEN",
    "NOW_TOKEN",
  ]
}
