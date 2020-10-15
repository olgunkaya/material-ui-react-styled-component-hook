import { styled } from "@material-ui/core/styles";
import { compose, css } from "@material-ui/system";

/** Creates a styled version of component which supports all the system styles
 * ın the Material-UI documentation page.
 * functions could be spacing, sizing, shadows, flexbox etc..
 * functions can be imported from
 */
const makeStyledComponent = (component, ...styleFunctions) =>
  styled(component)(css(compose(...styleFunctions)));

export { makeStyledComponent };
