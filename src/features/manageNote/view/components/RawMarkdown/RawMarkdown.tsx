import * as React from 'react';

import { block } from 'shared/helpers/bem';

import './RawMarkdown.scss';

interface IProps {
  value: string;
  onChange(text: string): void;
}

const b = block('raw-markdown');

function RawMarkdown(props: IProps) {
  const { value, onChange } = props;

  const onMarkdownChange = React.useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value),
    [onChange],
  );

  return (
    <div className={b()}>
      <textarea className={b('text-field')} value={value} onChange={onMarkdownChange} />
    </div>
  );
}

export default RawMarkdown;
