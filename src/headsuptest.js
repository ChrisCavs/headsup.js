document.addEventListener('DOMContentLoaded', () => {
  let show = true

  const header = document.querySelector('header')
  const styles = getComputedStyle(header)

  const headerHeight = () => {
    // computes total height of the element
    const widthAndPadding = header.offsetHeight
    const marginTop = parseFloat(styles['margin-top'])
    const marginBot = parseFloat(styles['margin-bottom'])

    return widthAndPadding + marginTop + marginBot
  }

  const fixedShow = () => {
    // fixes the elements position to top of page, visible
    Object.assign(header.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      transition: 'top 0.3s'
    })

    show = true
  }

  const fixedHide = () => {
    // hides the element
    header
      .style
      .top = `-${headerHeight()}px`

    show = false
  }

  document
    .body
    .style['margin-top'] = `${headerHeight()}px`

  fixedShow()

  let prev = window.pageYOffset

  window.addEventListener('scroll', _ => {
    const current = window.pageYOffset

    current > prev && current >= headerHeight()
      ? show ? fixedHide() : null
      : show ? null : fixedShow()
    
      prev = current
  })
})