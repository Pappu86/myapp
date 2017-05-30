//Tasks=new Meteor.collection('tasks');
const Posts = new Mongo.Collection('posts');
Posts.insert({ title: 'Hello world', body: 'First post' });