# material ui react-styled-component-hook

I was reading documentation for material-ui react. This text made me wonder, what ?

_The Box component packages all the style functions that are exposed in @material-ui/system. It's created using the styled() function of @material-ui/core/styles._

What is that mean ? It means, Box element inherits all the functions defined in the **System** section of material ui documentation.

Link to page : https://material-ui.com/getting-started/installation/

I searched around but could not see any util in material-ui. So I decided to implement one for myself.

in order to use this simply import the hook function from the file and call it like;

makeStyledComponent(Button, sizing, spacing)

first parameter is the component you want to have styling available. Rest of the parameters are the stylings you want to have on your component.
