workflow "lint / test / typings" {
  resolves = [
    "install",
    "type-check",
    "lint",
    "test",
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

workflow "Deploy Storybook" {
  on = "push"
  resolves = [
    "master-branch-filter",
    "install-storybook",
    "build-storybook",
    "deploy-storybook",
   ]
}

action "master-branch-filter" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "install-storybook" {
  needs = ["master-branch-filter"]
  uses = "actions/npm@master"
  runs = "npm ci"
}

action "build-storybook" {
  needs = [
    "master-branch-filter",
    "install-storybook",
  ]
  uses = "actions/npm@master"
  runs = "npm run build-storybook"
}

action "deploy-storybook" {
  needs = [
    "master-branch-filter",
    "install-storybook",
    "build-storybook",
   ]
  uses = "actions/zeit-now@master"
  secrets = ["ZEIT_TOKEN"]
  args = "deploy --target production --local-config=./.storybook/now.json"
}
