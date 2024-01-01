/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T extends { title: string }> {
  // property: T;
  constructor(public props: T) {
    // this.property = props;
  }
}
class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
