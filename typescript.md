## typescript

### Partial 
可选属性
```ts
// 实现
type Parital<T> = {
  [K in T]?: T[K]
}

```
### Pick
选取属性

```ts
interface Person {
  name: string
  age: number
  gender: 'male' | 'female'
}

type ManPerson = Pick<Person, 'age' | 'name'>

// 实现
interface Pick<K, T in keyof K> {
  [T in keyof K]: K[T]
}
```


