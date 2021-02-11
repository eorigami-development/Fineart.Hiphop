import React, { Component } from "react";
import PropTypes from "prop-types";

import {bindActionCreators} from 'redux';


class MyAccount extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
   
    const {
      image,
      isValid,
      imageLoaderOpen,
      images,
      imageUploaded,
      unSplashOpen,
      postComment,
    } = this.state;

    return (
     <>
     <div className="myAccount-wrapper">
        <h2 className="headerName">My Account</h2>
    </div>
     </>
    );
  }
}



const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
        MyAccount,
    },
    dispatch
  );

export default MyAccount;
