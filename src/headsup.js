export default ({
  selector = 'header',
  duration = 0.3,
  easing = 'ease',
  delay = 0,
  debounce = false
} = {}) => {

  let show = true                                         // initial boolean value
  let prev = window.pageYOffset                           // initial window position

  const header = document.querySelector(selector)
  const styles = getComputedStyle(header)

  const headerHeight = () => {                            // computes total height of the element
    const widthAndPadding = header
      .getBoundingClientRect()
      .height
    const marginTop = parseFloat(styles['margin-top'])
    const marginBot = parseFloat(styles['margin-bottom'])

    return widthAndPadding + marginTop + marginBot
  }

  const fixedShow = () => {                               // shows the element
    header
      .style
      .top = '0'

    show = true
  }

  const fixedHide = () => {                               // hides the element
    header
      .style
      .top = `-${headerHeight()}px`

    show = false
  }

  const onScrollFunction = _ => {                         // performs logic on each scroll event
    const current = window.pageYOffset

    current > prev && current >= (headerHeight()/2)
      ? show ? fixedHide() : null
      : show ? null : fixedShow()

    prev = current
  }

  const debounceFunc = wait => {                          // debouncing function
    if (!wait) return onScrollFunction

    let timeout = null
    return () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          onScrollFunction()
          timeout = null
        }, wait)
      }
    }
  }

  document                                                // adjust body margin to make space for header
    .body
    .style['margin-top'] = `${headerHeight()}px`

  Object.assign(header.style, {                           // assign fixed position and transition to header
    position: 'fixed',
    top: '0',
    transition: `top ${duration}s ${easing} ${delay}s`
  })

  window.addEventListener('scroll', debounceFunc(debounce))
}