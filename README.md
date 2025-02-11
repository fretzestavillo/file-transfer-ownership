# Google Drive File Transfer Ownership

This project teach you how to transfer file Ownership using Google Drive Api and NodeJs

## Getting Started

To set up the project, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/fretzestavillo/file-transfer-ownership.git
```

2. Change Directory:

```bash
cd file-transfer-ownership/
```

3. Install the dependencies

```bash
npm install
```

4. Create a new project in Google Console  


![alt text](assets/1.png)


![alt text](assets/2.png)



5. Enable google drive api

![alt text](assets/3.png)  

![alt text](assets/4.png)

6. Make an App

![alt text](assets/inserted1.png)  


![alt text](assets/5.png)  

![alt text](assets/6.png)

![alt text](assets/7.png)  

![alt text](assets/8.png)

![alt text](assets/9.png)  

7. Publish your app

![alt text](assets/10.png)  

![alt text](assets/11.png)

![alt text](assets/12.png)  

![alt text](assets/13.png)

8. Create OAuth client Credentials 

![alt text](assets/14.png)  

![alt text](assets/15.png)

![alt text](assets/16.png)  

![alt text](assets/17.png)

9. Copy your Client ID and Authorized redirect URIs 
 
![alt text](assets/18.png)  

![alt text](assets/19.png)


10. Create .env file in the root of your project then put these credentials

```bash

VITE_GOOGLE_CLIENT_ID='YOUR_GOOGLE_CLIENT_ID' 
VITE_REDIRECT_URI='YOUR_VITE_REDIRECT_URI'
VITE_NEW_EMAIL_OWNER='YOUR_NEW_EMAIL_OWNER'
VITE_FILE_ID='YOUR_FILE_ID' how to get? open the folder or file and look at the URL and find the id that looks like this : 1ay3A-8qWmmZfDbRGiLSGwG51-IbRA2jwF6cVlafIFnE
VITE_PERMISSION_ID='NEW_OWNERSHIP_PERMISSION_ID' how to get? run the application and click login then click the button Get Id in console log  

```



11. Get the VITE_FILE_ID. Go to your google drive then click the file that you want to transfer the ownership then get the file id on the URL

![alt text](assets/20.png)

![alt text](assets/21.png)

![alt text](assets/22.png)

12. Check ENV File

![alt text](assets/23.png)

13. Run the application and then go to http://localhost:4200

```bash

npm run serve:web

```

![alt text](assets/24.png)

![alt text](assets/25.png)

![alt text](assets/26.png)

![alt text](assets/27.png)



14. Get the permission id but make sure the file is already shared to the ownership as editor/writer

![alt text](assets/28.png)

![alt text](assets/29.png)

![alt text](assets/30.png)

![alt text](assets/31.png)

![alt text](assets/32.png)

![alt text](assets/33.png)



15. You can now transfer the ownership to the owner

![alt text](assets/35.png)

![alt text](assets/36.png)

![alt text](assets/37.png)


16. Demo
[![Watch the video](https://img.youtube.com/vi/p-F3BXq9nKE/maxresdefault.jpg)](https://youtu.be/p-F3BXq9nKE)
