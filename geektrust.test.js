const { main } = require('./utils/index');

test('feature test to check if the main feature is working right', ()=>{
    expect(
        main(["AIR OWLAOWLBOWLC", "LAND FDIXXSOKKOFBBMU", "ICE MOMA MVT MTMHTM", "WATER SUMMER IS COMING", "FIRE AJXGAMUTA"])
    ).toEqual(['SPACE', 'LAND' ,'ICE', 'FIRE'])
    expect(
        main(['AIR ROZO', 'LAND FAIJWJSOOFAMAU', 'ICE STHSTSTVSASOS'])
    ).toEqual([ 'SPACE', 'AIR', 'LAND', 'ICE'])
    expect(
        main(["AIR OWLAOWLBOWLC", "LAND FDIXXSOKKOFBBMU", "ICE MOM", "WATER SUMMER IS COMING", "FIRE AJXGA"])
    ).toEqual('NONE')
    expect(
        main(["AIR OWLAOWLBOWLC", "LAND FDIXXSOKKOFBBMU"])
    ).toEqual("NONE")
})