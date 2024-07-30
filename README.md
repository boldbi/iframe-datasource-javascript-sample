# Data Source Iframe Embedding with JavaScript

  This application aims to demonstrate how to embed the data source designer module into your JavaScript-based web application using an iFrame.
  
## Data Source view

 ![Datasource_Iframe_js view](https://github.com/boldbi/iframe-datasource-javascript-sample/assets/129486688/93584224-edee-4482-b569-b4e6cd81de4f)

## Prerequisites

* [Node.js](https://nodejs.org/en/)
* [Visual Studio Code](https://code.visualstudio.com/download)

 > **NOTE:** Node.js v14.16 to v18.18 are supported.

### Help link

* <https://help.boldbi.com/embedded-bi/faq/where-can-i-find-the-product-version/>

#### Supported browsers
  
* Google Chrome, Microsoft Edge, Mozilla Firefox, and Safari.

## Configuration

* Please ensure that you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.

    ![Embed Settings](https://github.com/boldbi/aspnet-core-sample/assets/91586758/b3a81978-9eb4-42b2-92bb-d1e2735ab007)

* To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.

    ![Embed Settings Download](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d27d4cfc-6a3e-4c34-975e-f5f22dea6172)
    ![EmbedConfig Properties](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d6ce925a-0d4c-45d2-817e-24d6d59e0d63)

* Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/iframe-datasource-javascript-sample/tree/master) within the application. Please ensure that you have placed it in the application as shown in the following image.
  
    ![EmbedConfig image](https://github.com/bold-bi/embedded-bi-samples/assets/129486688/e7c59dc4-4dfe-4495-a396-b7c21fafc6ff)

## Developer IDE

* Visual studio code(<https://code.visualstudio.com/download>)
  
### Run a Sample using Visual Studio Code

* Open the sample in **Visual studio code**.

* Run this command in the terminal to install the `http-server` package, which enables the sample to run a local HTTP server.

     ```bash
        npm install -g http-server
     ```

* Run this command in the terminal to initiate the HTTP server on a specific port(eg. `http-server -p 8000`)

     ```bash
        http-server -p <port number>
      ```
     > **NOTE:** Replace `<port number>` with the desired port number

* Once the server is running, you can open your web browser and navigate to the `DatasourceListing.html` file(eg. `http://localhost:8000/DatasourceListing.html`).

   ![Datasource_Iframe_js view](https://github.com/boldbi/iframe-datasource-javascript-sample/assets/129486688/93584224-edee-4482-b569-b4e6cd81de4f)

## Important notes

In a real-world application, it is recommended not to store passwords and sensitive information in configuration files for security reasons. Instead, you should consider using a secure application, such as Key Vault, to safeguard your credentials.

## Online demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).

## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedding-options/iframe-embedding/).
