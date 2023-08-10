# DatIntegrationTestAppl
This is a tool designed to demonstrate the user interface integration of DAT online-services. To be able to handle the response, the application must be running on a webserver. 

Therefore please download the free mongoose webserver binary from 'www.cesanta.com/products/binary', put the file in the applications main directory and run it. You can reach the application by opening the URL 'localhost:8080'.

The settings are saved with usage of localstorage. If your browser doesn't support localstorage you can enter your credentials in the file '/scripts/userData.js/' as an JSON-Object. Valid keys are: customerNumber, customerLogin, customerSignature, interfacePartnerNumber, interfacePartnerSignature, targetMarket, language, additionalHosts (Array).

To import a dossier file, it must be placed in the applications '/dossiers' subdirectory.
