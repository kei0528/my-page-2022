import React from 'react';
import { v4 as uuid } from 'uuid';

export const GameMessage = React.memo(({ message }: { message: string }) => {
  return (
    <>
      {message.split('').map((string, index) => (
        <span className='message-anime font-game text-game-md leading-game-md text-white' style={{ animationDelay: `${index * 0.05 + 0.5}s` }} key={uuid()}>
          {string}
        </span>
      ))}
    </>
  );
});

GameMessage.displayName = 'GameMessage';
