<!--
  PLEASE DON'T DELETE THIS TEMPLATE UNTIL YOU HAVE READ THE FIRST SECTION.
-->

### Is this a bug report?

Yes

<!--
  If you answered "Yes":

    We expect that it will take you about 30 minutes to produce a high-quality bug report.
    While this may seem like a lot, putting care into issues helps us fix them faster.
    For bug reports, it is REQUIRED to fill the rest of this template, or the issue will be closed.

  If you answered "No":

    If this is a question or a discussion, you may delete this template and write in a free form.
    Note that we don't provide help for webpack questions after ejecting.
    You can find webpack docs at https://webpack.js.org/.

  Now scroll below!
-->


### Can you reproduce the problem with npm 4.x?

<!--
  Many errors, especially related to "missing modules", are due to npm bugs.
  Which version of npm are you running? You can find out by checking:

    npm -v

  If it's not starting with 4, try to install npm 4.x:

    npm install -g npm@4
    cd your_project_directory
    rm -rf node_modules
    npm cache clear
    npm install

  Then try to reproduce the issue again.
  Can you still reproduce it?

  Note: Please try this even if you are using Yarn. Yarn also has bugs.
-->

Yes


### Have you read the Troubleshooting section and searched the User Guide?

<!--
  There are a few common documented problems, such as watcher not detecting changes.
  They are described in the Troubleshooting section of the User Guide:

  https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#troubleshooting

  Have you read that section, and have you searched the User Guide for symptoms of your problem?
  Please write the answer below:
-->

ELIFECYCLE, react-scripts build


### Environment

<!--
  Please fill in all the relevant fields by running these commands in terminal.
-->

1. `node -v`: v6.5.0
2. `npm -v`: v5.5.1
4. `yarn --version` (if you use Yarn): NA
3. `npm ls react-scripts` (if you haven’t ejected): react-scripts@1.1.0

Then, specify:

1. Operating system: Windows 7
2. Browser and version (if relevant): NA


### Steps to Reproduce

<!--
  How would you describe your issue to someone who doesn’t know you or your project?
  Try to write a sequence of steps that anybody can repeat to see the issue.
-->


1. create a fresh app using create-react-app and `$ npm install --save node-thermal-printer`
2. `$ npm run build`


### Expected Behavior

<!--
  How did you expect the tool to behave?
  It’s fine if you’re not sure your understanding is correct.
  Just write down what you thought would happen.
-->

Successful Build.


### Actual Behavior

<!--
  Did something go wrong?
  Is something broken, or not behaving as you expected?
  Describe this section in detail, and attach screenshots if possible.
-->
Failed to compile with error code ELIFECYCLE, errno 1

**Terminal**
![alt text](https://github.com/rainitesh/error-create-react-app/blob/master/build-error.JPG)


**Log File**
[https://github.com/rainitesh/error-create-react-app/blob/master/2018-01-17T23_05_13_308Z-debug.log]
(https://github.com/rainitesh/error-create-react-app/blob/master/2018-01-17T23_05_13_308Z-debug.log)

### Reproducible Demo

<!--
  Please share a project that reproduces the issue.
  There are two ways to do it:

    * Create a new app and try to reproduce the issue in it.
      This is useful if you roughly know where the problem is, or can’t share the real code.

    * Or, copy your app and remove things until you’re left with the minimal reproducible demo.
      This is useful for finding the root cause. You may then optionally create a new project.

  This is a good guide to creating bug demos: https://stackoverflow.com/help/mcve
  Once you’re done, push the project to GitHub and paste the link to it below:
-->

https://github.com/rainitesh/error-create-react-app
checkout the latest commit and `npm install` and perform `npm run build`

<!--
  What happens if you skip this step?

  Someone will read your bug report, and maybe will be able to help you,
  but it’s unlikely that it will get much attention from the team. Eventually,
  the issue will likely get closed in favor of issues that have reproducible demos.

  Please remember that:

    * Issues without reproducible demos have a very low priority.
    * The person fixing the bug would have to do that anyway. Please be respectful of their time.
    * You might figure out the issues yourself as you work on extracting it.

  Thanks for helping us help you!
-->
I'm building a login/logout platform which intercats with Django backend using Oauth. I am using this example as my base http://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example However, I'm not using the example's webpack. I am just using the create-react-app's default build configs right now. 

`npm start` works fine but `npm run build` fails with error code ELIFECYCLE, errno 1. Despite the failure, it does create a build folder with the static files. I uploaded the files to S3 bucket and tried hosting them. Everything seems ok and it's running fine. Not sure if any sepcific package is causing this build failure.
