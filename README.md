# Pipeline Project

## Introduction

When developers push commits to Git, as Jenkins is set to check new commits every two minutes, it will trigger building and push version package to s3.
Jenkins will then trigger the deployment process in AWS CodeDeploy. It will show whether the deployment is successful or failed with error log. 

To trigger a build manually, developer can browse url: 

<http://3.136.85.238:8080/job/CodeDeployApp/build?token=OPacGRVxBg>

where OPacGRVxBg is the authentication token set in Jenkins project configuration.

Browse http://ec2-3-128-27-82.us-east-2.compute.amazonaws.com:3000/, which is the deployed web app calling application server.

## **Git**

<https://github.com/viennewan/simplevienneproject>

## **Jenkins**

<http://3.136.85.238:8080/job/CodeDeployApp/>

username: admin

password: 1234QWER

![1591684443363](/images/1591684443363.png)

Developers can view if the deployment goes well in console log.

## S3

![1591687895532](/images/1591687895532.png)

Artifacts are stored in s3 for every new build of application.

## EC2

The deploy target environments are AWS EC2 instances.

![1591683529212](/images/1591683529212.png)

CodeDeployDemo2 is simulation of production environment.

Jenkins is the CI server. (EC2)

![1591687144174](/images/1591687144174.png)

Security group is set to allow TCP port 3000.

## **IAM**

![1591683720582](/images/1591683720582.png)

Instances are assigned with corresponding permissions so that the server can get access to different AWS services.

## **CodeDeploy**

![1591683862911](/images/1591683862911.png)

![1591683908158](/images/1591683908158.png)

When CodeDeploy is triggered, it will pull version package from s3 and deploy into deployment group, which consists of a set of servers of target environment.

Appspec.yml has specified the scripts to run at each event shown in the list at the bottom of the above image. In the deployment process, a testing is set after the application is launched.

## Node.js

In the application, server listens to 3000 port. Once the application is deployed, go to <http://ec2-3-128-27-82.us-east-2.compute.amazonaws.com:3000/>. The result number is actually retrieved from MySql DB. 

## MySql DB

Hosted in CleverCloud. Simply having two records in table 'Files'.

![1591686969562](/images/1591686969562.png)