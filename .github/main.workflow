workflow "lint / test / typings" {
  resolves = [
    "type-check",
    "lint",
    "test"
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
  needs = ["install"]
  runs = "npm run type-check"
}

action "lint" {
  uses = "actions/npm@master"
  needs = ["install"]
  runs = "npm run lint"
}

action "test" {
  uses = "actions/npm@master"
  needs = ["install"]
  runs = "npm test"
}
