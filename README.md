# scratch-css
CSS Library for Widgets (embedding on 3rd party sites)

## CSS For 3rd Party Code

This is a CSS boilerplate designed to style 3rd party widgets embedded in websites.

### Key Design Considerations

  * Should be tiny, since a given site may have many 3rd party widgets.
  * Includes a CSS reset to prevent the parent site affecting the widget, to the extent possible.
  * Should be designed to look good with key inherited styles from the parent site. This isn't a contradiction to the above point, but rather that we want explicit control of what's inherited (control mechanism is also not included in this repo currently)
  * As an example of the above, shouldn't include any colors by default, but instead will be overridden with the parent site's brand colors at embed time.
  * Should be scoped to your widget using PostCSS (not included in this repo currently) to prevent affecting the parent site.
