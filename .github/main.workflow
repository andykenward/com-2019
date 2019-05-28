workflow "Deploy to Now" {
  resolves = [
    "release"
  ]
  on = "push"
}

# NPM install packages
action "install" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "install"
}

# NPM run type-check
action "type-check" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = "install"
  args = "run type-check"
}

# Deploy, and write deployment to file
action "deploy" {
  needs = "type-check"
  uses = "actions/zeit-now@master"
  args = "--public --no-clipboard deploy ./ > $HOME/$GITHUB_ACTION.txt"
  secrets = ["ZEIT_TOKEN"]
}

# Always create an alias using the SHA
action "alias" {
  needs = "deploy"
  uses = "actions/zeit-now@master"
  args = "alias `cat /github/home/deploy.txt` $GITHUB_SHA"
  secrets = ["ZEIT_TOKEN"]
}

# Filter for master branch
action "master-branch-filter" {
  needs = "alias"
  uses = "actions/bin/filter@master"
  args = "branch master"
}

# Requires now.json in repository
action "release" {
  needs = "master-branch-filter"
  uses = "actions/zeit-now@master"
  secrets = ["ZEIT_TOKEN"]
  args = "alias --local-config=./now.json"
}



