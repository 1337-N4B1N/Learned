## How to setup Tailwind Css
## This is probably for nodejs hai

Step1- Run the following commands
    
    npm install -D tailwind css
    npx tailwindcss init
    

Step2- Update tailwind.conf.js file to include this line

         content:["*.html"]

        
Step3- Create folder named src and in that folder create input.css(src/input.css) to include 

    @tailwind base;
        @tailwind components;
        @tailwind utilities;
   

Step4-include the src/output.css file to you html

       <link rel="stylesheet" href="./src/output.css">

Step5- Run the following command:

    npx tailwindcss -i .src/input.css -o ./src/output.css --watch

