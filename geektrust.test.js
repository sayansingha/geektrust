const { geektrust } = require('./utils/index');

test('feature test to check if the main feature is working right', ()=>{
    expect(
        geektrust(["AIR OWLAOWLBOWLC", "LAND FDIXXSOKKOFBBMU", "ICE MOMA MVT MTMHTM", "WATER SUMMER IS COMING", "FIRE AJXGAMUTA"])
    ).toEqual([ 'SPACE', 'LAND' ,'ICE', 'FIRE'  ])
    expect(
        geektrust(['AIR ROZO', 'LAND FAIJWJSOOFAMAU', 'ICE STHSTSTVSASOS'])
    ).toEqual([ 'SPACE', 'AIR', 'LAND', 'ICE'])
    expect(
        geektrust(["AIR OWLAOWLBOWLC", "LAND FDIXXSOKKOFBBMU", "ICE MOM", "WATER SUMMER IS COMING", "FIRE AJXGA"])
    ).toEqual('NONE')
})