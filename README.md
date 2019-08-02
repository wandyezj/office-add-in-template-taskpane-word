# office-add-in-template-taskpane-word

## Getting Started 

### Install

* [Visual Studio Code](https://code.visualstudio.com/)
* [Node](https://nodejs.org)

## Local Testing

### Install Packages

> npm install

### Build the project

> npm run build

### Set local server certificates

1. Install localhost certificates
    > npm run localhost-certificates-install

    * Make sure to accept the prompts

1. Check certificates were installed

    > npm run localhost-certificates-verify

### Start a local server

> npm run server

### Side Load Add-In

[Side Load the add-in on the web](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/sideload-office-add-ins-for-testing#sideload-an-office-add-in-in-office-on-the-web)


## Deploy the Add-In to a Website

1. [Join GitHub](https://github.com/join)
1. Push to a GitHub Repository
1. Sign up for azure
1. Deploy the site to Azure and set up automatic deployment
    * Create a new Web App
    * Set to Windows
    * use the latest version of .Net
1. Update the manifest
    * replace localhost references with references to the azure website url

## Publish the Add-In to the store

1. Sign up as an office developer
1. Create Store profile
    * Use your LinkedIn profile as the developer website
1. Create a neat icon for your Add-In
    * suggestion create a svg and resize appropriately for each format
    * https://www.npmjs.com/package/convert-svg-to-png
    * [inkscape command line example](https://www.geekality.net/2017/08/24/batch-convert-svg-to-png-on-windows-using-inkscape/)

1. Create a Support and Pivacy statement 
1. Add the Add-In to the store