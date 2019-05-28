workflow "Deploy to Now" {
  resolves = [
    "Alias",
    "Filter out master branch",
    "TypeScript Typings Check",
    "Install",
  ]
  on = "push"
}

action "Deploy" {
  uses = "actions/zeit-now@master"
  needs = ["TypeScript Typings Check"]
  secrets = ["ZEIT_TOKEN"]
}

action "Alias" {
  uses = "actions/zeit-now@master"
  args = "alias"
  secrets = ["ZEIT_TOKEN"]
  needs = ["Filter out master branch"]
}

action "Filter out master branch" {
  uses = "actions/bin/filter@master"
  needs = ["Deploy"]
  args = "branch master"
}

action "TypeScript Typings Check" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install"]
  args = "run type-check"
}

action "Install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}
