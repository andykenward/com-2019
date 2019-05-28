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
  uses = "actions/zeit-now@master"
  needs = [
    "install",
    "type-check"
  ]
  secrets = [
     "ZEIT_TOKEN"
  ]
}

# action "filter-out-master-branch" {
#   uses = "actions/bin/filter@master"
#   needs = ["deploy"]
#   args = "branch master"
# }

# # Always create an alias using the SHA
# action "alias" {
#   needs = ["filter-out-master-branch"]
#   uses = "actions/zeit-now@master"
#   args = "alias `cat /github/home/deploy.txt` $GITHUB_SHA"
#   secrets = ["ZEIT_TOKEN"]
# }
    
