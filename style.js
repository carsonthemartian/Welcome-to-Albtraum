// //////////////////////////////////////////////////////
// // ///                                                ///
// // ///              WELCOME TO ALBTRAUM               ///
// // ///                                                ///
// // ///                                                ///
// // ///                                                ///
// // //////////////////////////////////////////////////////
const story = {
    M1: `You have awoken from deep slumber. It appears you are in a small, dark room made out of cobblestone with a single candle illuminating a door straight ahead. Bandaged stab wounds are visible across your chest and an aching pain in your body pulsates as you stand up. With no recollection of where you are or how long you have been in a coma for, fear settles in.  Something isn’t right. It’s almost as if you died and gone to hell. As you approach the door looking for answers and an exit, you are blown back by a deafening scream unlike anything you’ve ever heard before. The nightmarish shriek shakes the room as rocks fall from the ceiling and you stumble over unable to stand anymore. A moment passes, and the scream disappears. Someone is now approaching your door as the sound of footsteps grow louder and louder. An elderly looking dwarf with claw marks across his face and blood running down his forehead looks out of breath and panicked as he enters the room.`,
    dwarf1: `Well, well it appears you have finally awakened. You’re lucky you didn’t die out there, it sure is dangerous outside Albtraum. Our village has been under attack for two centuries now as underworld has waged its war. It used to be a peaceful region, until the Schatten grew in numbers and our defenses weakened. We have been living in chaos since then and have no desire to depart our town as the surrounding woods remain too dangerous for escape. You remain our only hope of saving our homeland.`,
    dwarf2: `Hurry up and stand up!!! The Schatten are coming!!`,
    M2: 'You follow the dwarf and exit the room. As you and the dwarf make way for the cavern, you notice the sky is tinted yellow. Two red moons illuminate bright red through the black clouds. Surrounding buildings feel lifeless and decayed as if they have been destroyed for decades. Welcome to Albtraum. As you sprint north following the dwarf, you sense something is following from behind. The air grows cold.',
    M3: 'The same hellish shriek you heard earlier rings from behind you as you run for your life. The dwarf trips on a rock and falls over as you pass him.',
    dwarf3: `Don’t stop for me! My people will protect you in the cavern right ahead!`,
    M4: 'You look back and see your new friend fade into the shadows. The screams of the beast fade as you run further away. You notice a cave ahead guarded by two dwarf soldiers who let you in. Inside the cave are hundreds of dwarves. Families, children, soldiers, all are together hiding from the outside world. An ironsmith riding horseback approaches you.',
    ironsmith1: 'You! Yes you! Take arms and help us defeat the wretched Schatten. I think I have a sword in the back here',
    ironsmith2: 'Before you leave, I should let you know that the monsters that lurk outside are not to be taken lightly. Some are stronger than they appear, and have the power to kill you easily.',

}
function beginStory() {
    alert(story.M1)
    alert(story.dwarf1)
    alert(story.dwarf2)
    alert(story.M2)
    alert(story.M3)
    alert(story.dwarf3)
    alert(story.M4)
    alert(story.ironsmith1)
    alert(story.ironsmith2)
    mainGame();
}

