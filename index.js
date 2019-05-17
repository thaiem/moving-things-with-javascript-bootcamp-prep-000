var dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  var leftNums = dodger.style.left.replace('px', '')
  var left = parseInt(leftNums, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}