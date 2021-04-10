import React from 'react';

export interface HelpProps extends React.HTMLAttributes<HTMLDivElement> {

};

export const Help = ( {children, ...rest}: HelpProps ) => {
  return (
    <div {...rest}>
      {children}
    </div>
  )
};