# cf-app-serverless-example
  app react serverless cf and react-dom, publish in launchpad service


# Basic HTML5 App with a Managed Application Router

## Description

This is an example of an HTML5 app that is accessed by a managed application router and is integrated into the SAP Launchpad service. During the build process (`mbt build`), the  app is compressed into a zip file. During the deployment (`cf deploy`), the HTML5 app is pushed to the HTML5 Application Repository and uses the Authentication & Authorization service (XSUAA service) and the destination service.

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

> You need to substitute `cpp` with `launchpad`, in case you use the Launchpad service (instead of the Portal service).


### List the Deployed MTA

```
$ cf mta react-dom
Showing health and status for multi-target app react-dom in org 9f10ed8atrial / space dev as firstname.lastname@domain.com...
OK
Version: 1.0.0

Apps:
name   requested state   instances   memory   disk   urls   

Services:
name                                 service           plan          bound apps   last operation   
react-dom-destination-service      destination       lite                       create succeeded   
react-dom-html5-app-host-service   html5-apps-repo   app-host                   create succeeded   
react-dom-xsuaa-service            xsuaa             application                create succeeded  

```

### Check the HTML5 App

Access the URL described in [Download and Deployment](#download-and-deployment) to view the web app. You are redirected to a sign-on page before you can see the web app.


