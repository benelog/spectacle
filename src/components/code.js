import React, { Component, PropTypes } from "react";
import { getStyles } from "../utils/base";
import Radium from "radium";

const format = (str) => {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

@Radium
export default class Code extends Component {
  createMarkup() {
    return {
      __html: format(this.props.children)
    };
  }
  render() {
    return (
      <pre className={this.props.className} style={[this.context.styles.components.codePane.pre, getStyles.call(this), this.props.style]}>
        <code
            className={`language-${this.props.lang}`}
            style={this.context.styles.components.codePane.code}
            dangerouslySetInnerHTML={this.createMarkup()}
        />
      </pre>
    );
  }
}

Code.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

Code.contextTypes = {
  styles: PropTypes.object,
  store: PropTypes.object
};

Code.defaultProps = {
  lang: "markup"
};
