const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run () {
  console.log("Helloo aaaaa")
  core.notice("Hello, this is notice")

}

run()