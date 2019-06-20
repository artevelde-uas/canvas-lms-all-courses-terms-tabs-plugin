# Canvas LMS All Courses Terms Tabs Plug-in

Plugin for the [Canvas LMS theme app](https://github.com/ahsdile/canvas-lms-app) that groups the
courses on the 'All Courses' page in tabs per term.

## Installation

Using NPM:

    npm install @auc-ghent/canvas-lms-all-courses-terms-tabs-plugin

Using Yarn:

    yarn add @auc-ghent/canvas-lms-all-courses-terms-tabs-plugin

## Usage

Just import the plug-in and add it to the Canvas app:

```javascript
import canvas from '@ahsdile/canvas-lms-app';
import allCoursesTermsTabsPlugin from '@auc-ghent/canvas-lms-all-courses-terms-tabs-plugin';

canvas.addPlugin(allCoursesTermsTabsPlugin);

canvas.run();
```
