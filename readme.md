# rollup-webgl-application

[![build](https://github.com/juliendargelos/rollup-three-application/workflows/build/badge.svg?branch=master)](https://github.com/juliendargelos/rollup-three-application/actions?workflow=build)<!--
[![deploy](https://github.com/juliendargelos/rollup-three-application/workflows/deploy/badge.svg?branch=master)](https://github.com/juliendargelos/rollup-three-application/actions?workflow=deploy) !-->
[![version](https://img.shields.io/github/package-json/v/juliendargelos/rollup-three-application)](https://github.com/juliendargelos/rollup-three-application)

Application template for rollup, three and lit with typescript, powered by github actions. Dependencies always up to date thanks to [dependabot](https://dependabot.com).

### Usage

Click on <sub>[![Use this template](https://img.shields.io/badge/-Use%20this%20template-brightgreen)](https://github.com/juliendargelos/rollup-three-application/generate)</sub> then wait for the [initialize workflow](.github/workflows/initialize.yml) to complete. The package name and urls will be automatically replaced at initialization. You may want to change the author name in `package.json` and `LICENSE`.

### Features

#### Bundling

- Rollup, TypeScript and ESLint
- IIFE bundle
- Path alias from tsconfig.json synced with rollup
- Development server with Nollup and hot module reloading
- Stylesheets with SASS including CSS reset and easing variables
- Static files
- Terser

#### Continuous integration (Github Actions)

- Build on pull requests and push to master
- Build and deploy to Github Pages on push to master<br>
  *Requires `PERSONAL_TOKEN` [secret](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) to be set as a [GitHub personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) with full `repo` scope.*<br>
  *The [deploy](.github/workflows/deploy.yml.sample) workflow is disabled by default, remove the `.sample` suffix to enable it.*
