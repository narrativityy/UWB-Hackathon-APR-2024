# UW Bothell Hackathon April 2024

## By Kevin, Jake, and Karan

### Setup Instructions

1. cd server

2. npm i

3. create a .env file in the server folder

4. paste the following into the file

    ```
    PORT = 8001
    OPENAI_API_KEY = "sk-proj-5PdweQ113LJGfrVhCiADT3BlbkFJVsWAFs583xcjijN6s5qZ"
    SENDGRID_API_KEY = "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"
    DB=AddictionAssistant
    ATLAS_USERNAME=admin
    ATLAS_PASSWORD=root
    SECRET_KEY=jwt_key
    ```

3. cd ../client

4. npm i

5. npm run dev

6. open another terminal and cd into server folder

7. node server.js

8. go to http://localhost:5173/