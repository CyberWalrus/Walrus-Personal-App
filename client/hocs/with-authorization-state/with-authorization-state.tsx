import * as React from "react";
import { ComponentClass, PureComponent, ReactElement } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { getError } from "../../store/user/selectors";
import { ActionCreator, Operation } from "../../store/user/user";
import { StateApp, ThunkDispatch } from "../../type/reducer";

interface PropsState {
  errorMessage: string;
}
interface PropsDispatch {
  onSignIn: (email: string, password: string) => void;
  onResetError: () => void;
}
type Props = PropsState & PropsDispatch;
interface State {
  email: string;
  password: string;
  formErrors: FormErrors;
  emailValid: boolean;
  passwordValid: boolean;
  formValid: boolean;
}
interface FormErrors {
  email: string;
  password: string;
  signIn: string;
}

const withAuthorizationState = (
  Component: any,
): ComponentClass<Props, State> => {
  class WithAuthorizationState extends PureComponent<Props, State> {
    public constructor(props: Props) {
      super(props);
      this.state = {
        email: ``,
        password: ``,
        formErrors: {email: ``, password: ``, signIn: ``},
        emailValid: false,
        passwordValid: true,
        formValid: false,
      };

      this.handleUserInput = this.handleUserInput.bind(this);
      this.handleSendSubmit = this.handleSendSubmit.bind(this);
      this._handleValidateField = this._handleValidateField.bind(this);
      this._handleValidateForm = this._handleValidateForm.bind(this);
    }
    public componentDidUpdate(): void {
      if (this.props.errorMessage) {
        const formErrors = this.state.formErrors;
        formErrors.signIn = this.props.errorMessage;
        this.setState({
          formErrors,
        });
        this.props.onResetError();
      }
    }
    public handleUserInput(event: React.ChangeEvent<HTMLInputElement>): void {
      const key = event.target.name as keyof State;
      const value = event.target.value as string;
      this.setState<never>({[key]: value}, (): void => {
        this._handleValidateField(key, value);
      });
    }
    public handleSendSubmit(event: React.ChangeEvent<HTMLInputElement>): void {
      event.preventDefault();
      this.props.onSignIn(this.state.email, this.state.password);
    }

    public render(): ReactElement {
      return (
        <Component
          email={this.state.email}
          password={this.state.password}
          formErrors={this.state.formErrors}
          formValid={this.state.formValid}
          onChangeUserInput={this.handleUserInput}
          onClickSubmit={this.handleSendSubmit}
        />
      );
    }
    private _handleValidateField(fieldName: keyof State, value: string): void {
      const fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      switch (fieldName) {
        case `email`:
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
            ? true
            : false;
          fieldValidationErrors.email = emailValid
            ? ``
            : `Please enter a valid email address`;
          break;
        default:
          break;
      }
      this.setState(
        {
          formErrors: fieldValidationErrors,
          emailValid,
        },
        this._handleValidateForm,
      );
    }
    private _handleValidateForm(): void {
      this.setState({
        formValid: this.state.emailValid && this.state.passwordValid,
      });
    }
  }

  return WithAuthorizationState;
};

const mapStateToProps = (state: StateApp, ownProps: Props): Props => ({
  ...ownProps,
  errorMessage: getError(state),
});

const mapDispatchToProps = (dispatch: ThunkDispatch): PropsDispatch => ({
  onSignIn: (email: string, password: string): void => {
    dispatch(Operation.signIn(email, password));
  },
  onResetError: (): void => {
    dispatch(ActionCreator.resetError());
  },
});

export { withAuthorizationState };

export default compose(
  connect<Props, PropsDispatch, {}, StateApp>(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withAuthorizationState,
);