function mainGame() {
    let person = {
        skill: 10,
        soul: 100,
        maxSoul: 100,
        luck: 5,
        money: 50,//50 coins will buy 25 soul
        level: 1,
        experience: 0,
        name: null,

    }

    const boss1 = {
        name: 'Schatten',
        skill: 15,
        soul: 200,
        maxSoul: 200,
        exp: 110,
        money: 300,
    }

    const boss2 = {
        name: 'Dagon',
        skill: 20,
        soul: 500,
        maxSoul: 500,
        exp: 100,
        money: 500,
    }

    const boss3 = {
        name: 'Mastema',
        skill: 35,
        soul: 1000,
        maxSoul: 1000,
        exp: 120,
        money: 1000
    }

    const trainer = {
        name: 'Slime',
        skill: 5,
        soul: 50,
        maxSoul: 50,
        exp: 35,
        money: 50,
    }


    let message = {
        intro: 'Do you still remember your name?',
        fight: {
            F1: `Draw your sword!`,
            dead: 'The monster has depleted your soul. Go to shop for some soul food.',
            F3: 'You have slain the monster!',
        }
    }

    // this is the intro prompt window and it saves the inputed name
    let ourName = window.prompt(message.intro);
    person.name = ourName;

    let shopD = {
        shopkeeper1: `Welcome to the shop ${person.name}, would you like more soul in exchange for coins?`,
        shopkeeper2: 'Here you go, would you like additional soul?',
        shopkeeper3: 'Good luck, you will need it to defeat the Schatten!',
    }

    function villageOptions() {
        let response = window.prompt(`What would you like to do?\n\n1: Shop\n2: Fight Demons\n3: Demon's Ritual (OFFER YOUR SOUL TO REVIVE ALL DEMONS)\n4: Train\n5: Test Your Luck Game\n6: I'm too Scared, I Quit\n\nCurrent Soul: ${person.soul}\tMax Soul: ${person.maxSoul}\nCurrent Skill: ${person.skill}\tCurrent Money: ${person.money}\nCurrent Luck: ${person.luck}\tCurrent Level: ${person.level}`)
        if (response == 1 || response == "Shop") {
            const inShop = shop();
            inShop();
            return villageOptions();
        }
        else if (response == 2 || response == "Fight Demons") {
            bossChoice()
        }
        else if (response == 3 || response == "Demon's Ritual") {
            if (window.confirm("Are you sure to perform Demon's ritual? This will sacrifice half of your max soul and revive all deceased demons.")) {
                person.maxSoul = person.maxSoul / 2;
                person.soul = person.maxSoul;
                boss1.soul = boss1.maxSoul;
                boss2.soul = boss2.maxSoul;
                boss3.soul = boss3.maxSoul;
                window.alert("All demons have been revived!")
                return villageOptions();
            } else {
                return villageOptions();
            }
        }
        else if (response == 4 || response == 'Train') {
            train();
        }
        else if (response == 5 || response == 'Test my luck') {
            let warCardGame = deckOfCards.shuffle();
            warCardGame(0, 0);
            return villageOptions();
        }
        else if (response == 6 || response == "I'm too Scared, I Quit") {
            window.alert("Bye, quitter");
            return ("");
        }

        else {
            window.alert('You have to tell me what do you want to do. Type 1,2,3,4,5 or 6, or just type in the text of the option.')
            return villageOptions();
        }

    }

    function shop() {
        if (window.confirm(shopD.shopkeeper1 + `\n\nCurrent Money:${person.money}\tCurrent Soul:${person.soul}`)) {
            return function shopping() {
                if (person.money < 50) {
                    window.alert('Insufficient coins!')
                    return
                }
                if (person.soul >= person.maxSoul) {
                    alert('You\'ve reached max soul!')
                    return
                }
                else {
                    person.money -= 50
                    person.soul += 30
                    if (person.soul > person.maxSoul) {
                        person.soul = person.maxSoul //-- avoid over the max -- Jingbo
                    }
                    //window alert showing money and soul after exchange
                    window.alert(`Your money: ${person.money}\n\nYour soul: ${person.soul}`)
                }
                console.log(person)
                if (window.confirm(shopD.shopkeeper2)) {
                    return shopping();
                }
                window.alert(shopD.shopkeeper3)
            }
        }
    }

    function luck(min, max) {
        return Math.random() * (max - min) + min
    }

    // //fighter1 is player
    function battle() {
        window.alert(message.fight.F1);

        return function battleClosure(fighter1, fighter2) {
            if (fighter1.soul <= 0 || fighter2.soul <= 0) {
                if (fighter1.soul <= 0) {
                    window.alert(message.fight.dead);
                    window.alert('The dwarf doctor healed you, but you will need more food to recover.(Recovered to half of your maximum soul.)')
                    fighter1.soul = 0.5 * person.maxSoul;
                    fighter2.soul = fighter2.maxSoul;
                    return villageOptions();
                }
                else {

                    fighter1.experience += fighter2.exp;
                    fighter1.money += fighter2.money
                    if (fighter1.experience >= 100) {

                        fighter1.level += 1;

                        fighter1.skill += 10;
                        fighter1.maxSoul += 50;
                        fighter1.soul = fighter1.maxSoul;
                        window.alert(`Level up to ${fighter1.level}! You are stronger now! \nNew Soul: ${fighter1.maxSoul}  New Skill: ${fighter1.skill}`)
                        fighter1.experience = fighter1.experience - 100;
                    }
                    window.alert(`You killed this enemy! Your current soul is ${person.soul}. Gain ${fighter2.exp} experience. Need ${100 - fighter1.experience} to level up! Pray you don't lose your soul...`)


                }
                return;

            }

            let lucky = luck(1, 2);
            console.log(`Luck is ${lucky}`)
            damage1 = Math.ceil(lucky * fighter1.skill);
            damage2 = fighter2.skill;

            fighter1.soul = fighter1.soul - damage2
            fighter2.soul = fighter2.soul - damage1

            window.alert(`Your sword has done ${damage1} damage!\n\n${fighter2.name} clawed you for ${damage2} damage!\n\n ${fighter1.name} soul: ${fighter1.soul}\n\n${fighter2.name} soul: ${fighter2.soul}`)
            return battleClosure(fighter1, fighter2)
        }
    }


    function bossChoice() {
        let choice = window.prompt('Which one do you want to go?\n1. Schatten\n2. Dagon\n3. Mastema')

        if (choice == 1 || choice == 'Boss1') {
            if (boss1.soul <= 0) {
                window.alert('This boss is already dead!');
                return villageOptions();
            }
            const boss1Def = boss1.soul / person.skill;
            const boss1Atc = person.soul / boss1.skill;
            if (boss1Atc <= boss1Def) {
                if (window.confirm('This boss is stronger than you, are you sure you want to go? Maybe go back and train a little.')) {
                    const fight1 = battle();
                    fight1(person, boss1);
                    return villageOptions();
                } else {
                    return villageOptions();
                }
            }
            const fight1 = battle();
            fight1(person, boss1);
            return villageOptions();
        }

        else if (choice == 2 || choice == 'Boss2') {

            if (boss2.soul <= 0) {
                window.alert('This boss is already dead!');
                return villageOptions();
            }
            const boss2Def = boss2.soul / person.skill;
            const boss2Atc = person.soul / boss2.skill;
            if (boss2Atc <= boss2Def) {
                if (window.confirm('This boss is stronger than you, are you sure you want to go? Maybe go back and train a little.')) {
                    const fight2 = battle();
                    fight2(person, boss2);
                    return villageOptions();
                } else {
                    return villageOptions();
                }
            }
            const fight2 = battle();
            fight2(person, boss2);
            return villageOptions();
        }

        else if (choice == 3 || choice == 'Boss3') {
            if (boss3.soul <= 0) {
                window.alert('This boss is already dead!');
                return villageOptions();
            }
            const boss3Def = boss3.soul / person.skill;
            const boss3Atc = person.soul / boss3.skill;
            if (boss3Atc <= boss3Def) {
                if (window.confirm('This boss is stronger than you, are you sure you want to go? Maybe go back and train a little.')) {
                    const fight3 = battle();
                    fight3(person, boss3);
                    return villageOptions();
                } else {
                    return villageOptions();
                }
                const fight3 = battle();
                fight3(person, boss3);
                return villageOptions();
            }
        }
    }
    function train() {
        if (window.confirm(`Battle training will make you grow stronger! Begin trainning? Your current soul is ${person.soul}.`)) {
            const fight4 = battle();
            fight4(person, trainer);
            trainer.soul = trainer.maxSoul;
            if (window.confirm(`Keep training? Watch over your soul, you current soul is ${person.soul}.`)) {
                return train();
            } else {
                return villageOptions();
            }
        } else {
            return villageOptions();
        }
    }

    function firstFight() {
        alert('Without any preparation, You entered the battle with a soul starving Schatten!!!')
        const fight0 = battle();
        fight0(person, boss1);
    }

    const deckOfCards = {
        Clubs: {
            1: "Ace of clubs",
            2: "Two of clubs",
            3: "Three of clubs",
            4: "Four of clubs",
            5: "Five of clubs",
            6: "Six of clubs",
            7: "Seven of clubs",
            8: "Eight of clubs",
            9: "Nine of clubs",
            10: "Ten of clubs",
            11: "Jack of clubs",
            12: "Queen of clubs",
            13: "King of clubs"
        },
        Diamonds: {
            1: "Ace of diamonds",
            2: "Two of diamonds",
            3: "Three of diamonds",
            4: "Four of diamonds",
            5: "Five of diamonds",
            6: "Six of diamonds",
            7: "Seven of diamonds",
            8: "Eight of diamonds",
            9: "Nine of diamonds",
            10: "Ten of diamonds",
            11: "Jack of diamonds",
            12: "Queen of diamonds",
            13: "King of diamonds"
        },
        Hearts: {
            1: "Ace of hearts",
            2: "Two of hearts",
            3: "Three of hearts",
            4: "Four of hearts",
            5: "Five of hearts",
            6: "Six of hearts",
            7: "Seven of hearts",
            8: "Eight of hearts",
            9: "Nine of hearts",
            10: "Ten of hearts",
            11: "Jack of hearts",
            12: "Queen of hearts",
            13: "King of hearts"
        },
        Spades: {
            1: "Ace of spades",
            2: "Two of spades",
            3: "Three of spades",
            4: "Four of spades",
            5: "Five of spades",
            6: "Six of spades",
            7: "Seven of spades",
            8: "Eight of spades",
            9: "Nine of spades",
            10: "Ten of spades",
            11: "Jack of spades",
            12: "Queen of spades",
            13: "King of spades"
        },
        shuffle: function () {
            let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
            let cache = [];
            window.alert("Welcome to a simple game of luck.\nYou and your opponent each draw a card.\nThe player with the highest card wins the match (aces are low).\nIf you both have the same card value, no one earns any points.\nIn the best of seven, the first to four match victories wins!")
            return function warShuffle(yourScore, compScore) {
                if (yourScore == 4 || compScore == 4) {
                    if (yourScore == 4) {
                        window.alert("You have won the war! You may be luckier in future, real battles...");
                        person.luck += 1;
                        person.minLuck += 0.1;
                        person.maxLuck += 0.1;
                        console.log(cache);
                        return villageOptions();
                    }
                    else
                        window.alert("You have lost the war. May your luck be better next time");
                    console.log(cache);
                    return villageOptions();
                }
                else {
                    let yourSuit = Math.floor(Math.random() * 4);
                    let yourCard = Math.ceil(Math.random() * 13);
                    let compSuit = Math.floor(Math.random() * 4);
                    let compCard = Math.ceil(Math.random() * 13);
                    let yourHand = deckOfCards[`${suits[yourSuit]}`][yourCard];
                    let compHand = deckOfCards[`${suits[compSuit]}`][compCard];
                    // if (!yourHand || !compHand){
                    // return warShuffle(yourScore, compScore);

                    if (yourHand == compHand) {
                        return warShuffle(yourScore, compScore);
                    }
                    for (let element in cache) {
                        if (element == yourHand || element == compHand) {
                            return warShuffle(yourScore, compScore);
                        }
                    }
                    cache.push(yourHand);
                    cache.push(compHand);
                    if (yourCard == compCard) {
                        window.alert(`Your hand is ${yourHand}\nTheir hand is ${compHand}\nTie round - no points to anyone`);
                    }
                    if (yourCard > compCard) {
                        window.alert(`Your hand is ${yourHand}\nTheir hand is ${compHand}\nYou win this round! \nYour score is ${yourScore + 1} \nYour opponent's score is ${compScore}`);
                        yourScore += 1;
                    }
                    if (yourCard < compCard) {
                        window.alert(`Your hand is ${yourHand}\nTheir hand is ${compHand}\nYou lose this round. \nYour score is ${yourScore} \nYour opponent's score is ${compScore + 1}`);
                        compScore += 1;
                    }
                    return warShuffle(yourScore, compScore);
                }
            }
        }
    }

    firstFight();

}

const button = document.getElementById('play');

button.addEventListener('click', function handleClick() {
    beginStory();
});
