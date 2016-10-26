import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Clock from './Clock';
// import Toggle from './Toggle';
// import LoginControl from './LoginControl';
// import WarningBanner from './WarningBanner';
// import Form from './Form';
import Todo from './Todo';
// import Calculator from './Calculator';
import './index.css';


ReactDOM.render(<Todo />, document.getElementById('root'));


// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const todos = [
//   {
//     id: 1,
//     text: 'wxl2',
//   },

//   {
//     id: 2,
//     text: 'wxl11',
//   },
// ];

// const todoItems = todos.map((todo) =>
//   <li key={todo.id}>
//     {todo.text}
//   </li>
// );


// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(

//   <ul>{todoItems}</ul>,
//   document.getElementById('root')
// );
// ---------------------

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   } else {
//     return <GuestGreeting />;
//   }
// }

// ReactDOM.render(
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('root')
// )

//-------------- component --------------

// function Clock(props) {
//   return (
//     <div>
//       <h2>Hello, world!</h2>
//       <h3>It is {props.date.toLocaleTimeString()}.</h3>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   )
// }

// setInterval(tick, 1000)

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     / >
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }

// const UserInfo = ({user}) => (
//   <div className="UserInfo">
//     <Avatar user={user} />
//     <div className="UserInfo-name">
//       {user.name}
//     </div>
//   </div>
// )

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">
//         {props.text}
//       </div>

//       <div className="Comment-date">
//         {props.date}
//       </div>
//     </div>
//   )
// }

// const author={name: 'xiaolian', avatarUrl: ''}

// ReactDOM.render(
//   <Comment author={author} text='kjasdlk' date='xx' />,
//   document.getElementById('root')
// )
