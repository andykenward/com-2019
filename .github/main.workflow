workflow "Deploy" {
  on = "push"
  resolves = [
    "deploy-storybook",
    "deploy"
   ]
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


action "build-storybook" {
  needs = [
    "install",
    "type-check",
    "lint",
    "test",
  ]
  uses = "actions/npm@master"
  runs = "npm run build-storybook"
}


action "deploy-storybook" {
  needs = [
    "build-storybook",
  ]
  uses = "andykenward/deploy-now@master"
  secrets = [
    "GITHUB_TOKEN",
    "NOW_TOKEN",
  ]
  args= "-- --local-config=./.storybook/now.json"
}

action "deploy" {
  needs = [
    "type-check",
    "lint",
    "test",
  ]
  uses = "andykenward/deploy-now@master"
  secrets = [
    "GITHUB_TOKEN",
    "NOW_TOKEN",
  ]
}

