const fighter = function (fighter){
    const fightHistory = {wins: 0, loses: 0}
    return {
        gotDamage: (damage)=> fighter.hp-=damage,
        hasLost: ()=>fightHistory.loses++,


        getFighterName:()=>fighter.name,
        block:()=>!!Math.floor(Math.random() * 2),
        getFighterStats:()=> ({
            name: fighter.name,
            attack: fighter.attack,
            hp: fighter.hp
        }),
        getCombatHistory:()=>fightHistory,
        fight:(defender)=>{
            if(!defender.block()){
                console.log('defender has not blocked')
                if(fighter.attack>=defender.getFighterStats().hp){
                    console.log('fighter has won')
                    fightHistory.wins++
                    defender.hasLost(false)
                }
                else {
                    console.log('defender got damage')
                    defender.gotDamage(fighter.attack)
                }
                return true
            }
            return false
        }
    }
}

/*
var fighter1 = fighter({name: 'John', attack: 100, hp: 100});
var fighter2 = fighter({name: 'Kayn', attack: 50, hp: 300});
var fighter3 = fighter({name: 'Bill', attack: 40, hp: 100});

console.log(fighter2.getFighterStats(), fighter2.getCombatHistory())
fighter3.fight(fighter2);
console.log(fighter2.getFighterStats(), fighter2.getCombatHistory())
*/
