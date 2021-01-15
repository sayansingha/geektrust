const { emblemFinder, crack, check } = require('./index');



test ('properly finds the correct emblem of the given kingdom', ()=>{
    expect(emblemFinder("SPACE")).toBe("GORILLA")
    expect(emblemFinder("LAND")).toBe("PANDA")
    expect(emblemFinder("WATER")).toBe("OCTOPUS")
    expect(emblemFinder("AIR")).toBe("OWL")
    expect(emblemFinder("ICE")).toBe("MAMMOTH")
    expect(emblemFinder("FIRE")).toBe("DRAGON")
})

test('properly breaks the code provided', ()=>{
    expect(crack('ROZO', 3)).toBe('OLWL')
    expect(crack('FAIJWJSOOFAMU', 5)).toBe('AVDERENJJAVHP');
    expect(crack('STHSTSTVSASOS', 7)).toBe('LMALMLMOLTLHL');
    expect(crack('AJXGAMUTA', 6)).toBe('UDRAUGONU');
    expect(crack('NVYPSSH', 7)).toBe('GORILLA');
    expect(crack("VJAVWBZ", 7)).toBe('OCTOPUS');
    expect(crack('A', 2)).toBe('Y')
    expect(crack(' ', 2)).toBe(' ')
    expect(crack('',2)).toBe('')
    expect(crack('1', 1)).toBe('1')
})

test('properly checks if the letter of the emblem are in the decrypted code', ()=>{
    expect(check('OLWL', 'AIR')).toBe(1)
    expect(check('OL', 'AIR')).toBe(0)
    expect(check('GORILLALLAA', 'SPACE')).toBe(1)
    expect(check('GORILA', 'SPACE')).toBe(0)
    expect(check('PANADADAD', 'LAND')).toBe(1)
    expect(check('PNDA', 'LAND')).toBe(0)
    expect(check('OCTOPUSSY', 'WATER')).toBe(1)
    expect(check('OCTPUS', 'WATER')).toBe(0)
    expect(check('MAMMOTHHY', 'ICE')).toBe(1)
    expect(check('MAMOTH', 'WATER')).toBe(0)
    expect(check('DRAGONNYY', 'FIRE')).toBe(1)
    expect(check('DRAGN', 'FIRE')).toBe(0)
    expect(check('', "AIR")).toBe(0)
    expect(check('', '')).toBe(0)
})