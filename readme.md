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
    npm run build:mta
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
reactdom   1.0.0     4eea1b19-86ed-445a-a1f2-3aacf8071363   basic.service   react_dom_html_repo_host   Sat, 18 Dec 2021 03:31:22 GMT   https://423c36d4trial.launchpad.cfapps.us10.hana.ondemand.com/af02c007-dfed-4545-a0ed-6055537a7773.basicservice.reactdom-1.0.0/
