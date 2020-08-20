/* eslint-disable prettier/prettier */
export default {
    // ---------------------------
    // NAVIGATION
    MENU: {
        START: 'Start',
        BUILDER: 'Charakter-Builder',
        MAP: 'Karte',
        MORE: 'Mehr',
        MORE_DATABASE: '> Database',
        MORE_WEAPONS: 'Waffen',
        MORE_ITEMS: 'Gegenstände',
        MORE_VEHICLES: 'Fahrzeuge',
        MORE_FACTIONS: 'Fraktionen',
        MORE_CREATURES: 'Kreaturen',
        MORE_EQUIPMENT: 'Ausrüstung',
        CONTACT: 'Kontakt',
        OPTIONS_LANG_TITLE: '> Sprache ändern',
        OPTIONS_EXTRA_TITLE: '> Extras',
        OPTIONS_CHANGELOG: 'Changelog'
    },

    // ---------------------------
    // PAGE: START
    START: {
        HEADLINE_TITLE: 'Community Web Tools',
        HEADLINE_DESCRIPTION: 'Alles was du benötigst um die Zombie-Apokalypse zu überleben!'
    },

    // ---------------------------
    // PAGE: CHARACTER-BUILDER
    BUILDER: {
        CARD: {
            OCCUPATION_TITLE: 'Tätigkeit',
            PERK_SELECTION_TITLE: 'Perk Auswahl',

            CHARACTER_DATA_TITLE: 'Charakter Daten',
            CHARACTER_DATA_ATTRIBUTES_TITLE: 'Attribute',
            CHARACTER_DATA_ATTRIBUTES_AGILITY: 'Beweglichkeit',
            CHARACTER_DATA_ATTRIBUTES_CHARISMA: 'Charisma',
            CHARACTER_DATA_ATTRIBUTES_ENDURANCE: 'Ausdauer',
            CHARACTER_DATA_ATTRIBUTES_INTELLIGENCE: 'Intelligenz',
            CHARACTER_DATA_ATTRIBUTES_STRENGTH: 'Stärke',
            CHARACTER_DATA_SKILLS_TITLE: 'Skills',
            CHARACTER_DATA_SKILLS_COOKING: 'Kochen',
            CHARACTER_DATA_SKILLS_FARMING: 'Landwirtschaft',
            CHARACTER_DATA_SKILLS_MECHANIC: 'Mechanisch',
            CHARACTER_DATA_SKILLS_CRAFTING: 'Crafting',
            CHARACTER_DATA_SKILLS_LOCKPICKING: 'Schlösserknacken',
            CHARACTER_DATA_SKILLS_MEDICAL: 'Medizinisch',

            PERK_POINTS_DESCRIPTION: 'Sie müssen ein Wert von 0 oder mehr Perk Punkten haben um den Build fertig zu stellen.',
            PERK_POINTS_RESET_BUTTON: 'Zurücksetzten',
            PERK_POINTS_SAVE_BUTTON: 'Build Speichern',
            PERK_POINTS_SAVE_TEXT: 'Dein Charakter Build ist fertig.',
            PERK_POINTS_COPY_CLIPBOARD: 'In zwischenablage kopieren',

            EXTENDED_STATS_BUTTON_OPEN: 'Öffne Erweiterte Statistiken',
            EXTENDED_STATS_BUTTON_CLOSE: 'Schließe Erweiterte Statistiken',
            EXTENDED_STATS_BUTTON_WIP: '(Work in Progress)'
        },
        OCCUPATION: {
            UNEMPLOYED_TITLE: 'Arbeitslos',
            UNEMPLOYED_DESCRIPTION: 'Du warst ein Talentierter und schneller Lerner, der sich gegen eine Beschäftigung entschieden hat.',
            UNEMPLOYED_BENEFIT: 'Spawn mit der Kleidung in deinem Rucksack und einer Nahkampfwaffe.',

            CONSTRUCTION_WORKER_TITLE: 'Bauarbeiter',
            CONSTRUCTION_WORKER_DESCRIPTION: 'Du bist es gewohnt die ganze Zeit auf dem Bau zu arbeiten. Das ist die ideale Wahl, wenn du Strukturen bauen möchtest.',
            CONSTRUCTION_WORKER_BENEFIT: 'Spawn mit deinem Bauarbeiter Outfit ein einer Nahkampfwaffe.',

            REPAIR_MAN_TITLE: 'Handwerker',
            REPAIR_MAN_DESCRIPTION: 'Du warst einmal ein Handwerker mit einer Vielzahl von Fähigkeiten.',
            REPAIR_MAN_BENEFIT: 'Spawn mit Freizeitkleidung und einer zufälligen Nahkampfwaffe.',

            FARMER_TITLE: 'Landwirt',
            FARMER_DESCRIPTION: 'Einen ehrlichen Lebensunterhalt zu verdienen, ist niemals etwas, wofür man sich schämen muss. Jeder muss etwas zu essen haben.',
            FARMER_BENEFIT: 'Spawn mit ein paar einfachen Klamotten und einem Rucksack mit Überlebensausrüstung.',

            CHEF_TITLE: 'Koch',
            CHEF_DESCRIPTION: 'Du warst schon immer gern in der Küche, seit du ein Kind warst. Jetzt musst Du deine Kochkünste einsetzen um zu überleben.',
            CHEF_BENEFIT: 'Spawn mit deinem Koch Outfit und einem Küchenmesser.',

            DOCTOR_TITLE: 'Arzt',
            DOCTOR_DESCRIPTION: 'Theoretisch gilt der hippokratische Eid auch nach dem Zerfall der Gesellschaft noch. Du hast einmal geschworen, den Bedürftigen zu helfen.',
            DOCTOR_BENEFIT: 'Spawn mit deinem Arzt Outfit, einigen medizinischen Hilfsmitteln und einer Nahkampfwaffe.',

            FIRE_FIGHTER_TITLE: 'Feuerwehrmann',
            FIRE_FIGHTER_DESCRIPTION: 'Du warst einmal ein Feuerwehrmann und hast tapfer gegen viele der Feuer gekämpft, die während des Ausbruchs entfacht sind. Du bist einer der wenigen Überlebenden aus der Stadt.',
            FIRE_FIGHTER_BENEFIT: 'Spawn mit deinem Feuerwehr Outfit und einer Axt.',

            POLICE_OFFICER_TITLE: 'Polizist',
            POLICE_OFFICER_DESCRIPTION: 'Du warst einmal Polizist und hast das Gesetz durchgesetzt. Dies ist jetzt eine gesetzlose Welt.',
            POLICE_OFFICER_BENEFIT: 'Spawn mit deinem Polizei Outfit, einer Taschenlampe und einer Dienstwaffe mit weniger als einem halben Magazin.',

            SECURITY_GUARD_TITLE: 'Wachmann',
            SECURITY_GUARD_DESCRIPTION: 'Du hast nachts nie wirklich gut geschlafen, also bist du ein Wachmann im Einkaufszentrum geworden.',
            SECURITY_GUARD_BENEFIT: 'Spawn mit deinem Wachmann Outfit und einer Nahkampfwaffe.'
        },

        PERK: {
            CPR_TRAINING_TITLE: 'CPR Training',
            CPR_TRAINING_DESCRIPTION: 'Erhalten Sie die Fähigkeit CPR bei Bewusstlosen Menschen anzuwenden.',
            
            ASTRONOMER_TITLE: 'Astronom',
            ASTRONOMER_DESCRIPTION: 'Zeige nachts einen Kompass auf dem Bildschirm an, wenn die HUD-Taste gerückt wird.',
            
            OBSERVANT_TITLE: 'Aufmerksam',
            OBSERVANT_DESCRIPTION: 'Perks von anderen Spielern werden aufgelistet beim drücken der HUD-Taste',
            
            HERBALIST_TITLE: 'Kräuterkunde',
            HERBALIST_DESCRIPTION: 'Ermöglicht dir einfache giftige Beeren und Pilze zu Identifizieren.',
            
            PEANUT_ALLERGY_TITLE: 'Erdnussallergie',
            PEANUT_ALLERGY_DESCRIPTION: 'Löst beim Verzehr von erdnusshaltigen Lebensmitteln eine schwere allergische Reaktion aus. (Spawn mit einem Epi-Pen).',
            
            PARANOID_TITLE: 'Paranoid',
            PARANOID_DESCRIPTION: 'Du hörst zufällig Schüsse die nicht real sind.',
            
            UNIVERSAL_RECEIVER_TITLE: 'Universal Empfänger',
            UNIVERSAL_RECEIVER_DESCRIPTION: 'Setzt deine Blutgruppe auf AB+, wodurch Du blut von jedem anderen Typ erhalten kannst, ohne eine hämolytische Reaktion auszulösen.',
            
            UNIVERSAL_DONOR_TITLE: 'Universal Spender',
            UNIVERSAL_DONOR_DESCRIPTION: 'Setzt deine Blutgruppe auf 0-, wodurch Du jedem anderen Typ eine Transfusion geben kannst wenn er eine benötigt.',
            
            JOGGER_TITLE: 'Jogger',
            JOGGER_DESCRIPTION: 'Du hast es genossen zu laufen, wenn es nur zum Spaß war. Erhalte +2 Beweglichkeit.',
       
            NERD_TITLE: 'Nerd',
            NERD_DESCRIPTION: 'Du hast in deiner Freizeit viele Videospiele gespielt. Verliere -2 Stärke.',
            
            CHESS_PLAYER_TITLE: 'Schachspieler',
            CHESS_PLAYER_DESCRIPTION: 'Du hast früher gerne Schach gespielt. Erhalte +2 Intelligenz.',
            
            PARTY_BOY_TITLE: 'Party Boy',
            PARTY_BOY_DESCRIPTION: 'Du hast früher gefeiert ... viel gefeiert. Verliere -2 Intelligenz.',
            
            RUNNER_TITLE: 'Läufer',
            RUNNER_DESCRIPTION: 'Früher bist du gerne Marathons gelaufen. Erhalte + 300s extra Sprintzeit und +1 Beweglichkeit.',
            
            STRENGTH_TRAINING_TITLE: 'Krafttraining',
            STRENGTH_TRAINING_DESCRIPTION: 'Dein Leben orientiert sich an Gewichte-Heben, wenn du nicht bei der Arbeit bist. Erhalte +2 Stärke.',
            
            WEEKEND_BARTENDER_TITLE: 'Wochenend-Barkeeper',
            WEEKEND_BARTENDER_DESCRIPTION: 'Du hast gerne am Wochenende als Barkeeper gearbeitet, es gab dir einen Einblick in das menschliches Verhalten. Erhalte +2 Chraisma.',
            
            WRESTLER_TITLE: 'Ringer',
            WRESTLER_DESCRIPTION: 'Du warst ein Ringer, als du jünger warst, das hat es ziemlich schwer gemacht, dich zu Fall zu bringen. Erhalte +2 Ausdauer.',
            
            AMATEUR_COOK_TITLE: 'Hobbykoch',
            AMATEUR_COOK_DESCRIPTION: 'Du kochst gerne ausgefallene Mahlzeiten zu Hause und hast keine Angst hinter den Herd zu stehen. Erhalte +25 Kochen.',
            
            AWFUL_COOK_TITLE: 'Schrecklicher Koch',
            AWFUL_COOK_DESCRIPTION: 'Du bist schrecklich hinter dem Herd. Verliere -25 Kochen.',
            
            METALWORKER_TITLE: 'Schlosser',
            METALWORKER_DESCRIPTION: 'Du hast viel an Metallarbeiten und Schlosserarbeiten herumgebastelt. Erhalte +25 Lockpicking.',
            
            GREEN_THUMB_TITLE: 'Grüner Daumen',
            GREEN_THUMB_DESCRIPTION: 'Du genießst es Gartenarbeit zu machen. Erhalte +25 Landwirtschaft.',
            
            HOBBYIST_TITLE: 'Hobbyist',
            HOBBYIST_DESCRIPTION: 'Du genießst es mit Modelleisenbahnen, Raketen und verschiedensten Geräten zu spielen. Erhalte +25 Handwerk',
            
            GEARHEAD_TITLE: 'Getriebe',
            GEARHEAD_DESCRIPTION: 'Du hast viel Zeit damit verbracht alte Autos zu restaurieren. Erhalte +25 Mechaniker.',
            
            VOLUNTEER_FIRE_FIGHTER_TITLE: 'Freiwillige Feuerwehr',
            VOLUNTEER_FIRE_FIGHTER_DESCRIPTION: 'Du warst bei der freiwilligen Feuerwehr als Du jünger warst. Erhalten +25 Medical.',
            
            BIG_BONED_TITLE: 'Große Knochen',
            BIG_BONED_DESCRIPTION: 'Du Tier! Erhalte mehr Gesundheit für Gliedmaßen und + 750ml maximales Blut.',
            
            OSTEOPOROSIS_TITLE: 'Osteoporosis',
            OSTEOPOROSIS_DESCRIPTION: 'Du erleidest erhöhten Schaden an Gliedmaßen.',
            
            BRAVE_TITLE: 'Mutig',
            BRAVE_DESCRIPTION: 'Du wirst weniger unterdrückt bei beschuss.',
            
            FEARFUL_TITLE: 'Ängstlich',
            FEARFUL_DESCRIPTION: 'Du wirst mehr unterdrückt bei beschuss.',
            
            NO_FEAR_TITLE: 'Kein Angst',
            NO_FEAR_DESCRIPTION: 'Du hast schon alles gesehen und keine Angst mehr vor dem Tod. Werde 80% weniger unterdrückt bei beschuss.',
            
            FRIGHTFUL_TITLE: 'Schreckhaft',
            FRIGHTFUL_DESCRIPTION: 'Du wirst zusätzliche um 80% mehr unterdrückt bei beschuss.',
            
            FAST_METABOLISM_TITLE: 'Schneller Stoffwechsel',
            FAST_METABOLISM_DESCRIPTION: 'Du metabolisiert Substanzen 50% schneller.',
            
            SLOW_METABOLISM_TITLE: 'Langsamer Stoffwechsel',
            SLOW_METABOLISM_DESCRIPTION: 'Du metabolisiert Substanzen 50% langsamer.',
            
            IRON_STOMACH_TITLE: 'Eisener Magen',
            IRON_STOMACH_DESCRIPTION: 'Du wirst beim Essen und Tricken seltener krank.',
            
            WEAK_STOMACH_TITLE: 'Schwacher Magen',
            WEAK_STOMACH_DESCRIPTION: 'Du wirst beim Essen und Tricken öfter krank.',
            
            SILENT_SEARCH_TITLE: 'Stille Suche',
            SILENT_SEARCH_DESCRIPTION: 'Du machst beim durchsuchen eines Containers 50% weniger Lärm.',
            
            NOISY_SEARCH_TITLE: 'Laute Suche',
            NOISY_SEARCH_DESCRIPTION: 'Du machst beim durchsuchen eines Containers 50% mehr Lärm.',
            
            THICK_SKINNED_TITLE: 'Dickhäutig',
            THICK_SKINNED_DESCRIPTION: 'Du bekommst 15% weniger Schaden durch Nahkampfangriffe.',
            
            THIN_SKINNED_TITLE: 'Dünnhäutig',
            THIN_SKINNED_DESCRIPTION: 'Du bekommst 15% weniger Schaden durch Nahkampfangriffe.',
            
            NIMBLE_FINGERS_TITLE: 'Flinke Finger',
            NIMBLE_FINGERS_DESCRIPTION: 'Du durchsuchst Container 50% schneller.',
            
            SAUSAGE_FINGERS_TITLE: 'Fett Finger',
            SAUSAGE_FINGERS_DESCRIPTION: 'Du durchsuchst Container 50% langsamer.',
            
            HEAVY_WEIGHT_TITLE: 'Schwergewicht',
            HEAVY_WEIGHT_DESCRIPTION: 'Du wirst langsamer betrunken.',
            
            LIGHT_WEIGHT_TITLE: 'Fliegengewicht',
            LIGHT_WEIGHT_DESCRIPTION: 'Du wirst schneller betrunken.',
            
            LIGTH_STEP_TITLE: 'Leichte Füße',
            LIGTH_STEP_DESCRIPTION: 'Du machst 30% weniger geräuche beim bewegen.',
            
            HEAVY_STEP_TITLE: 'Schwere Füße',
            HEAVY_STEP_DESCRIPTION: 'Du machst 30% mehr geräuche beim bewegen.'            
        }
    },

    // ---------------------------
    // DATABASE
    DATA: {
        CARD: {
            NAME: 'Name',
            DESCRIPTION: 'Description',
            TAGS: 'Tags',
            STATS: 'Stats',
            DATABASE: 'Database',

            DATABASE_DESCRIPTION_ITEMS: 'Lists of every Item Dead Matter has to offer',
            DATABASE_DESCRIPTION_WEAPONS: 'Lists of every Weapons Dead Matter has to offer',
            DATABASE_DESCRIPTION_VEHICLES: 'Lists of every Vehicles Dead Matter has to offer',
            DATABASE_DESCRIPTION_FACTIONS: 'Lists of every Factions Dead Matter has to offer',
            DATABASE_DESCRIPTION_CREATURES: 'Lists of every Creatures Dead Matter has to offer',
            DATABASE_DESCRIPTION_EQUIPMENT: 'Lists of every Equipment Dead Matter has to offer'
        },

        RARITY: {
            RARE: 'Rare',
            UNCOMMON: 'Uncommon',
            COMMON: 'Common',
        },

        CATEGORY: {
            TITLE: 'Category',

            // ---------------------------
            WEAPON: 'Weapon',
            WEAPON_RANGED: 'Ranged Weapon',
            WEAPON_MEELE: 'Meele Weapon',
            WEAPON_THROWABLE: 'Throwable',
            ATTACHMENT: 'Attachment',
            WEAPONS: 'Weapons',
            WEAPONS_RANGED: 'Ranged Weapons',
            WEAPONS_MELEE: 'Melee Weapons',
            WEAPONS_TRHOWABLES: 'Throwables',
            WEAPONS_ATTACHMENTS: 'Attachments',

            // ---------------------------
            EQUIPMENT: 'Equipment',
            EQUIPMENT_GEAR: 'Gear',
            EQUIPMENT_CLOTHING: 'Clothing',
            EQUIPMENT_BACKPACK: 'Backpack',
            EQUIPMENT_LOWER_BODY: 'Lower Body',
            EQUIPMENT_UPPER_BODY: 'Upper Body',
            EQUIPMENT_VEST: 'Vest',
            EQUIPMENT_SHOE: 'Shoe',
            EQUIPMENT_HAT: 'Hat',
            EQUIPMENT_CLOTHINGS: 'Clothings',
            EQUIPMENT_BACKPACKS: 'Backpacks',
            EQUIPMENT_VESTS: 'Vests',
            EQUIPMENT_SHOES: 'Shoes',
            EQUIPMENT_HATS: 'Hats',

            // ---------------------------
            ITEM: 'Item',
            ITEM_CONSUMABLE: 'Consumable',
            ITEM_MATERIAL: 'Material',
            ITEM_CONTAINER: 'Container',
            ITEM_MEDICAL: 'Medical',
            ITEM_FOOD: 'Food',
            ITEM_DRINK: 'Drink',
            ITEM_MISC: 'Miscellaneous',
            ITEMS: 'Items',
            ITEMS_CONSUMABLES: 'Consumables',
            ITEMS_MATERIALS: 'Materials',
            ITEMS_MEDICALS: 'Medicals',
            ITEMS_CONTAINERS: 'Containers',

            // ---------------------------
            VEHICLE: 'Vehicle',
            VEHICLE_LAND: 'Land',
            VEHICLE_AIR: 'Air',
            VEHICLE_SEA: 'Sea',
            VEHICLES: 'Vehicles',
            VEHICLES_LAND: 'Land Vehicles',
            VEHICLES_AIR: 'Air Vehicles',
            VEHICLES_SEA: 'Sea Vehicles',

            // ---------------------------
            CREATURE: 'Creature',
            CREATURE_ZOMBIE: 'Zombie',
            CREATURE_ANIMAL: 'Animal',
            CREATURES: 'Creatures',
            CREATURES_ZOMBIES: 'Zombies',
            CREATURES_ANIMALS: 'Animals',

            // ---------------------------
            FACTION: 'Faction',
            FACTION_TRADER: 'Trader',
            FACTION_BANDIT: 'Bandit',
            FACTIONS: 'Factions',
            FACTIONS_TRADS: 'Traders',
            FACTIONS_BANDITS: 'Bandits',
        },

        ITEM: {
            CONSUMABLE: {
                SODA_BLACKTEA_NAME: 'Black Tea',
                SODA_BLACKTEA_DESCRIPTION: 'na',

                SODA_CAVITEA_NAME: 'Cavitea',
                SODA_CAVITEA_DESCRIPTION: 'na',

                SODA_CITREO_NAME: 'Citreo Soda',
                SODA_CITREO_DESCRIPTION: 'na',

                SODA_COLDACOLA_NAME: 'Colda Cola Soda',
                SODA_COLDACOLA_DESCRIPTION: 'na',

                SODA_CREAM_NAME: 'Pop! Soda',
                SODA_CREAM_DESCRIPTION: 'na',

                SODA_DOC_PREPPER_NAME: 'Doc Prepper Soda',
                SODA_DOC_PREPPER_DESCRIPTION: 'na',

                SODA_DOT_DEW_NAME: 'Gamer Juice Soda',
                SODA_DOT_DEW_DESCRIPTION: 'na',

                SODA_DR_LEPER_NAME: 'Dr Leper Soda',
                SODA_DR_LEPER_DESCRIPTION: 'na',

                SODA_NEUE_COLA_NAME: 'Neue-Cola Soda',
                SODA_NEUE_COLA_DESCRIPTION: 'na',

                SODA_SLUSH_NAME: 'Slush Soda',
                SODA_SLUSH_DESCRIPTION: 'na',

                SODA_SMITE_NAME: 'Citreo Soda',
                SODA_SMITE_DESCRIPTION: 'na',

                SODA_TEETH_POISON_NAME: 'Teeth Poison Soda',
                SODA_TEETH_POISON_DESCRIPTION: 'na',

                SODA_WATER_ROMANI_NAME: 'WOAH H20 Water',
                SODA_WATER_ROMANI_DESCRIPTION: 'na'
            },
            MATERIAL: {
                WOOD_PLANK_NAME: 'Wood Plank',
                WOOD_PLANK_DESCRIPTION: 'na'
            },
            MEDICAL: {
                BANDAGE_ROLL_NAME: 'Bandage Roll',
                BANDAGE_ROLL_DESCRIPTION: 'na',

                BLOOD_TYPE_TESTING_KIT_NAME: 'Blood Type Testing Kit',
                BLOOD_TYPE_TESTING_KIT_DESCRIPTION: 'na',

                EMERGENCY_HEATING_PAD_NAME: 'Emergency Heating Pad',
                EMERGENCY_HEATING_PAD_DESCRIPTION: 'na',

                EMERGENCY_TRAUMA_BANDAGE_NAME: 'Emergency Trauma Bandage',
                EMERGENCY_TRAUMA_BANDAGE_DESCRIPTION: 'na',

                EPINEPHRINE_AUTOINJECTOR_NAME: 'Epinephrine Autoinjector',
                EPINEPHRINE_AUTOINJECTOR_DESCRIPTION: 'na',

                MORPHINE_AUTOINJECTOR_NAME: 'Morphine Autoinjector',
                MORPHINE_AUTOINJECTOR_DESCRIPTION: 'na',

                FIRST_AID_KTI_NAME: 'First Aid Kit',
                FIRST_AID_KTI_DESCRIPTION: 'na'
            },
            CONTAINER: {
                AMMO_BOX_SMALL_NAME: 'Ammo Box (Small)',
                AMMO_BOX_SMALL_DESCRIPTION: 'na',

                AMMO_BOX_BIG_NAME: 'Ammo Box (Big)',
                AMMO_BOX_BIG_DESCRIPTION: 'na',

                GAS_CANISTER_NAME: 'Gas Canister',
                GAS_CANISTER_DESCRIPTION: 'na',

                PLASTIC_BUCKET_NAME: 'Plastic Bucket',
                PLASTIC_BUCKET_DESCRIPTION: 'na',

                PROPANE_GAS_BOTTLE_NAME: 'Propane Gas Bottle',
                PROPANE_GAS_BOTTLE_DESCRIPTION: 'na'
            },
            MISC: {
                BINOCULARS_NAME: 'Binoculars',
                BINOCULARS_DESCRIPTION: 'na',

                CAR_KEY_NAME: 'Car Key',
                CAR_KEY_DESCRIPTION: 'na',

                CHEST_MOUNTED_FLASHLIGHT_NAME: 'Chest Mounted Flashlight',
                CHEST_MOUNTED_FLASHLIGHT_DESCRIPTION: 'na',

                FLASHLIGHT_NAME: 'Flashlight',
                FLASHLIGHT_DESCRIPTION: 'na',

                DUCT_TAPE_NAME: 'Duct Tape',
                DUCT_TAPE_DESCRIPTION: 'na',

                GAS_LINE_NAME: 'Gas Line',
                GAS_LINE_DESCRIPTION: 'na',

                FOXNAV_400_NAME: 'Foxnav 400',
                FOXNAV_400_DESCRIPTION: 'na',

                GPS_NAVIGATOR_NAME: 'GPS Navigator',
                GPS_NAVIGATOR_DESCRIPTION: 'na',

                HEAD_MOUNTED_FLASHLIGHT_NAME: 'Head Mounted Flashlight',
                HEAD_MOUNTED_FLASHLIGHT_DESCRIPTION: 'na',

                KEYRING_NAME: 'Keyring',
                KEYRING_DESCRIPTION: 'na',

                LIGHTER_NAME: 'Lighter',
                LIGHTER_DESCRIPTION: 'na',

                RADIO_NAME: 'Radio',
                RADIO_DESCRIPTION: 'na',

                RADIO_R490_NAME: 'Radio R490',
                RADIO_R490_DESCRIPTION: 'na',

                RANGEMASTER_1000_NAME: 'Rangemaster 1000',
                RANGEMASTER_1000_DESCRIPTION: 'na',

                SPOTLIGHT_FLASHLIGHT_NAME: 'Spotlight Flashlight',
                SPOTLIGHT_FLASHLIGHT_DESCRIPTION: 'na',

                WEATHER_RECEIVER_NAME: 'Weather Receiver',
                WEATHER_RECEIVER_DESCRIPTION: 'na'
            }
        },

        EQUIPMENT: {
            UPPER_BODY: {
                HOODIE_NAME: 'Hoodie',
                HOODIE_DESCRIPTION: 'na',

                T_SHIRT_NAME: 'T-Shirt',
                T_SHIRT_DESCRIPTION: 'na',

                FF_TOP_NAME: 'F.F. Top',
                FF_TOP_DESCRIPTION: 'na'
            },
            LOWER_BODY: {
                FF_PANTS_NAME: 'F.F. Pants',
                FF_PANTS_DESCRIPTION: 'na',

                JEANS_NAME: 'Jeans',
                JEANS_DESCRIPTION: 'na',
            },
            VEST: {
                POLICE_VEST_NAME: 'Police Vest',
                POLICE_VEST_DESCRIPTION: 'na'
            },
            BACKPACK: {
                HIKING_BAG_NAME: 'Hiking Bag',
                HIKING_BAG_DESCRIPTION: 'na',

                SCHOOLBAG_NAME: 'Schoolbag',
                SCHOOLBAG_DESCRIPTION: 'na'
            },
            SHOE: {
                RC_BOOTS_NAME: 'RC Boots',
                RC_BOOTS_DESCRIPTION: 'na',
            },
            HAT: {
                BEANIE_NAME: 'Beanie',
                BEANIE_DESCRIPTION: 'na',

                BOONIE_NAME: 'Boonie',
                BOONIE_DESCRIPTION: 'na'
            }
        }
    }
};
