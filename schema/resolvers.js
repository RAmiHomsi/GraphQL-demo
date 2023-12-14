import {UserList, MovieList} from "../fakeData.js"



const resolvers = {
    Query: {
      users() {
        return UserList;
      },
      user(parent, args){
        return UserList.find((u) => u.id === args.id);
      },
      movies(){
        return MovieList;
      },
      movie(parent, args){
        return MovieList.find((m) => m.name === args.name);
      },
    },
    User: {
      favoriteMovies(){
        return MovieList.filter((m) => m.yearOfPublication >=2000 && m.yearOfPublication <= 2010 )
      }
    },
    Mutation: {
      createUser(parent, args){
        const user = args.input;
        const lastId = UserList[UserList.length - 1].id;
        user.id = lastId + 1;
        UserList.push(user);
        return user;
      },
  
      updateUsername(parent, args){
        const { id, newUsername } = args.input;
        let userUpdated;
        UserList.forEach((user) => {
          if (user.id === id) {
            user.username = newUsername;
            userUpdated = user;
          }
        });
  
        return userUpdated;
      },
  
      deleteUser(parent, args){
        UserList.filter(item => item.id !== args.id)
        return null
      },
    },
};

export {resolvers}