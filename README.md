# Todo App using React, TypeScript and Vite

This is a todo web app for handling tasks. It is run in the browser using Vite and data can be saved locally using localStorage or remotely using JSONBin. By default data is saved locally `(VITE_USE_REMOTE=false)`, but it can be changed to save data remotely by editing the `.env.local` file as explained below in the [JsonBin Configuration](#jsonbin-configuration-for-remote-storage) section.

## Installation

1. Clone the repository: git clone [repository URL]
2. Navigate to the project directory: `$ cd project-directory`
3. Install dependencies: `$ npm install`

## Usage

1. Create a ".env.local" file based on ".env.example":

   `$ cp .env.example .env.local`

2. Run the project by doing: `$ npm run dev`

3. Access the project at: <http://localhost:5173>

## JsonBin configuration for remote storage

1. To save data remotely using JsonBin.io, you need to have a JsonBin.io account. You can sign up for free at <https://jsonbin.io/> if you don't have an account yet. The free plan will give you 10000 requests. This registration process will create a X-MASTER-KEY.

2. Create an `ACCESS KEY` and give **create**, **read**, **write** and **delete** permissions to it.

3. Create a `BIN token` with dummy data just to have something to play around with. Run this command in the console to create your `BIN_ID`:  
   **IMPORTANT!**: don't forget to replace `COPY_HERE_YOUR_ACCESS_KEY` with your `ACCESS KEY`.

   ```bash
   curl -X POST 'https://api.jsonbin.io/v3/b' \
       --header 'Content-Type: application/json' \
       --header 'X-Access-Key: COPY_HERE_YOUR_ACCESS_KEY' \
       --data-raw '{
           "data": [
               { "id": 1, "title": "task1 description", "isCompleted": true },
               { "id": 2, "title": "task2 description", "isCompleted": true },
               { "id": 3, "title": "task3 description", "isCompleted": false },
               { "id": 4, "title": "task4 description", "isCompleted": false },
               { "id": 5, "title": "task5 description", "isCompleted": false }
           ]
       }'
   ```

   If you've done everything correctly, the previous command will return something like this:

   ```bash
   {"record":
        {
            "data": [
                {"id":1,"title":"task1 description","isCompleted":true},
                {"id":2,"title":"task2 description","isCompleted":true},
                {"id":3,"title":"task3 description","isCompleted":false},
                {"id":4,"title":"task4 description","isCompleted":false},
                {"id":5,"title":"task5 description","isCompleted":false}
            ]
        },
        "metadata": {
            "id":"6809416b2260c333a58baa81",
            "createdAt":"2025-04-23T19:37:15.844Z",
            "private":true
        }
    }
   ```

4. Replace the `VITE_JSONBIN_ACCESS_KEY` and `VITE_JSONBIN_BIN_ID` in the `.env.local` file with your `ACCESS_KEY` and `BIN_ID` you've just created in steps 3 and 4.

   ```bash
   VITE_USE_REMOTE=true

   # JSONBIN.IO CREDENTIALS
   VITE_JSONBIN_BASE_URL=https://api.jsonbin.io
   VITE_JSONBIN_ACCESS_KEY=... # remember to escape every "$" character with "\$"
   VITE_JSONBIN_BIN_ID=... # remember to escape every "$" character with "\$"
   ```

5. Now you can run the project by doing:

   `$ npm run dev`

6. Access the project at: <http://localhost:5173>

7. Give me a start if you like it!

## License

This project is licensed under the [MIT License](LICENSE).
