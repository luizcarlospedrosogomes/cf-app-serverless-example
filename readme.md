# cf-app-serverless-example
  app react serverless cf and react-dom, publish in launchpad service

## Reference
    https://github.com/SAP-samples/multi-cloud-html5-apps-sample


# Basic HTML5 App with a Managed Application Router

## Download and Deployment
1. Subscribe to the [SAP Launchpad service](https://developers.sap.com/tutorials/cp-portal-cloud-foundry-getting-started.html) if you haven't done so before.
1. Download the source code:
    ```
    git clone https://github.com/SAP-samples/multi-cloud-html5-apps-samples
    cd multi-cloud-html5-apps-samples/managed-html5-runtime-basic-mta
    ```
3. Build the project:
    ```
    npm install
    npm run build
    ```
4. Deploy the project:
    ```
    cf deploy mta_archives/react-dom_1.0.0.mtar
    ```
5. See the URL of the web app:
    ```
    cf html5-list -di react-dom-destination-service -u --runtime launchpad     
    ```

> Use the following command in case you use the Portal service
>
>  `cf html5-list -di react-dom-destination-service -u --runtime cpp`


## Check the Result

### List the Deployed HTML5 Apps
```
$ cf html5-list -di react-dom-destination-service -u --runtime launchpad                                 
Getting list of HTML5 applications in org 9f10ed8atrial / space dev as firstname.lastname@domain.com...
OK

name         version   app-host-id                            service name    destination name                        last changed                    url   
helloworld   1.0.0     bcd2d34a-1625-47ab-bf42-4f054970b911   basic.service   my_service_hello_world_html_repo_host   Tue, 16 Feb 2021 10:51:10 GMT    https://423c36d4trial.launchpad.cfapps.us10.hana.ondemand.com/af02c007-dfed-4545-a0ed-6055537a7773.basicservice.reactdom-1.0.0/

