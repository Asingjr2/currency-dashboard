import React from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../AppProvider';

// displays page using consumer state.  Checking name of page against the children
const Page = ({name, children}) => {
  return (
    <AppContext.Consumer>
    {({page}) => {
      if(page !== name) {
        return null;
      }
      return <div> {children} </div>
    }}
    </AppContext.Consumer>
  );
};

Page.propTypes = {
  name: PropTypes.string.isRequired
}
export default Page;
