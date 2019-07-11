import * as React from "react";
import { ComponentClass, PureComponent, ReactElement, RefObject } from "react";

interface State {
  scrollValue: number;
}

const withScrollState = (Component: any): ComponentClass => {
  type P = ReturnType<typeof Component>;

  class WithScrollState extends PureComponent<P, State> {
    public ref: RefObject<HTMLDivElement>;
    public constructor(props: P) {
      super(props);
      this.state = {
        scrollValue: 0,
      };
      this.ref = React.createRef();
      this._handleScroll = this._handleScroll.bind(this);
    }

    public componentDidMount(): void {
      window.addEventListener("scroll", this._handleScroll);
    }

    public componentWillUnmount(): void {
      window.removeEventListener("scroll", this._handleScroll);
    }
    public render(): ReactElement {
      return <Component {...this.props} ref={this.ref} />;
    }
    private _handleScroll(): void {
      const header = this.ref.current;
      const isScrollTop = this.state.scrollValue >= window.pageYOffset;
      if (window.pageYOffset > header.clientHeight / 2 && !isScrollTop) {
        header.classList.add(`header-box_position_fixed`);
      }
      if (isScrollTop) {
        header.classList.remove(`header-box_position_fixed`);
      }
      this.setState({ scrollValue: window.pageYOffset });
    }
  }
  return WithScrollState;
};

export default withScrollState;
