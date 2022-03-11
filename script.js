var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var removeAllBtn = document.querySelector('.btn-removeAll')
var tags = []

function createTags() {
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML += `<li>
                                <span>${tag}</span>
                                <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
                            </li>`
    }
    content.appendChild(input)
    input.focus()
}
function removeTag(index) {
    tags.splice(index, 1)
    createTags()
}

input.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        let tag = e.target.value.trim()
        if(tag != '' && !tags.includes(tag)){
            tags.push(tag)
            input.value = ''
            createTags()
        }
        
    }
})


removeAllBtn.addEventListener('click', () => {
    tags = []
    createTags()
})
