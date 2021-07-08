 const {RESTDataSource} = require('apollo-datasource-rest');

 class ProjectService extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = 'http://localhost:3000'
    }


    //1 method to handle asyc :this is async as it is http
    getProjects() {
        return this.get('/projects').then(projects=>{
            return projects;
        })
        .catch((error) => console.log(error)); 
    }

    //another way to handle async : async await way
    async findProjectById(id) {
        return await this.get(`/projects/${id}`);
    }

 }

 module.exports = ProjectService

