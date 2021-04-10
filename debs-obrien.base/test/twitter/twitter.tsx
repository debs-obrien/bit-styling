import React from 'react';

export type TwitterProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Twitter({ text }: TwitterProps) {
  return (
    <div>
      {text}
    </div>
  );
}
