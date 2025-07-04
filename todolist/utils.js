const bindRow = (rootE, data) => {
    // rootE is prarent elements
    // data is job value
    rootE.innerHTML += `
        <div class="job-item">
            <span>${data.name}</span>
            <div class="job-action">
                <button>update</button>
                <button>delete</button>
            </div>
        </div>
    `
}

const bindRows = (rootE, rows) => {
    rootE.innerHTML = ''
    rows.map(row => bindRow(rootE, row))
}

export {
    bindRows
}