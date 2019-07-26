# office-add-in-template-taskpane-word
office add-in template for word

https://docs.microsoft.com/en-us/office/dev/add-ins/quickstarts/word-quickstart?tabs=yeomangenerator

## Start the Add-In in a web browser

npm install

> npm run build

* run this command every time files are changed

npm run watch

* watch for changes and update

npm run start:web


[Side Load the add-in on the web](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/sideload-office-add-ins-for-testing#sideload-an-office-add-in-in-office-on-the-web)


## Start the Add-In in local file

## Deploy the Add-In to a Website

1. Push to a GitHub Repository
1. Sign up for azure
1. Deploy the site to Azure and set up automatic deployment
    * Create a new Web App
    * Set to Windows
    * use the latest version of .Net
1. Update the manifest
    * replace local host references with references to the azure website url

## Publish the Add-In to the store

1. Sign up as an office developer
1. Create Store profile
1. Create a neat icon for your Add-In
    * suggestion create a svg and resize appropriately for each format
    * https://www.npmjs.com/package/convert-svg-to-png
    * [inkscape command line example](https://www.geekality.net/2017/08/24/batch-convert-svg-to-png-on-windows-using-inkscape/)

1. Create a Support and Pivacy statement 
1. Add the Add-In to the store