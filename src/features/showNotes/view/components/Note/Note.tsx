import * as React from 'react';

import { block } from 'shared/helpers/bem';
import { INote } from 'shared/types/models';

import './Note.scss';

interface IProps {
  note: INote;
  active?: boolean;
  onSelect(id: string): void;
}

const b = block('note');

function NotesList(props: IProps) {
  const { note: { title, body, id }, onSelect, active } = props;

  const selectHandler = React.useCallback(() => { onSelect(id); }, [id]);

  return (
    <div className={b({ active })} onClick={selectHandler}>
      <h3 className={b('title')}>{title}</h3>
      <div className={b('body')}>{body}</div>
    </div>
  );
}

export default NotesList;
