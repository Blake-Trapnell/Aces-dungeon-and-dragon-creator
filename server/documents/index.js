module.exports = (sheetinfo) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>AcesDungeonCreater</title>
    <style>

    .Print_Outer {
        height: 900px;
        width: 700px;
        background: url('https://lh3.googleusercontent.com/AuKqPikp2tTSCihDcnX-9AQQTaddcOlykfVCddGKaqUcW6Zg7HNj8-MEFV2uHQtL9izdefddXOidYc9WOT_Ir4s1ygmp4d2HhbH_sa5YT0ZPzwRT_tz1cxTAz9iVn1LTg7hC4CQ79m1W8stLNVKQV0IxB1eDgrjFHzvspzo5ORaxOQDiF1Fetc3IbltwmQtc9uk6iXnFg5tEixaEn96etcxskfGqjqKrxYJQN8OKV01yEtQFM5-9A-jwMBhO8ZBd1gqi6NsFIICscoM9SUctJRCJzIbpDyns1rb0DEe-EvxPxWBLB0mihockr5rRwhVmVqqgfO1MGfAft8eO7CMutXp9cTQyuIdZLd3OPzYtKXSl5S5MqO1dXETHU_22XrjhA_480r9ygos6GVkRgp3XiuH61oG2o-UPolXMJWZLJBah0m0hV6B5FZ6n5K4I1t8dKZv2PGk8F78whkw_VM9GbRhSNInTlHNA-nvJJEoPY_WHh16CzTJT8cxZ5c9qppwh3elNXgChEOgS8UeTNkX0tadgZD_4P0z8J1Q_jDEQ2LLmhBVS8xkGoM3mcKb333d0Jl2DqCgDo6ETT0vwFxNtSLoYfHMVQF07gmthae6nDefjr3sfdeSpRQmZ6125H1hFdLHMeHKaqPgEjEGbXEYz8CRCfzRdXbY=w754-h975-no');
        background-size: cover;
    }
    
    .Charactername {
        position: relative;
        left: 50px;
        top: 50px;
    }
    
    .PlayerClass {
        position: relative;
        left: 310px;
        bottom: 10px;
    }
    
    .Background {
        position: relative;
        bottom: 50px;
        left: 435px;
    }
    
    .Race {
        position: relative;
        left: 310px;
        bottom: 58px;
    }
    
    .Playername {
        position: relative;
        left: 560px;
        bottom: 128px;
    }
    
    .Alignment {
        position: relative;
        left: 430px;
        bottom: 140px;
    }
    
    .Strength {
        position: relative;
        left: 20px;
        bottom: 44px;
    }
    
    .Dexterity {
        position: relative;
        left: 20px;
        bottom: 52px;
    }
    
    .Constitution {
        position: relative;
        left: 20px;
        bottom: 60px;
    }
    
    .Intelligence {
        position: relative;
        left: 20px;
        bottom: 67px;
    }
    
    .Wisdom {
        position: relative;
        left: 20px;
        bottom: 75px;
    }
    
    .Charisma {
        position: relative;
        left: 20px;
        bottom: 82px;
    }

    .styled_h6_acr {
        position: relative;
        bottom: 490px;
        left: 130px;
    }
    .styled_h6_ani {
        position: relative;
        bottom: 515px;
        left: 130px;
    }
    .styled_h6_arc {
        position: relative;
        bottom: 538px;
        left: 130px;
    }
    .styled_h6_ath {
        position: relative;
        bottom: 558px;
        left: 130px;
    }
    .styled_h6_dec {
        position: relative;
        bottom: 580px;
        left: 130px;
    }
    .styled_h6_his {
        position: relative;
        bottom: 603px;
        left: 130px;
    }
    .styled_h6_ins {
        position: relative;
        bottom: 625px;
        left: 130px;
    }
    .styled_h6_int {
        position: relative;
        bottom: 647px;
        left: 130px;
    }
    .styled_h6_inv {
        position: relative;
        bottom: 670px;
        left: 130px;
    }
    .styled_h6_med {
        position: relative;
        bottom: 690px;
        left: 130px;
    }
    .styled_h6_nat {
        position: relative;
        bottom: 715px;
        left: 130px;
    }
    .styled_h6_perc {
        position: relative;
        bottom: 735px;
        left: 130px;
    }
    .styled_h6_perf {
        position: relative;
        bottom: 758px;
        left: 130px;
    }
    .styled_h6_pers {
        position: relative;
        bottom: 780px;
        left: 130px;
    }
    .styled_h6_rel {
        position: relative;
        bottom: 803px;
        left: 130px;
    }
    .styled_h6_sle {
        position: relative;
        bottom: 825px;
        left: 130px;
    }
    .styled_h6_ste {
        position: relative;
        bottom: 847px;
        left: 130px;
    }
    .styled_h6_sur {
        position: relative;
        bottom: 870px;
        left: 130px;
    }

    



    </style>
</head>

