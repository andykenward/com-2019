# workflow "lint / test / typings" {
#   resolves = [
#     "install",
#     "type-check",
#     "lint",
#     "test",
#   ]
#   on = "push"
# }
workflow "Deploy Storybook" {
  on = "push"
  resolves = [
    "deploy-storybook"
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
  uses = "./action-deploy/"
  secrets = [
    "GITHUB_TOKEN",
    "NOW_TOKEN",
  ]
  args= "-- --local-config=./.storybook/now.json"
}

# MASTER
# workflow "Master - Deploy Storybook" {
#   on = "push"
#   resolves = [
#     "master-deploy-storybook"
#    ]
# }

# action "master-branch-filter" {
#   uses = "actions/bin/filter@master"
#   args = "branch master"
# }

# action "master-deploy-storybook" {
#   needs = [
#     "master-branch-filter",
#     "install",
#     "build-storybook",
#    ]
#   uses = "actions/zeit-now@master"
#   secrets = ["ZEIT_TOKEN"]
#   args = "deploy --target production --local-config=./.storybook/now.json"
# }


# action "not-master-branch-filter" {
#   uses = "actions/bin/filter@master"
#   args = "not branch master"
# }

# action "deploy-storybook" {
#   needs = [
#     "not-master-branch-filter",
#     "install",
#     "build-storybook",
#    ]
#   uses = "actions/zeit-now@master"
#   secrets = ["ZEIT_TOKEN"]
#   args = "deploy --local-config=./.storybook/now.json"
# }

