# mrscott - responsive content teleportation for responsive websites

#### Features

* Move content to a specific location in a document, based on media queries and selectors.
* Pull in external content for large-screen devices.
* Invoke custom functions based on media queries.
* Simple data-attribute-based usage.

## Get Started

* [Project Home](http://www.codistic.com/projects/mrscott/)
* [Demo](http://www.codistic.com/projects/mrscott/demo/)

## Usage

### Initializing mrscott
```html
<script type="text/javascript">
	$(function () {
		mrscott.init();
	});
</script>
```
### Moving Content

```html
<h2>Small</h2>
<div data-mrscott-append="#mover" data-mrscott-query="(max-width: 480px)">
	<div id="mover">I will move based on the screen width.</div>
</div>

<h2>Medium</h2>
<div data-mrscott-append="#mover" data-mrscott-query="(min-width: 481px) and (max-width: 979px)"></div>

<h2>Large</h2>
<div data-mrscott-append="#mover" data-mrscott-query="(min-width: 980px)"></div>
```

#### `data-mrscott-query`

Make this a valid media query.

#### `data-mrscott-append`

Make this a valid selector. All elements that match this selector will be appended to this element when the `data-mrscott-query` is matched.

### Pulling in External Content

```html
<div data-mrscott-import="external-file.html" data-mrscott-query="(min-width: 980px)"></div>
```

#### `data-mrscott-import`

Make this a valid url in the current domain (won't work with external domains). This content will be pulled in and appended when the `data-mrscott-query` is matched.
a
## Dependencies
mrscott requires [jquery.js](http://jquery.com/) and [enquire.js](http://wicky.nillia.ms/enquire.js/).

## License
mrscott is distributed under the MIT license as tweetware. If you like it, please tweet about it.

## Contributors
mrscott was written by Jason Stehle.

## Acknowledgements
Thanks to [Nick Williams](http://wicky.nillia.ms/) and [enquire.js](http://wicky.nillia.ms/enquire.js/) for making this so easy to write.
