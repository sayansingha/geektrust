const { emblemFinder, ceasarCipherDecrypter, checkDecryptedCodeMatchesEmblem } = require('./index');



test ('properly finds the correct emblem of the given kingdom', ()=>{
    expect(emblemFinder("SPACE")).toBe("GORILLA")
    expect(emblemFinder("LAND")).toBe("PANDA")
    expect(emblemFinder("WATER")).toBe("OCTOPUS")
    expect(emblemFinder("AIR")).toBe("OWL")
    expect(emblemFinder("ICE")).toBe("MAMMOTH")
    expect(emblemFinder("FIRE")).toBe("DRAGON")
})

test('properly breaks the code provided', ()=>{
    expect(ceasarCipherDecrypter('ROZO', 3)).toBe('OLWL')
    expect(ceasarCipherDecrypter('FAIJWJSOOFAMU', 5)).toBe('AVDERENJJAVHP');
    expect(ceasarCipherDecrypter('STHSTSTVSASOS', 7)).toBe('LMALMLMOLTLHL');
    expect(ceasarCipherDecrypter('AJXGAMUTA', 6)).toBe('UDRAUGONU');
    expect(ceasarCipherDecrypter('NVYPSSH', 7)).toBe('GORILLA');
    expect(ceasarCipherDecrypter("VJAVWBZ", 7)).toBe('OCTOPUS');
    expect(ceasarCipherDecrypter('A', 2)).toBe('Y')
    expect(ceasarCipherDecrypter(' ', 2)).toBe(' ')
    expect(ceasarCipherDecrypter('',2)).toBe('')
    expect(ceasarCipherDecrypter('1', 1)).toBe('1')
})

test('properly checks if the letter of the emblem are in the decrypted code', ()=>{
    expect(checkDecryptedCodeMatchesEmblem('OLWL', 'AIR')).toBe(1)
    expect(checkDecryptedCodeMatchesEmblem('OL', 'AIR')).toBe(0)
    expect(checkDecryptedCodeMatchesEmblem('GORILLALLAA', 'SPACE')).toBe(1)
    expect(checkDecryptedCodeMatchesEmblem('GORILA', 'SPACE')).toBe(0)
    expect(checkDecryptedCodeMatchesEmblem('PANADADAD', 'LAND')).toBe(1)
    expect(checkDecryptedCodeMatchesEmblem('PNDA', 'LAND')).toBe(0)
    expect(checkDecryptedCodeMatchesEmblem('OCTOPUSSY', 'WATER')).toBe(1)
    expect(checkDecryptedCodeMatchesEmblem('OCTPUS', 'WATER')).toBe(0)
    expect(checkDecryptedCodeMatchesEmblem('MAMMOTHHY', 'ICE')).toBe(1)
    expect(checkDecryptedCodeMatchesEmblem('MAMOTH', 'WATER')).toBe(0)
    expect(checkDecryptedCodeMatchesEmblem('DRAGONNYY', 'FIRE')).toBe(1)
    expect(checkDecryptedCodeMatchesEmblem('DRAGN', 'FIRE')).toBe(0)
    expect(checkDecryptedCodeMatchesEmblem('', "AIR")).toBe(0)
    expect(checkDecryptedCodeMatchesEmblem('', '')).toBe(0)
})