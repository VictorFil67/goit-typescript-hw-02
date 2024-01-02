/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface Mytype {
  title: string;
}
class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<Mytype> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
