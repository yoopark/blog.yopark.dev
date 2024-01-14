---
title: Optional, Undefined, Partial
date: 2023-08-10
description: 인자 전달 안함 ≠ undefined 전달
thumbnail: /images/posts/optional-undefined-partial/typescript.png
tags:
  - TypeScript
  - React
---

Q. 아래 세 타입의 차이점은?

```tsx
type AvatarProps = {
  src?: string;
};

type AvatarProps = {
  src: string | undefined;
};

type AvatarProps = Partial<{
  src: string;
}>;
```

_셋 다 똑같은 거 아니야?_ 라고 생각했다면 정독하자.

# Optional vs Undefined

- Optional : `src` 라는 이름의 Prop이 없어도 된다. `src` 를 전달하지 않으면 undefined가 할당된다.
- Undefined : `src` 라는 이름의 Prop은 반드시 있어야 한다. 다만, undefined일 수 있다.

하나의 예시로,

```tsx
type AvatarProps = {
	src: string | undefined;
};

<Avatar src={undefined} /> // ✅ Works
<Avatar /> // 💥 Error
```

하지만 하나 애매한 것이,

```tsx
type AvatarProps = {
	src?: string;
}

<Avatar /> // ✅ Works
<Avatar src={undefined} /> // ✅ Why works??
```

# **`exactOptionalPropertyTypes`**

Ref. [TypeScript 공식문서, 'exactOptionalPropertyTypes'](https://www.typescriptlang.org/tsconfig#exactOptionalPropertyTypes)

`tsconfig`에서 해당 속성을 켜면 `src?: string` → `src?: string | undefined` 타입 변경을 막는다.

정리하자면,

1. Optional 타입에 Prop 뺐을 때 undefined가 할당되는 것 : 기능
2. Optional 타입을 Undefined 타입처럼 사용 : 돌아가긴 함. `exactOptionalPropertyTypes`로 제한 가능
3. Undefined 타입을 Optional 타입처럼 사용 : 에러

# Partial

```tsx
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

예를 들어,

```tsx
type Person = {
  name: string;
  age: number;
  location: string;
};

type PartialPerson = Partial<Person>;
```

`PartialPerson`은 이렇게 된다. (`exactOptionalPropertyTypes`를 켠다면)

```tsx
type PartialPerson = {
  name?: string;
  age?: number;
  location?: string;
};
```

설정을 켜지 않고 가만히 있으면 이렇게 된다.

```tsx
type PartialPerson = {
  name?: string | undefined;
  age?: number | undefined;
  location?: string | undefined;
};
```