<body>
<div class="Print_Outer">
<h3 class="Charactername">${sheetinfo.character_name}</h3>
<h4 class="PlayerClass">${sheetinfo.class}</h4>
<h4 class="Background">${sheetinfo.background}</h4>
<h4 class="Race">${sheetinfo.race}</h4>
<h4 class="Playername">${sheetinfo.playername}</h4>
<h4 class="Alignment">${sheetinfo.alignment}</h4>
<div class="Ability_points">
    <div class="Strength">
        <h1 class="Strength">
            ${sheetinfo.strength}
        </h1>
        <h6 class="Strength_Bonus">
            +${Math.floor((sheetinfo.strength - 10) / 2)}
        </h6>
    </div>
    <div class="Dexterity">
        <h1 class="Dexterity">
            ${sheetinfo.dexterity}
        </h1>
        <h6 class="Dexterity_Bonus">
            +${Math.floor((sheetinfo.dexterity - 10) / 2)}
        </h6>
    </div>
    <div class="Constitution">
        <h1 class="Constitution">
            ${sheetinfo.constitution}
        </h1>
        <h6 class="Constitution_Bonus">
            +${Math.floor((sheetinfo.constitution - 10) / 2)}
        </h6>
    </div>
    <div class="Intelligence">
        <h1 class="Intelligence">
            ${sheetinfo.intelligence}
        </h1>
        <h6 class="Intelligence_Bonus">
            +${Math.floor((sheetinfo.intelligence - 10) / 2)}
        </h6>
    </div>
    <div class="Wisdom">
        <h1 class="Wisdom">
            ${sheetinfo.wisdom}
        </h1>
        <h6 class="Wisdom_Bonus">
            +${Math.floor((sheetinfo.wisdom - 10) / 2)}
        </h6>
    </div>
    <div class="Charisma">
        <h1 class="Charisma">
            ${sheetinfo.charisma}
        </h1>
        <h6 class="Charisma_Bonus">
            +${Math.floor((sheetinfo.charisma - 10) / 2)}
        </h6>
    </div>
</div>
<h6 class="styled_h6_acr"> ${Math.floor((sheetinfo.dexterity - 10) / 2)}</h6>
<h6 class="styled_h6_ani">${Math.floor((sheetinfo.wisdom - 10) / 2)}</h6>
<h6 class="styled_h6_arc">${Math.floor((sheetinfo.intelligence - 10) / 2)}</h6>
<h6 class="styled_h6_ath">${Math.floor((sheetinfo.strength - 10) / 2)}</h6>
<h6 class="styled_h6_dec">${Math.floor((sheetinfo.charisma - 10) / 2)}</h6>
<h6 class="styled_h6_his">${Math.floor((sheetinfo.intelligence - 10) / 2)}</h6>
<h6 class="styled_h6_ins">${Math.floor((sheetinfo.wisdom - 10) / 2)}</h6>
<h6 class="styled_h6_int">${Math.floor((sheetinfo.charisma - 10) / 2)}</h6>
<h6 class="styled_h6_inv">${Math.floor((sheetinfo.intelligence - 10) / 2)}</h6>
<h6 class="styled_h6_med">${Math.floor((sheetinfo.wisdom - 10) / 2)}</h6>
<h6 class="styled_h6_nat">${Math.floor((sheetinfo.intelligence - 10) / 2)}</h6>
<h6 class="styled_h6_perc">${Math.floor((sheetinfo.wisdom - 10) / 2)}</h6>
<h6 class="styled_h6_perf">${Math.floor((sheetinfo.charisma - 10) / 2)}</h6>
<h6 class="styled_h6_pers">${Math.floor((sheetinfo.charisma - 10) / 2)}</h6>
<h6 class="styled_h6_rel">${Math.floor((sheetinfo.intelligence - 10) / 2)}</h6>
<h6 class="styled_h6_sle">${Math.floor((sheetinfo.dexterity - 10) / 2)}</h6>
<h6 class="styled_h6_ste">${Math.floor((sheetinfo.dexterity - 10) / 2)}</h6>
<h6 class="styled_h6_sur">${Math.floor((sheetinfo.wisdom - 10) / 2)}</h6>

<h3 class="Passive_Perception">${Math.floor((sheetinfo.wisdom - 10) / 2 + 10)}</h3>
<h3 class="Proficiency_Bonus">+2</h3>

<h6 class="Saving_Throws">+${Math.floor((sheetinfo.strength - 10) / 2)}</h6>
<h6 class="Saving_Throws">+${Math.floor((sheetinfo.dexterity - 10) / 2)}</h6>
<h6 class="Saving_Throws">+${Math.floor((sheetinfo.constitution - 10) / 2)}</h6>
<h6 class="Saving_Throws">+${Math.floor((sheetinfo.intelligence - 10) / 2)}</h6>
<h6 class="Saving_Throws">+${Math.floor((sheetinfo.wisdom - 10) / 2)}</h6>
<h6 class="Saving_Throws">+${Math.floor((sheetinfo.charisma - 10) / 2)}</h6>


<h2 class="Armorclass">11</h2>
<h2 class="initiative">13</h2>
<h2 class="Speed">30</h2>
<h6 class="Hit_Point_max">14</h6>
<h1 class="Current_Hit_Points">14</h1>
<h1 class="Hitdie">1D 12</h1>
</div>



</body>

</html>`;
};