<!-- How To Setup Tailwind CSS -->

STEP-1:Run the following commands
        npm install -D tailwindcss
        npx tailwindcss init

STEP-2: update tailwind.config.js to include this line
        content:["*.html"],  #if js file haru ni xa bhnye {html,js} ystai kei hnxa
    
STEP-3: create src/inpu.css to include:
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

STEP-4: Include the src/output.css file to your html

STEP-5:Run the following commands;
        npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
        
    step5 ko command lai package.json ko script ma  "build":" npx tailwindcss -i ./src/input.css -o ./src/output.css --watch" yesari halney...ani terminal ma npm run build garesi bhai halxa