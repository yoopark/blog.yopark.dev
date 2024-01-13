---
title: forwardRef
date: 2022-09-27
description: ref가 안 돼서 일단 쓰긴 했는데...
thumbnail: /images/posts/forward-ref/react.jpeg
tags:
  - React
---

브라우저 기본 요소 컴포넌트(ex. input)에 ref를 주입하면, `ref.current = (input에 해당하는 실제 DOM 노드)` 로 설정한다.

하지만 직접 만든 컴포넌트에는 ref를 주입하더라도 `ref.current = null`이 들어간다.

```jsx
function MyInput(props) {
  return <input {...props} />;
}

export default function MyForm() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
```

![ref null error](/images/posts/forward-ref/ref-null-error.png)

**React는 기본적으로 다른 컴포넌트의 DOM 노드에 접근하는 것을 허용하지 않는다.** 다른 컴포넌트의 DOM 노드를 조작하는 것은 코드가 쉽게 깨지게 만들기 때문이다.

자식 컴포넌트라도 예외는 없다.

대신 특정 컴포넌트에서 소유한 DOM 노드를 선택적으로 노출할 수 있는데, 그것이 바로 `forwardRef`다.

```jsx
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
```

이 코드는 `props` 다음에 선언된 **두 번째 `ref` 인자를 통해 상위의 `inputRef`를 받을 수 있도록 하겠다**는 의미를 가진다.

# Reference

- [React 공식문서, 'Ref로 DOM 조작하기'](https://ko.react.dev/learn/manipulating-the-dom-with-refs#accessing-another-components-dom-nodes)
