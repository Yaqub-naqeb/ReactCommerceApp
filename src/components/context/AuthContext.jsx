/* eslint-disable react/prop-types */
import { Component, createContext } from "react";

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = {
    isCartOpen: false,
    
  };
  toggleAuth = () => {
    this.setState({ isCartOpen: !this.state.isCartOpen });
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, toggleAuth: this.toggleAuth }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
