export default ({
  selector = 'header',
  duration = '0.3s',
  easing = 'ease',
  delay = '',
  debouce = false
} = {}) => {

  let show = true                                         // initial boolean value
  let prev = window.pageYOffset                           // initial window position

  const header = document.querySelector(selector)
  const styles = getComputedStyle(header)

  const headerHeight = () => {                            // computes total height of the element
    const widthAndPadding = header.offsetHeight
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

    current > prev && current >= headerHeight()
      ? show ? fixedHide() : null
      : show ? null : fixedShow()

    prev = current
  }

  const debounceFunc = ticks => {                             // debouncing function

  }

  document                                                // adjust the margin to make space for header
    .body
    .style['margin-top'] = `${headerHeight()}px`

  Object.assign(header.style, {                           // assign fixed position and transition to header
    position: 'fixed',
    top: '0',
    left: '0',
    transition: `top ${duration} ${easing} ${delay}`
  })

  window.addEventListener('scroll', debounceFunc(debounce))
}