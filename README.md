# Heads-up.js

Sticky headers that hide on scroll.

## Usage

Follow these steps to get started:

1. [Install](#install)
2. [Import](#import)
4. [Review Options](#options)

**Note: It is required that you use a css reset that clears user agent stylesheet margin/padding.  See here for an [example](https://meyerweb.com/eric/tools/css/reset/).

### Install

Using NPM, install Heads-up, and save it to your `package.json` dependencies.

```bash
$ npm install headsup.js --save
```

### Import

Import Heads-up, naming it according to your preference.

```es6
import headsUp from 'headsup.js'
```

## Options

All options are optional, and come with defaults. The defaults are shown below:

```es6
headsUp({
  selector: 'header',
  duration: 0.3,
  easing: 'ease',
  delay: 0,
  debounce: false
})
```

Explanation of each option follows:

* [selector](#selector)
* [duration](#duration)
* [easing](#easing)
* [delay](#delay)
* [debounce](#debounce)

### selector

Any CSS selector that targets to your header element.

```es6
// apply 

headsUp({
  target: '#header'
})
```

### duration

The time it takes for the header to hide, in seconds.

```es6
headsUp({
  duration: 0.5
})
```

### easing

Easing function used to transition the header.

```es6
headsUp({
  easing: 'ease-in'
})
```

Heads-up uses the transition property to accomplish easing.  See [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) for more information.

### delay

Delay from the time the user starts scrolling until the header starts to hide, in seconds.

```es6
headsUp({
  delay: 1
})
```

### debounce

When the user scrolls, a function is called to check whether it is necessary to hide or reveal the header.  Specify the amount of time between function calls with the debounce option, in milliseconds.  This may help with performance.

```es6

// will wait 100ms after each function call

headsUp({
  debounce: 100
})
```

## Browser Support

Heads-up depends on the following browser APIs:

* [pageYOffset]()
* [getComputedStyle]()
* [offsetHeight]()

Consequently, it supports the following natively:

* Chrome 24+
* Firefox 23+
* Safari 6.1+
* Opera 15+
* IE 10+
* iOS Safari 7.1+
* Android Browser 4.4+

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Christopher Cavalea