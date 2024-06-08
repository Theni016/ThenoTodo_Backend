MAKE SURE Both Backend and Frontend files recide inside the same folder.

E.g. ThenoTodo
        - ThenoTodo_Frontend
        - ThenoTodo_Backend

INSTRUCTIONS TO RUN BACKEND
1. Get MySQL Workbench Installed in your pc.
2. Create a connection in MySQL Workbench with your username and password
3. After connecting into MySQL Server run the "todo_tasks.sql" script (Which will create a schema called "todo" and inside that it'll create a table called "tasks")
4. In the code of "myserver.js" there'll be a line of the database connection as below, 

        // MySQL connection
        const db = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "root123",
          database: "todo",
        });
   
  above given are my credentials. 
  You need to edit these credentials with your credentials which you used when 
  creating Connection in MySQL workbench.

5. After the above changes navigate terminal to the location and there type "npm i" and hit enter,
6.  
         ..ThenoTodo\ThenoTodo_Backend>npm i

7. Next run the command "node myserver.js" as below and hit enter,

         ..ThenoTodo\ThenoTodo_Backend>node myserver.js

8. Then make sure you get a message as below in the terminal,

         PS E:\ThenoTodo\ThenoTodo_Backend> node myserver.js
         Server running on port 3000
         MySQL Connected...

Now, BackEnd is running successfully.



INSTRUCTIONS TO RUN FRONTEND

1. Get Visual Studio Code installed in your pc.
2. Then install the extension called "Live Server - Ritwick Dey" in VS Code.
3. After the extension installed, open "index.html" code in VS Code.
   and in their right click somewhere around it and click the option called "Open with Live Server".
4. Then the webpage will open in your browser   
