/* eslint-disable prettier/prettier */
export default {
    // ---------------------------
    // NAVIGATION
    MENU: {
        START: 'Start',
        BUILDER: 'Character-Builder',
        MAP: 'Map',
        MORE: 'More',
        MORE_DATABASE: '> Database',
        MORE_WEAPONS: 'Weapons',
        MORE_ITEMS: 'Items',
        MORE_VEHICLES: 'Vehicles',
        MORE_FACTIONS: 'Factions',
        MORE_CREATURES: 'Creatures',
        MORE_EQUIPMENT: 'Equipment',
        CONTACT: 'Contact',
        OPTIONS_LANG_TITLE: '> Change Language',
        OPTIONS_EXTRA_TITLE: '> Extras',
        OPTIONS_CHANGELOG: 'Changelog'
    },

    // ---------------------------
    // PAGE: START
    START: {
        HEADLINE_TITLE: 'Community Web Tools',
        HEADLINE_DESCRIPTION: 'Everything you need to survive the Zombie-Apocalypse!'
    },

    // ---------------------------
    // PAGE: CHARACTER-BUILDER
    BUILDER: {
        CARD: {
            OCCUPATION_TITLE: 'Occupation',
            PERK_SELECTION_TITLE: 'Perk Selection',

            CHARACTER_DATA_TITLE: 'Character Data',
            CHARACTER_DATA_ATTRIBUTES_TITLE: 'Attributes',
            CHARACTER_DATA_ATTRIBUTES_AGILITY: 'Agility',
            CHARACTER_DATA_ATTRIBUTES_CHARISMA: 'Charisma',
            CHARACTER_DATA_ATTRIBUTES_ENDURANCE: 'Endurance',
            CHARACTER_DATA_ATTRIBUTES_INTELLIGENCE: 'Intelligence',
            CHARACTER_DATA_ATTRIBUTES_STRENGTH: 'Strength',
            CHARACTER_DATA_SKILLS_TITLE: 'Skills',
            CHARACTER_DATA_SKILLS_COOKING: 'Cooking',
            CHARACTER_DATA_SKILLS_FARMING: 'Farming',
            CHARACTER_DATA_SKILLS_MECHANIC: 'Mechanic',
            CHARACTER_DATA_SKILLS_CRAFTING: 'Crafting',
            CHARACTER_DATA_SKILLS_LOCKPICKING: 'Lockpicking',
            CHARACTER_DATA_SKILLS_MEDICAL: 'Medical',

            PERK_POINTS_DESCRIPTION: 'You need to have a balance of 0 or more perk points in order to finish the build.',
            PERK_POINTS_RESET_BUTTON: 'Reset',
            PERK_POINTS_SAVE_BUTTON: 'Save Build',
            PERK_POINTS_SAVE_TEXT: 'Your Character Build url is ready.',
            PERK_POINTS_COPY_CLIPBOARD: 'Copy to Clipboard',

            EXTENDED_STATS_BUTTON_OPEN: 'Open Extended Statistics',
            EXTENDED_STATS_BUTTON_CLOSE: 'Close Extended Statistics',
            EXTENDED_STATS_BUTTON_WIP: '(Work in Progress)'
        },
        OCCUPATION: {
            UNEMPLOYED_TITLE: 'Unemployed',
            UNEMPLOYED_DESCRIPTION: 'You were a talented but quick learner that decided against pursuing employment.',
            UNEMPLOYED_BENEFIT: 'Spawn with the clothes on your back and a melee weapon.',

            CONSTRUCTION_WORKER_TITLE: 'Construction Worker',
            CONSTRUCTION_WORKER_DESCRIPTION: 'You used to work on new housing projects all the time. This is the ideal choice if you like to build structures.',
            CONSTRUCTION_WORKER_BENEFIT: 'Spawn with your work outfit and a melee weapon.',

            REPAIR_MAN_TITLE: 'Repairman',
            REPAIR_MAN_DESCRIPTION: 'You were once a repair man with a broad variety of skills.',
            REPAIR_MAN_BENEFIT: 'Spawn with casual attire and a random melee weapon',

            FARMER_TITLE: 'Farmer',
            FARMER_DESCRIPTION: 'Making an honest living is never something to be ashamed of. Everybody still needs to eat.',
            FARMER_BENEFIT: 'Spawn with some basic clothes and a small backpack with survival gear.',

            CHEF_TITLE: 'Chef',
            CHEF_DESCRIPTION: 'Your´ve always liked to spend time in the kitchen, ever since you were a child. Now you need to use your cooking skills to survive.',
            CHEF_BENEFIT: 'Spawn with your work outfit and a kitchen knife.',

            DOCTOR_TITLE: 'Doctor',
            DOCTOR_DESCRIPTION: 'In theory the hippocratic oath still applies even after society has fallen apart. You once swore a duty to help those that are in need.',
            DOCTOR_BENEFIT: 'Spawn with your work clothes, some medical supplies and a melee weapon.',

            FIRE_FIGHTER_TITLE: 'Firefighter',
            FIRE_FIGHTER_DESCRIPTION: 'You were once a firefighter, bravely battling many of the fires that sprung up during the outbreak. You´re one of the few remaining survivors from the city.',
            FIRE_FIGHTER_BENEFIT: 'Spawn with your work outfit and a fireaxe',

            POLICE_OFFICER_TITLE: 'Police Officer',
            POLICE_OFFICER_DESCRIPTION: 'You were a police officer, once, enforcing the law. This is now a lawless world.',
            POLICE_OFFICER_BENEFIT: 'Spawn with your work outfit complete with flashlight and service pistol with a less then half empty magazine.',

            SECURITY_GUARD_TITLE: 'Security Guard',
            SECURITY_GUARD_DESCRIPTION: 'You never really slept well at night, so you became a security guard at the mall. Might not be a bad thing once the power goes out for good.',
            SECURITY_GUARD_BENEFIT: 'Spawn with your security outfit and a melee weapon.'
        },

        PERK: {
            CPR_TRAINING_TITLE: 'CPR Training',
            CPR_TRAINING_DESCRIPTION: 'Gain the ability to bring people out of unconciousness by performing CPR.',
            
            ASTRONOMER_TITLE: 'Astronomer',
            ASTRONOMER_DESCRIPTION: 'Draws a compass on the screen at night when pressing the HUD prompt key.',
            
            OBSERVANT_TITLE: 'Observant',
            OBSERVANT_DESCRIPTION: 'Perks are listed when looking at a player with the HUD prompt active',
            
            HERBALIST_TITLE: 'Herbalist',
            HERBALIST_DESCRIPTION: 'Allows you to easily identify poisonous berries and mushrooms.',
            
            PEANUT_ALLERGY_TITLE: 'Peanut Allergy',
            PEANUT_ALLERGY_DESCRIPTION: 'Triggers a severe allergic reaction when consuming foods containing peanuts. (Spawn with one epi-pen).',
            
            PARANOID_TITLE: 'Paranoid',
            PARANOID_DESCRIPTION: 'You will randomly hear gunshots that are not real.',
            
            UNIVERSAL_RECEIVER_TITLE: 'Universal Receiver',
            UNIVERSAL_RECEIVER_DESCRIPTION: 'Forces the blood type to AB+ which allows you to receive blood from anyone without triggering a hemolytic reaction.',
            
            UNIVERSAL_DONOR_TITLE: 'Universal Donor',
            UNIVERSAL_DONOR_DESCRIPTION: 'Forces the blood type to O- which anyone can receive when in need of a transfusion.',
            
            JOGGER_TITLE: 'Jogger',
            JOGGER_DESCRIPTION: 'You used to enjoy running when it was just for fun. Gain +2 Agility',
       
            NERD_TITLE: 'Nerd',
            NERD_DESCRIPTION: 'You used to play a lot of videogames in your spare time. Lose -2 Strength',
            
            CHESS_PLAYER_TITLE: 'Chess Player',
            CHESS_PLAYER_DESCRIPTION: 'You used to play competitive chess. Gain +2 Intelligence.',
            
            PARTY_BOY_TITLE: 'Party Boy',
            PARTY_BOY_DESCRIPTION: 'You used to party... a lot. Lose -2 Intelligence.',
            
            RUNNER_TITLE: 'Runner',
            RUNNER_DESCRIPTION: 'You used to enjoy running marathons. Gain +300s sprint time and +1 Agility',
            
            STRENGTH_TRAINING_TITLE: 'Strength Training',
            STRENGTH_TRAINING_DESCRIPTION: 'Your life orients around lifting when you´re not at work. Gain +2 Strength.',
            
            WEEKEND_BARTENDER_TITLE: 'Weekend Bartender',
            WEEKEND_BARTENDER_DESCRIPTION: 'You used to be a bartender on weekends, it  gave you an insight into human behavior. Gain +2 Chraisma.',
            
            WRESTLER_TITLE: 'Wrestler',
            WRESTLER_DESCRIPTION: 'You used to be a wrestler when you were younger, it made you pretty hard to bring down. Gain +2 Endurance.',
            
            AMATEUR_COOK_TITLE: 'Amateur Cook',
            AMATEUR_COOK_DESCRIPTION: 'You like to cook fancy meals at home and aren´t afraid of getting behind the stove. Gain +25 bonus to Cooking.',
            
            AWFUL_COOK_TITLE: 'Awful Cook',
            AWFUL_COOK_DESCRIPTION: 'You´re terrible behind the stove. Receive a -25 penalty to Cooking.',
            
            METALWORKER_TITLE: 'Metalworker',
            METALWORKER_DESCRIPTION: 'You´ve tinkered around with metalworking and locksmithing. Gain a +25 bonus to Lockpicking.',
            
            GREEN_THUMB_TITLE: 'Green Thumb',
            GREEN_THUMB_DESCRIPTION: 'You enjoy gardening. Gain a +25 bonus to Farming.',
            
            HOBBYIST_TITLE: 'Hobbyist',
            HOBBYIST_DESCRIPTION: 'You enjoy model trains, playing with rockets and all sorts of different gadgets. Gain a +25 bonus to Crafting',
            
            GEARHEAD_TITLE: 'Gearhead',
            GEARHEAD_DESCRIPTION: 'You spend a lot of time restoring old cars. Gain a +25 bonus to Mechanic.',
            
            VOLUNTEER_FIRE_FIGHTER_TITLE: 'Volunteer Firefighter',
            VOLUNTEER_FIRE_FIGHTER_DESCRIPTION: 'You were a volunteer firefighter when you were younger. Gain a +25 bonus to Medical.',
            
            BIG_BONED_TITLE: 'Big Boned',
            BIG_BONED_DESCRIPTION: 'Absulute unit. More limb health and +750ml max blood.',
            
            OSTEOPOROSIS_TITLE: 'Osteoporosis',
            OSTEOPOROSIS_DESCRIPTION: 'You take increased limb damage.',
            
            BRAVE_TITLE: 'Brave',
            BRAVE_DESCRIPTION: 'Less supression when taking fire.',
            
            FEARFUL_TITLE: 'Fearful',
            FEARFUL_DESCRIPTION: 'Take more supression when taking fire.',
            
            NO_FEAR_TITLE: 'No Fear',
            NO_FEAR_DESCRIPTION: 'You´ve seen it all. You do not fear death. -80% supression from taking fire.',
            
            FRIGHTFUL_TITLE: 'Frightful',
            FRIGHTFUL_DESCRIPTION: 'Additional +80% supression when being attacked.',
            
            FAST_METABOLISM_TITLE: 'Fast Metabolism',
            FAST_METABOLISM_DESCRIPTION: 'You metabolize food 50% faster.',
            
            SLOW_METABOLISM_TITLE: 'Slow Metabolism',
            SLOW_METABOLISM_DESCRIPTION: 'You metabolize food 50% more slowly.',
            
            IRON_STOMACH_TITLE: 'Iron Stomach',
            IRON_STOMACH_DESCRIPTION: 'Get sick less often when drinking and eating.',
            
            WEAK_STOMACH_TITLE: 'Weak Stomach',
            WEAK_STOMACH_DESCRIPTION: 'Get sick more often when drinking and eating.',
            
            SILENT_SEARCH_TITLE: 'Silent Search',
            SILENT_SEARCH_DESCRIPTION: 'Make 50% less noise when searching a container.',
            
            NOISY_SEARCH_TITLE: 'Noisy Search',
            NOISY_SEARCH_DESCRIPTION: 'Make 50% more noise when searching a container.',
            
            THICK_SKINNED_TITLE: 'Thick Skinned',
            THICK_SKINNED_DESCRIPTION: 'Take 15% less damage from melee attacks.',
            
            THIN_SKINNED_TITLE: 'Thin Skinned',
            THIN_SKINNED_DESCRIPTION: 'Take 15% more damage from melee attacks.',
            
            NIMBLE_FINGERS_TITLE: 'Nimble Fingers',
            NIMBLE_FINGERS_DESCRIPTION: 'Search containers 50% faster.',
            
            SAUSAGE_FINGERS_TITLE: 'Sausage Fingers',
            SAUSAGE_FINGERS_DESCRIPTION: 'Search containers 50% more slowly.',
            
            HEAVY_WEIGHT_TITLE: 'Heavy Weight',
            HEAVY_WEIGHT_DESCRIPTION: 'You get drunk far less easily.',
            
            LIGHT_WEIGHT_TITLE: 'Light Weight',
            LIGHT_WEIGHT_DESCRIPTION: 'Impact of drinking too much alcohol is amplified. Lower threshold to start feeling the effects.',
            
            LIGTH_STEP_TITLE: 'Light Step',
            LIGTH_STEP_DESCRIPTION: 'Your footsteps are 30% quieter.',
            
            HEAVY_STEP_TITLE: 'Heavy Step',
            HEAVY_STEP_DESCRIPTION: 'Your footsteps are 30% louder.'            
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
            WEAPON_RANGED_HANDGUN: 'Handgun',
            WEAPON_RANGED_SMG: 'Submachine Gun',
            WEAPON_RANGED_RIFLE: 'Rifle',
            WEAPON_RANGED_SHOTGUN: 'Shotgun',
            WEAPON_RANGED_LMG: 'Light Machine Gun',
            WEAPON_RANGED_SNIPER: 'Snper Rifle',
            WEAPON_MEELE: 'Meele Weapon',
            WEAPON_THROWABLE: 'Throwable',
            ATTACHMENT: 'Attachment',
            WEAPONS: 'Weapons',
            WEAPONS_RANGED: 'Ranged Weapons',
            WEAPONS_RANGED_HANDGUN: 'Handguns',
            WEAPONS_RANGED_SMG: 'Submachine Guns',
            WEAPONS_RANGED_RIFLES: 'Rifles',
            WEAPONS_RANGED_SHOTGUNS: 'Shotguns',
            WEAPONS_RANGED_LMG: 'Light Machine Guns',
            WEAPONS_RANGED_SNIPER: 'Snper Rifles',
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
            EQUIPMENT_GLOVE: 'Glove',
            EQUIPMENT_CLOTHINGS: 'Clothings',
            EQUIPMENT_BACKPACKS: 'Backpacks',
            EQUIPMENT_VESTS: 'Vests',
            EQUIPMENT_SHOES: 'Shoes',
            EQUIPMENT_HATS: 'Hats',
            EQUIPMENT_GLOVES: 'Gloves',

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
                SODA_WATER_ROMANI_DESCRIPTION: 'na',

                SALTINE_CRACKER_NAME: 'Saltine Cracker',
                SALTINE_CRACKER_DESCRIPTION: 'A box of plain old saltine crackers.',

                HIGH_PROTEIN_OATMEAL_NAME: 'High Protein Oatmeal',
                HIGH_PROTEIN_OATMEAL_DESCRIPTION: 'A box of Colony Jack´s high protein oatmeal.',

                PAPAS_SPAGHETTIS_NAME: 'Papa Spaghetti´s Real Bad Spaghetti',
                PAPAS_SPAGHETTIS_DESCRIPTION: 'A can of Papa´s spaghetti. Im gonna feed you some real bad...',

                CANNED_MUSHROOMS_NAME: 'Canned Mushrooms',
                CANNED_MUSHROOMS_DESCRIPTION: 'A can of mushrooms. They are a but slimy.',

                BOTTLE_OF_KETCHUP_NAME: 'Bottle of Ketchup',
                BOTTLE_OF_KETCHUP_DESCRIPTION: 'A big bottle of tomato ketchup.'
            },
            MATERIAL: {
                WOOD_PLANK_NAME: 'Wooden Plank',
                WOOD_PLANK_DESCRIPTION: 'A solid wooden plank. can be used for base fortifications or crafting a basic splint.',

                BOX_OF_NAILS_NAME: 'Box of Nails',
                BOX_OF_NAILS_DESCRIPTION: 'None of them appear to be nine inches. Unpack this  box to use the nails  for crafting or base fortifications.',

                NAIL_NAME: 'Nail',
                NAIL_DESCRIPTION: 'An once inch Nail. Can be used for crafting and base fortifications.'
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
                FIRST_AID_KTI_DESCRIPTION: 'na',

                EMERGENCY_BANDAGE_NAME: 'Emergency Bandage',
                EMERGENCY_BANDAGE_DESCRIPTION: 'Apply to dress wounds and stop bleeding.'
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
                WEATHER_RECEIVER_DESCRIPTION: 'na',

                BROKEN_PHONE_NAME: 'Broken Phone',
                BROKEN_PHONE_DESCRIPTION: 'A Broken Phone. Who knows what used to be on there.',

                WATCH_NAME: 'Watch',
                WATCH_DESCRIPTION: 'Tells you the time. At least, it used to.',

                CREDIT_CARD_NAME: 'Credit Card',
                CREDIT_CARD_DESCRIPTION: 'An old credit card.',

                LOCKPICK_NAME: 'Lockpick',
                LOCKPICK_DESCRIPTION: 'A simple lockpick. Can be used to break into locked containers or doors.',

                STICKY_NOTES_NAME: 'Sticky Notes',
                STICKY_NOTES_DESCRIPTION: 'A fresh pad of sticky notes.',

                PENCIL_NAME: 'Pencil',
                PENCIL_DESCRIPTION: 'A Pencil.',

                CLAW_HAMMER_NAME: 'Claw Hammer',
                CLAW_HAMMER_DESCRIPTION: 'A regular hammer. Might be useful for crafting and base foritification.',

                LEAVES_NAME: 'Leaves',
                LEAVES_DESCRIPTION: 'na',

                STICK_NAME: 'Stick',
                STICK_DESCRIPTION: 'Sticks and Stones my break your bones. Can be used for creathing and base fortifications.'
            }
        },

        WEAPON: {
            RANGED: {
                HANDGUN: {
                    E_92_NAME: 'E-92',
                    E_92_DESCRIPTION: 'na',

                    MAKAROV_PM_NAME: 'Makarov PM',
                    MAKAROV_PM_DESCRIPTION: 'na',

                    EDER_17_NAME: 'Eder-17',
                    EDER_17_DESCRIPTION: 'The trusty sidearm of police forces around the globe, the Eder boasts reliability, accuracy, and of course, lots of rounds per magazine.'
                },

                SMG: {
                    TEST_WEAPON_NAME: 'asdasd',
                    TEST_WEAPON_DESCRIPTION: 'asd'
                },

                RIFLE: {
                    TEST_WEAPON_NAME: 'asdasd',
                    TEST_WEAPON_DESCRIPTION: 'asd'
                },

                SHOTGUN: {
                    TEST_WEAPON_NAME: 'asdasd',
                    TEST_WEAPON_DESCRIPTION: 'asd'
                },

                LMG: {
                    TEST_WEAPON_NAME: 'asdasd',
                    TEST_WEAPON_DESCRIPTION: 'asd'
                },

                SNIPER: {
                    TEST_WEAPON_NAME: 'asdasd',
                    TEST_WEAPON_DESCRIPTION: 'asd'
                },
            },

            MELEE: {
                TEST_WEAPON_NAME: 'asdasd',
                TEST_WEAPON_DESCRIPTION: 'asd'
            },

            THROWABLE: {
                TEST_WEAPON_NAME: 'asdasd',
                TEST_WEAPON_DESCRIPTION: 'asd'
            }
        },

        EQUIPMENT: {
            UPPER_BODY: {
                HOODIE_NAME: 'Hoodie',
                HOODIE_DESCRIPTION: 'na',

                T_SHIRT_NAME: 'T-Shirt',
                T_SHIRT_DESCRIPTION: 'na',

                FF_TOP_NAME: 'F.F. Top',
                FF_TOP_DESCRIPTION: 'na',

                DOCTOR_JACKET_NAME: 'Doctor Jacket',
                DOCTOR_JACKET_DESCRIPTION: 'na'
            },

            LOWER_BODY: {
                FF_PANTS_NAME: 'F.F. Pants',
                FF_PANTS_DESCRIPTION: 'na',

                JEANS_NAME: 'Jeans',
                JEANS_DESCRIPTION: 'na',

                PANTS_NAME: 'Pants',
                PANTS_DESCRIPTION: 'na',

                DOCTOR_PANTS_NAME: 'Doctor Pants',
                DOCTOR_PANTS_DESCRIPTION: 'na'
            },

            VEST: {
                POLICE_VEST_NAME: 'Police Vest',
                POLICE_VEST_DESCRIPTION: 'na'
            },

            BACKPACK: {
                HIKING_BAG_NAME: 'Hiking Bag',
                HIKING_BAG_DESCRIPTION: 'na',

                SCHOOLBAG_NAME: 'Schoolbag',
                SCHOOLBAG_DESCRIPTION: 'na',

                BLUE_SCHOOLBAG_NAME: 'Blue Schoolbag',
                BLUE_SCHOOLBAG_DESCRIPTION: 'na'
            },

            SHOE: {
                RC_BOOTS_NAME: 'RC Boots',
                RC_BOOTS_DESCRIPTION: 'na',

                DOCTOR_SHOE_NAME: 'Doctor Shoes',
                DOCTOR_DESCRIPTION: 'na'
            },

            HAT: {
                BEANIE_NAME: 'Beanie',
                BEANIE_DESCRIPTION: 'na',

                BOONIE_NAME: 'Boonie',
                BOONIE_DESCRIPTION: 'na',

                POLICE_NAME: 'Police Hat',
                POLICE_DESCRIPTION: 'PUT YOUR HANDS UP!'
            },

            GLOVE: {
                THICK_GLOVES_NAME: 'Thick Gloves',
                THICK_GLOVES_DESCRIPTION: 'na',

                OPERATOR_GLOVES_NAME: 'Operator Gloves',
                OPERATOR_GLOVES_DESCRIPTION: 'na',

                LEATHER_GLOVES_NAME: 'Leather Gloves',
                LEATHER_GLOVES_DESCRIPTION: 'na'
            }
        },

        VEHICLE: {
            LAND: {
                AMBULANCE_NAME: 'Ambulance',
                AMBULANCE_DESCRIPTION: 'na',

                CHEVROLET_CHEVY_VAN_CLASSIC_NAME: 'Chevrolet Chevy Van Classic',
                CHEVROLET_CHEVY_VAN_CLASSIC_DESCRIPTION: 'na',

                CHEVROLET_CHEVELLE_NAME: 'Chevrolet Chevelle',
                CHEVROLET_CHEVELLE_DESCRIPTION: 'na',

                DUNE_BUGGY_NAME: 'Dune Buggy',
                DUNE_BUGGY_DESCRIPTION: 'na',

                FIRE_TRUCK_NAME: 'Fire Truck',
                FIRE_TRUCK_DESCRIPTION: 'na',

                FORD_CROWN_VICTORIA_NAME: 'Ford Crown Victoria',
                FORD_CROWN_VICTORIA_DESCRIPTION: 'na',

                FORD_F150_NAME: 'Ford F-150',
                FORD_F150_DESCRIPTION: 'na',

                FORD_F650_NAME: 'Ford F-650',
                FORD_F650_DESCRIPTION: 'na',

                FORD_TAURUS_NAME: 'Ford Taurus',
                FORD_TAURUS_DESCRIPTION: 'na',

                FORD_TAURUS_POLICE_NAME: 'Ford Taurus (Police)',
                FORD_TAURUS_POLICE_DESCRIPTION: 'na',

                GO_KART_NAME: 'Go-Kart',
                GO_KART_DESCRIPTION: 'na',

                LAWN_MOWER_NAME: 'Lawn Mower',
                LAWN_MOWER_DESCRIPTION: 'na',

                MAIL_TRUCK_NAME: 'Mail Truck',
                MAIL_TRUCK_DESCRIPTION: 'na',

                OLDSMOBILE_TORONADO_NAME: 'Oldsmobile Toronado',
                OLDSMOBILE_TORONADO_DESCRIPTION: 'na',

                ORLANA_SUV_NAME: 'Orlana SUV',
                ORLANA_SUV_DESCRIPTION: 'na',

                BROADCAST_VAN_NAME: 'Broadcast Van',
                BROADCAST_VAN_DESCRIPTION: 'na',

                QUAD_BIKE_NAME: 'Quad Bike',
                QUAD_BIKE_DESCRIPTION: 'na',

                SCHOOL_BUS_NAME: 'School Bus',
                SCHOOL_BUS_DESCRIPTION: 'na',

                SEDAN_NAME: 'Sedan',
                SEDAN_DESCRIPTION: 'na',

                TRAILER_TRUCK_NAME: 'Trailer Truck',
                TRAILER_TRUCK_DESCRIPTION: 'na',

                WATER_TRUCK_NAME: 'Water Truck',
                WATER_TRUCK_DESCRIPTION: 'na',

                BACKHOE_LOADER_NAME: 'Backhoe Loader',
                BACKHOE_LOADER_DESCRIPTION: 'na',

                BACKHOE_LOADER_INDUSTRIAL_NAME: 'Backhoe Loader (Industrial)',
                BACKHOE_LOADER_INDUSTRIAL_DESCRIPTION: 'na',

                DIRT_BIKE_NAME: 'Dirt Bike',
                DIRT_BIKE_DESCRIPTION: 'na',

                MOTORCYCLE_NAME: 'Motorcycle',
                MOTORCYCLE_DESCRIPTION: 'na',

                BICYCLE_NAME: 'Dirt Bike',
                BICYCLE_DESCRIPTION: 'na'
            },

            AIR: {
                HELICOPTER_CIV_NAME: 'Helicopter (Civilian)',
                HELICOPTER_CIV_DESCRIPTION: 'na',

                SIKORSKY_UH_60_NAME: 'Sikorsky UH-60 Black Hawk',
                SIKORSKY_UH_60_DESCRIPTION: 'na',

                CROP_DUSTER_NAME: 'Crop Duster Plane',
                CROP_DUSTER_DESCRIPTION: 'na'
            },

            SEA: {
                MOTORBOAT_NAME: 'Motorboat',
                MOTORBOAT_DESCRIPTION: 'na'
            }
        }
    }
};
