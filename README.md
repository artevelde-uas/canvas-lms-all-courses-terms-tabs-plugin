# Canvas LMS All Courses Terms Tabs Plug-in

Plugin for the [Canvas LMS theme app](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-app) that groups the
courses on the 'All Courses' page in tabs per term.

[![NPM version](https://img.shields.io/npm/v/@artevelde-uas/canvas-lms-all-courses-terms-tabs-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-all-courses-terms-tabs-plugin)
[![License](https://img.shields.io/github/license/artevelde-uas/canvas-lms-all-courses-terms-tabs-plugin.svg)](https://spdx.org/licenses/ISC)
[![Downloads](https://img.shields.io/npm/dt/@artevelde-uas/canvas-lms-all-courses-terms-tabs-plugin.svg)](https://www.npmjs.com/package/@artevelde-uas/canvas-lms-all-courses-terms-tabs-plugin)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/artevelde-uas/canvas-lms-all-courses-terms-tabs-plugin/pulls)

#### Before:
![Before](docs/example-before.png)

#### After:
![After](docs/example-after.png)

## Installation

Using NPM:

    npm install @artevelde-uas/canvas-lms-all-courses-terms-tabs-plugin

Using Yarn:

    yarn add @artevelde-uas/canvas-lms-all-courses-terms-tabs-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import canvas from '@artevelde-uas/canvas-lms-app';
import allCoursesTermsTabsPlugin from '@artevelde-uas/canvas-lms-all-courses-terms-tabs-plugin';

canvas.addPlugin(allCoursesTermsTabsPlugin);

canvas.run();
```
