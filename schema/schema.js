const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt
} = require('graphql');

const employees = [
    {
        id: 1,
        name: 'Krunal',
        email: 'krunal@appdividend.com'
    },
    {
        id: 2,
        name: 'Ankit',
        email: 'ankit@appdividend.com'
    },
    {
        id: 3,
        name: 'Rushabh',
        email: 'rushabh@appdividend.com'
    }];

const EmployeeType = new GraphQLObjectType({
    name: 'Employee',
    fields: () => ({
        id: {type: GraphQLInt},
        name: {type: GraphQLString},
        email: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        employee: {
            type: EmployeeType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parentValue, args) {
                for(let i=0; i<employees.length; i++) {
                    if(employees[i].id == args.id) {
                        return employees[i];
                    }
                }
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});