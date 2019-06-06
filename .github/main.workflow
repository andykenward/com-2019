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
    "install-storybook",
    "build-storybook"
   ]
}

action "install-storybook" {
  uses = "actions/npm@master"
  runs = "npm ci"
}

action "build-storybook" {
  needs = [
    "install-storybook",
  ]
  uses = "actions/npm@master"
  runs = "npm run build-storybook"
}

action "not-master-branch-filter" {
  uses = "actions/bin/filter@master"
  args = "not branch master"
}

action "deploy-storybook" {
  needs = [
    "not-master-branch-filter",
    "install-storybook",
    "build-storybook",
   ]
  uses = "actions/zeit-now@master"
  secrets = ["ZEIT_TOKEN"]
  args = "deploy --local-config=./.storybook/now.json"
}

action "master-branch-filter" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}


action "master-deploy-storybook" {
  needs = [
    "master-branch-filter",
    "install-storybook",
    "build-storybook",
   ]
  uses = "actions/zeit-now@master"
  secrets = ["ZEIT_TOKEN"]
  args = "deploy --target production --local-config=./.storybook/now.json"
}


