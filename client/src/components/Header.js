import React from 'react';

const Header = (props) => (
  <div className='App-header'>
    <h2>{ props.title }</h2>
    <form action="/action_page.php">
      <input type="text" placeholder="Name" name ="name"></input>
      Priority:
      <select name="priority">
        <option value="low">Low</option>
        <option value="low">Medium</option>
        <option value="low">High</option>
      </select>
      Status:
      <select name="status">
        <option value="queue">In queue</option>
        <option value="progress">In progress</option>
        <option value="done">Done</option>
      </select>
      <input type="submit"></input>
    </form>
  </div>
);

export default Header;