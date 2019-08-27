


UPDATE ability_points
SET strength = ${strength}, dexterity = ${dexterity}, constitution = ${constitution}, wisdom = ${wisdom}, intelligence = ${intelligence}, charisma = ${charisma}
Where sheet_id = ${sheet_id};




UPDATE class_race 
set character_name = ${character_name}, race = ${race}, class = ${playerClass}, background = ${background}, playername = ${playername}, alignment = ${alignment}
Where sheet_id = ${sheet_id};




UPDATE dex_skills
set acrobatics = ${acrobatics}, sleight_of_hand = ${sleight_of_hand}, stealth = ${stealth}
Where sheet_id = ${sheet_id};




UPDATE str_skills
set athletics = ${athletics}
Where sheet_id = ${sheet_id};




UPDATE wis_skills
set animal_handling = ${animal_handling}, insight = ${insight}, medicine = ${medicine}, perception = ${perception}, survival = ${survival}
Where sheet_id = ${sheet_id};




UPDATE int_skills
set arcana = ${arcana}, history = ${history}, investigation = ${investigation}, nature = ${nature}, religion = ${religion}
where sheet_id = ${sheet_id};




UPDATE cha_skills
set deception = ${deception}, intimidation = ${intimidation}, performance = ${performance}, persuassion = ${persuassion}
where sheet_id = ${sheet_id};
