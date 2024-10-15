import express from 'express';
const router = express.Router();

// MockDB
let monsters = [
  {
    id: 1,
    name: 'Dracula',
    scaryLevel: 13,
  },
  {
    id: 2,
    name: 'Diet Pespi',
    scaryLevel: 13,
  },
  {
    id: 3,
    name: 'Lock Ness',
    scaryLevel: 13,
  },
];

// Create - POST
router.post('/', (req, res) => {
  // If body has appropriate data model
  if (req.body.name && req.body.scaryLevel) {
    let newMonster = {
      id: monsters.length + 1,
      name: req.body.name,
      scaryLevel: req.body.scaryLevel,
    };

    monsters.push(newMonster);

    res.json(newMonster);
  } else {
    //Needs more data
    res.status(400).send('Insufficient Data');
  }
});

// Read - GET
router.get('/', (req, res) => {
  res.json(monsters);
});

// Update - PUT/Patch
router.patch('/:id', (req, res) => {
    //Search for monster and update
    let monster = monsters.find((m, i)=>{
        if(req.params.id == m.id){
            for(let key in req.body){
                monsters[i][key] = req.body[key]
            }
            return true;
        }
    })

    if(monster) res.json(monster); //If monster exists send updated monster
    else res.send('Monster doesnt exist')
});

// Delete - DELETE
router.delete('/:id', (req, res) => {
    let monster = monsters.find((m, i)=>{
        if(req.params.id == m.id){
            monsters.splice(i, 1)
            return true;
        }
    })

    if(monster) res.json(monster); //If monster exists send updated monster
    else res.send('Monster doesnt exist')
});

export default router;
