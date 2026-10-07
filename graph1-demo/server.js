const express=require("express");
const { graphqlHTTP }=require("express-graphql");
const { buildSchema }=require("graphql");

const app=express();

//graphql schema
const schema=buildSchema(`
    type Query{
       hello: String
       student: Student
    }
       type Student{
         id: ID
         name: String
         course: String
         age: Int
       }
`);

//data
const studentData={
id: "101",
name: "Sunny",
course: "B.tech CSE-36",
age: 20
};

// Resolver Function
const root={
    hello: ()=>{
        return "Hello from GraphQL";
    },
    student: ()=>{
        return studentData;
    }
};

//graphql endpoint
app.use(
   "/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
})
);
// start server
app.listen(4000, () => {
    console.log("Server running on http://localhost:4000/graphql");
});