function darkmode() {
  const body = document.body
  const wasDarkmode = localStorage.getItem('darkmode') === 'true'

  localStorage.setItem('darkmode', !wasDarkmode)
  body.classList.toggle('dark-mode', !wasDarkmode)
}

document.querySelector('.switch').addEventListener('change', darkmode)

function onload2() {
  document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true' )
}
document.addEventListener('DOMContentLoaded', onload2)


