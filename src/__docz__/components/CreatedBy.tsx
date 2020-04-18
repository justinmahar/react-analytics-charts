import * as React from 'react';

export interface CreatedByProps {
  url?: string;
  author?: string;
  emoji?: string;
  emojiLabel?: string;
}

export function CreatedBy(props: CreatedByProps): JSX.Element {
  const anchorProps = { target: '_blank', rel: 'noopener noreferrer' };
  return (
    <div>
      <br />
      <div style={{ textAlign: 'right', fontSize: '80%' }}>
        <hr style={{ borderBottom: '0', borderLeft: '0', borderRight: '0', borderTop: 'solid 2px #67788a' }} />
        Created{' '}
        {props.emoji && (
          <>
            with{' '}
            <span role="img" aria-label={props.emojiLabel}>
              {props.emoji}
            </span>{' '}
          </>
        )}
        {(props.url || props.author) && (
          <>
            {'by '}
            {props.url && props.author && (
              <a href={props.url} {...anchorProps}>
                {props.author}
              </a>
            )}
            {props.url && !props.author && (
              <a href={props.url} {...anchorProps}>
                {props.url}
              </a>
            )}
            {!props.url && props.author && props.author}
          </>
        )}
      </div>
    </div>
  );
}
