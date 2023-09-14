const blockchainContainer = document.getElementById("blockchain-container");
const block = document.getElementById("block1");

var hashNumber = "A13G218GF3";

for (let i = 2; i <= 100; i++) {
    const clonedBlock = block.cloneNode(true);

    clonedBlock.id = `block${i}`;
    clonedBlock.classList.add('block-prev');

    const prev = clonedBlock.querySelector(".block-prev");
    const hash = clonedBlock.querySelector(".block-hash");
    
    if (i===42) {
        hash.value = "AABB112233";
    } else {
        hash.value = generateRandomHash(10);
    }
    
    prev.value = hashNumber;
    hashNumber = hash.value;
    
    const blockNumberInput = clonedBlock.querySelector('.block-num');

    if (blockNumberInput) {
        blockNumberInput.id = `block${i}Number`;
        blockNumberInput.innerHTML = i;
    }

    blockchainContainer.appendChild(clonedBlock);
}
function generateRandomHash(length) {
    const characters = '0123456789ABCDEF';
    let hash = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        hash += characters[randomIndex];
    }

    return hash;
}

for (let i=0; i<100; i++) {
    const blocks = document.querySelectorAll('.form');
    blocks[i].addEventListener("click", ()=>{
        const message = blocks[i].querySelector(".message");
        const lid = blocks[i].querySelector(".lid");
        message.classList.add("show");
        lid.classList.add("open");
        if (i>=41) {
            blocks[i].querySelector(".block-body").classList.add("wrong");
            blocks[i].querySelector(".lid").classList.add("wrong");
        }
    })
}