import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useContext,
  useReducer,
  useImperativeHandle,
} from 'react';

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [users, setUsers] = useState<[User]>();

  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users])

  const greeting = useCallback(
    () => alert(`Hello ${names}`),
    [names]
  );

  function focusOnInput() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <form action="">
        <input type="text" ref={inputRef} />
      </form>
    </div>
  )
}

export default App;