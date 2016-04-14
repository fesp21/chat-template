import React from 'react';
import Message from '../src/Message/Message';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Message', module)
.add('should display no message', () => {
  var messageUsed = {
    message: '',
    from: 'left',
    backColor: 'white'
  };
  return (
    <div>
      <Message message={messageUsed}/>
    </div>
  );
}).add('should display on the left', () => {
  var messageUsed = {
    message: 'Test',
    from: 'left',
    backColor: 'white'
  };
  return (
    <div>
      <Message height={300} message={messageUsed}/>
    </div>
  );
}).add('should display on the right', () => {
  var messageUsed = {
    message: 'Test',
    from: 'right',
    backColor: 'lightgreen'
  };
  return (
    <div>
      <Message height={300} message={messageUsed}/>
    </div>
  )
}).add('should display on the left with an image', () => {
  var messageUsed = {
    message: 'Test',
    from: 'left',
    backColor: 'white',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif'
  };
  return (
    <div>
      <Message height={300} message={messageUsed}/>
    </div>
  );
}).add('should display on the right with an image', () => {
  var messageUsed = {
    message: 'Test',
    from: 'right',
    backColor: 'lightgreen',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif'
  };
  return (
    <div>
      <Message height={300} message={messageUsed}/>
    </div>
  )
}).add('should display on the left with an image and an avatar', () => {
  var messageUsed = {
    message: `This is a really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    long message!`,
    from: 'left',
    backColor: 'white',
    avatar: 'https://media.giphy.com/media/m7BTtLWhjkEJa/giphy.gif',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif'
  };
  return (
    <div>
      <Message height={300} message={messageUsed}/>
    </div>
  );
}).add('should display on the right with an image and an avatar', () => {
  var messageUsed = {
    message: `This is a really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    really really really really really really really really really
    long message!`,
    from: 'right',
    backColor: 'lightgreen',
    avatar: 'https://media.giphy.com/media/m7BTtLWhjkEJa/giphy.gif',
    src: 'https://media.giphy.com/media/BCtjVLKRoFVza/giphy.gif'
  };
  return (
    <div>
      <Message height={300} message={messageUsed}/>
    </div>
  )
});
