My main app features are the entire CRUD model, I have a text box at the top of the page that is able to take in the input and pass that information to the MongoDB database.I also have a plus sign that submits that input. 
Then I also made a "getdata" command that pulls all the names and then maps through the array and pulls the name and displays them on the front end. 
There is also a delete option that I put in the form of a trash can. As soon as you click the trash can, it sends a delete request and then the backend uses the "findbyIDanddelete" request which then deletes the item.


The main and central mongoose model is a simple project that only allows one property that contains a string. I wanted to keep it simple because of the complexity of the project and just being able to understand how to work with react, mongoose, express and making a CRUD project. I required both the database and the model in the main server.js file as well.

My favorite Express controller function is the POST function. I always liked being able to put infomation on a database and then being able to pull it and put it on the frontend for everyone to see and look at it. 

The react function I like is the props and being able to send data from the main app to all the components and the respective folders. Being able to send data like that is really cool and I always enjoed being able to do that.

Client side routing isn't anything too big. Anyone using this site gets to Add an item to the array, see it displayed, click the trash can and see it gets deleted, and can edit each specific product. 
