const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    //mouse over 
    square.addEventListener('mouseover', () => setColor(square))
    // mouse out
    square.addEventListener('mouseout', () => removeColor(square))

    // Touchstart for mobile
    square.addEventListener('touchstart', () => setColor(square))

    // Touchend for mobile
    square.addEventListener('touchend', () => removeColor(square))


    // Touchmove for mobile (dragging)
    square.addEventListener('touchmove', (e) => {
        const touch = e.touches[0]
        const targetElement = document.elementFromPoint(touch.clientX, touch.clientY)
        if (targetElement && targetElement.classList.contains('square')) {
            setColor(targetElement)
        }
        e.preventDefault()
    })

    // Touchend for mobile (lift finger)
    square.addEventListener('touchend', () => removeColorGradually(square))

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}