const fs = require('fs');

const f = fs.readFileSync('./questions.json');
const Questiondata = JSON.parse(f);


function find_question(floor_id, que_id) {
    const data = Questiondata[floor_id][que_id]
    return data
    
}


find_question("1", "2")