 const list = document.getElementById('mobile')
    const openBtn = document.getElementById('open')
    const closeBtn = document.getElementById('close')

openBtn.addEventListener("click", () => {
    list.classList.remove('hidden')
    list.classList.add('flex')
    
    openBtn.classList.remove('flex')
    openBtn.classList.add('hidden')
    closeBtn.classList.remove('hidden')
    closeBtn.classList.add('flex')
      console.log('open works')
    })

closeBtn.addEventListener("click", () => {
        list.classList.remove('flex')
        list.classList.add('hidden')

        closeBtn.classList.add('hidden')
        closeBtn.classList.remove('flex')
        openBtn.classList.remove('hidden')
    openBtn.classList.add('flex')
      console.log('close works')

    })
