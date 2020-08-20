/* eslint-disable prettier/prettier */
export default {
    // ---------------------------
    // NAVIGATION
    MENU: {
        START: 'Başlat',
        BUILDER: 'Karakter Oluşturucu',
        MAP: 'Harita',
        MORE: 'Daha Fazla',
        MORE_DATABASE: '> Database',
        MORE_WEAPONS: 'Silahlar',
        MORE_ITEMS: 'Eşyalar',
        MORE_VEHICLES: 'Vehicles',
        MORE_FACTIONS: 'Factions',
        MORE_CREATURES: 'Creatures',
        MORE_EQUIPMENT: 'Equipment',
        CONTACT: 'İletişim',
        OPTIONS_LANG_TITLE: '> Dili Değiştir',
        OPTIONS_EXTRA_TITLE: '> Ekstralar',
        OPTIONS_CHANGELOG: 'Changelog'
    },

    // ---------------------------
    // PAGE: START
    START: {
        HEADLINE_TITLE: 'Topluluk Web Aracları ',
        HEADLINE_DESCRIPTION: 'Zombi Kıyametinde hayatta kalmak için ihtiyacınız olan her şey!'
    },

    // ---------------------------
    // PAGE: CHARACTER-BUILDER
    BUILDER: {
        CARD: {
            OCCUPATION_TITLE: 'Meslek',
            PERK_SELECTION_TITLE: 'Avantaj Seçimi',

            CHARACTER_DATA_TITLE: 'Karakter Verileri',
            CHARACTER_DATA_ATTRIBUTES_TITLE: 'Nitelikler',
            CHARACTER_DATA_ATTRIBUTES_AGILITY: 'Çeviklik',
            CHARACTER_DATA_ATTRIBUTES_CHARISMA: 'Karizma',
            CHARACTER_DATA_ATTRIBUTES_ENDURANCE: 'Dayanıklılık',
            CHARACTER_DATA_ATTRIBUTES_INTELLIGENCE: 'Zeka',
            CHARACTER_DATA_ATTRIBUTES_STRENGTH: 'Kuvvet',
            CHARACTER_DATA_SKILLS_TITLE: 'Yetenekler',
            CHARACTER_DATA_SKILLS_COOKING: 'Aşçılık',
            CHARACTER_DATA_SKILLS_FARMING: 'Çifçilik',
            CHARACTER_DATA_SKILLS_MECHANIC: 'Tamircilik',
            CHARACTER_DATA_SKILLS_CRAFTING: 'Üretim',
            CHARACTER_DATA_SKILLS_LOCKPICKING: 'Kilit Kırma',
            CHARACTER_DATA_SKILLS_MEDICAL: 'Tıbbi',

            PERK_POINTS_DESCRIPTION: 'Karakter tasarımınızı bitirmek için 0 veya daha fazla puana sahip olmalısınız.',
            PERK_POINTS_RESET_BUTTON: 'Sıfırla',
            PERK_POINTS_SAVE_BUTTON: 'Tasarımı Kaydet',
            PERK_POINTS_SAVE_TEXT: 'Karakter tasarımının URL\'si hazır.',
            PERK_POINTS_COPY_CLIPBOARD: 'Panoya kopyala',

            EXTENDED_STATS_BUTTON_OPEN: 'Genişletilmiş İstatistikleri Aç',
            EXTENDED_STATS_BUTTON_CLOSE: 'Genişletilmiş İstatistikleri Kapa',
            EXTENDED_STATS_BUTTON_WIP: '(Yapım Aşamasında)'
        },
        OCCUPATION: {
            UNEMPLOYED_TITLE: 'İşsiz',
            UNEMPLOYED_DESCRIPTION: 'Yetenekli, hızlı öğrenen biriydin ve iş peşinde koşan biriydin.',
            UNEMPLOYED_BENEFIT: 'Sırtınızdaki kıyafetlerle ve yakın dövüş silahıyla doğarsınız.',

            CONSTRUCTION_WORKER_TITLE: 'İnşaat İşçisi',
            CONSTRUCTION_WORKER_DESCRIPTION: 'Sürekli yeni konut projelerinde çalışırdın. Yapı inşa etmeyi seviyorsan bu ideal seçimdir.',
            CONSTRUCTION_WORKER_BENEFIT: 'İş kıyafetin ve yakın dövüş silahıyla doğ.',

            REPAIR_MAN_TITLE: 'Tamirci',
            REPAIR_MAN_DESCRIPTION: 'Bir zamanlar çok çeşitli becerilere sahip bir tamirciydin.',
            REPAIR_MAN_BENEFIT: 'Gündelik kıyafetler ve rastgele bir yakın dövüş silahı ile doğarsın',

            FARMER_TITLE: 'Çiftçi',
            FARMER_DESCRIPTION: 'Dürüst bir yaşam sağlamak asla utanılacak bir şey değildir. Hala herkesin yemeye ihtiyacı var.',
            FARMER_BENEFIT: 'Bazı temel kıyafetler ve hayatta kalma teçhizatı olan küçük bir sırt çantasıyla doğarsın.',

            CHEF_TITLE: 'Şef',
            CHEF_DESCRIPTION: 'Çocukluğundan beri mutfakta vakit geçirmeyi hep sevmişsindir. Şimdi hayatta kalmak için pişirme becerilerini kullanman gerekiyor.',
            CHEF_BENEFIT: 'İş kıyafeti ve bir mutfak bıçağıyla doğarsın.',

            DOCTOR_TITLE: 'Doktor',
            DOCTOR_DESCRIPTION: 'Teoride, hipokrat yemini, toplum dağıldıktan sonra bile geçerlidir. İhtiyacı olanlara yardım etmek için bir görev yemin etmiştin.',
            DOCTOR_BENEFIT: 'İş kıyafetlerinizle, bazı tıbbi malzemelerinizle ve bir yakın dövüş silahıyla doğarsın.',

            FIRE_FIGHTER_TITLE: 'İtfayeci',
            FIRE_FIGHTER_DESCRIPTION: 'Bir zamanlar bir itfaiyeciydin ve salgın sırasında çıkan yangınların çoğuyla cesurca savaştın. Şehirden kurtulan birkaç kişiden birisin.',
            FIRE_FIGHTER_BENEFIT: 'İş kıyafeti ve yangın baltasıyla doğarsın.',

            POLICE_OFFICER_TITLE: 'Polis Memuru',
            POLICE_OFFICER_DESCRIPTION: 'Bir zamanlar yasayı uygulayan bir polistin. Bu artık kanunsuz bir dünyadasın',
            POLICE_OFFICER_BENEFIT: 'El feneri ve beylik tabancanı tamamlayan iş kıyafeti ile yarısından daha az mermisi olan bir şarjörle doğunarsın.',

            SECURITY_GUARD_TITLE: 'Güvenlik Görevlisi',
            SECURITY_GUARD_DESCRIPTION: 'Geceleri hiç iyi uyumamışsın, bu yüzden alışveriş merkezinde güvenlik görevlisi oldun. Güç iyiye gittiğinde kötü bir şey olmayaz.',
            SECURITY_GUARD_BENEFIT: 'Güvenlik görevlisi üniformasıyla ve yakın dövüş silahıyla doğarsın.'
        },

        PERK: {
            CPR_TRAINING_TITLE: 'İlkyardım Eğitimi',
            CPR_TRAINING_DESCRIPTION: 'İlk yardım  uygulayarak insanları bilinçsizlikten çıkarma becerisi kazanın.',
            
            ASTRONOMER_TITLE: 'Astronom',
            ASTRONOMER_DESCRIPTION: 'HUD komut istemi tuşuna basıldığında gece ekranda bir pusula çizer.',
            
            OBSERVANT_TITLE: 'İtaatkâr',
            OBSERVANT_DESCRIPTION: 'HUD komut istemi aktif olan bir oyuncuya bakıldığında avantajlar listelenir.',
            
            HERBALIST_TITLE: 'Bitki Uzmanı',
            HERBALIST_DESCRIPTION: 'Zehirli meyveleri ve mantarları kolayca tanımlamanıza izin verir.',
            
            PEANUT_ALLERGY_TITLE: 'Yer Fıstığı Alerjisi',
            PEANUT_ALLERGY_DESCRIPTION: 'Yer fıstığı içeren yiyecekler tüketildiğinde şiddetli bir alerjik reaksiyonu tetikler. (Epinephrine ile doğar).',
            
            PARANOID_TITLE: 'Paranoyak',
            PARANOID_DESCRIPTION: 'Gerçek olmayan silah seslerini rastgele duyacaksınız.',
            
            UNIVERSAL_RECEIVER_TITLE: 'Genel Alıcı',
            UNIVERSAL_RECEIVER_DESCRIPTION: 'Kan grubunu, hemolitik reaksiyonu tetiklemeden herkesten kan almanıza izin veren AB + \'ya zorlar.',
            
            UNIVERSAL_DONOR_TITLE: 'Genel Verici',
            UNIVERSAL_DONOR_DESCRIPTION: 'Kan grubunu, kan nakline ihtiyaç duyduğunda herkesin alabileceği O- değerine zorlar.',
            
            JOGGER_TITLE: 'Yürüyüşçü',
            JOGGER_DESCRIPTION: 'Sadece eğlenmek için koşmaktan zevk alırdın. +2 çeviklik kazanırsın',
       
            NERD_TITLE: 'İnek',
            NERD_DESCRIPTION: 'Boş zamanlarında çok sayıda video oyunu oynardın. -2 güç kaybedersin.',
            
            CHESS_PLAYER_TITLE: 'Satranç Oyuncusu',
            CHESS_PLAYER_DESCRIPTION: 'Rekabetçi satranç oynardın. +2 zeka kazanırsın.',
            
            PARTY_BOY_TITLE: 'Parti Manyağı',
            PARTY_BOY_DESCRIPTION: 'Çok sık parti yapardın. -2 zeka kaybedersin.',
            
            RUNNER_TITLE: 'Koşucu',
            RUNNER_DESCRIPTION: 'Maraton koşmaktan zevk aldın. + 300s hızlı koşma süresi ve +1 çeviklik kazanırsın.',
            
            STRENGTH_TRAINING_TITLE: 'Kas Geliştirici',
            STRENGTH_TRAINING_DESCRIPTION: 'Hayat amacınız işte değilken ağırlık kaldırma üzerine odaklıdır.+2 güç kazanırsın.',
            
            WEEKEND_BARTENDER_TITLE: 'Haftasonu Barmeni',
            WEEKEND_BARTENDER_DESCRIPTION: 'Hafta sonları bir barmendin, bu sana insan davranışları hakkında bir fikir verdi. +2 karizma kazanırsın.',
            
            WRESTLER_TITLE: 'Güreşçi',
            WRESTLER_DESCRIPTION: 'Gençken bir güreşçiydin, bu senin aşağı indirilmeni oldukça zorlaştırdı. +2 dayanıklılık kazanın.',
            
            AMATEUR_COOK_TITLE: 'Amatör Aşçı',
            AMATEUR_COOK_DESCRIPTION: 'Evde güzel yemekler pişirmeyi seviyorsunuz ve ocağın başına geçmekten korkmuyorsunuz. Yemek pişirme yeteneğin 25 artar.',
            
            AWFUL_COOK_TITLE: 'Rezalet Aşçı',
            AWFUL_COOK_DESCRIPTION: 'Ocakta berbatsın. Yemek pişirme yeteneğin 25 azalır.',
            
            METALWORKER_TITLE: 'Metal İşleme',
            METALWORKER_DESCRIPTION: 'Metal işleme ve çilingirle uğraştınız. Kilit açma yeteneğin 25 artar.',
            
            GREEN_THUMB_TITLE: 'Çiçek Yetiştirme ',
            GREEN_THUMB_DESCRIPTION: 'Bahçeyle uğraşmaktan hoşlanıyorsun. Çiftçilik yeteneğin 25 artar.',
            
            HOBBYIST_TITLE: 'Hobici',
            HOBBYIST_DESCRIPTION: 'Model trenlerle, roketlerle ve her türden farklı aletlerle oynamaktan keyif alıyorsun. Üretme yeteneğin 25 artar.',
            
            GEARHEAD_TITLE: 'Araç Düşkünü',
            GEARHEAD_DESCRIPTION: 'Eski arabaları restore etmek için çok zaman harcıyorsun. Tamirci yeteneğin 25 artar.',
            
            VOLUNTEER_FIRE_FIGHTER_TITLE: 'Gönüllü İtfayeci',
            VOLUNTEER_FIRE_FIGHTER_DESCRIPTION: 'Gençken gönüllü bir itfaiyeciydin. Tıbbi yeteneğin 25 artar.',
            
            BIG_BONED_TITLE: 'Çam Yarması',
            BIG_BONED_DESCRIPTION: 'Çam yarması. Daha fazla uzuv canı ve +750 ml maksimum kan.',
            
            OSTEOPOROSIS_TITLE: 'Kemik Erimesi',
            OSTEOPOROSIS_DESCRIPTION: 'Arttırılmış uzuv hasarı alırsın.',
            
            BRAVE_TITLE: 'Cesur',
            BRAVE_DESCRIPTION: 'Ateş altındayken daha az telaşlanırsın.',
            
            FEARFUL_TITLE: 'Tırsak',
            FEARFUL_DESCRIPTION: 'Ateş altındayken daha fazla telaşlanırsın.',
            
            NO_FEAR_TITLE: 'Korkusuz',
            NO_FEAR_DESCRIPTION: 'Ateş altındayken 80% daha az baskı altında olursun.',
            
            FRIGHTFUL_TITLE: 'Korkak',
            FRIGHTFUL_DESCRIPTION: 'Ateş altındayken 80% daha fazla baskı altında olursun.',
            
            FAST_METABOLISM_TITLE: 'Hızlı Metabolizma',
            FAST_METABOLISM_DESCRIPTION: 'Yiyecekleri 50% daha hızlı sindirir.',
            
            SLOW_METABOLISM_TITLE: 'Yavaş Metabolizma',
            SLOW_METABOLISM_DESCRIPTION: 'Yiyecekleri 50% daha yavaş sindirir.',
            
            IRON_STOMACH_TITLE: 'Sağlam Mide',
            IRON_STOMACH_DESCRIPTION: 'İçerken ve yerken daha az hastalık kapmak',
            
            WEAK_STOMACH_TITLE: 'Hassas Mide',
            WEAK_STOMACH_DESCRIPTION: 'İçerken ve yerken daha fazla hastalık kapmak.',
            
            SILENT_SEARCH_TITLE: 'Sessiz Arama',
            SILENT_SEARCH_DESCRIPTION: 'Bir konteyner ararken %50 daha az gürültü yapmak.',
            
            NOISY_SEARCH_TITLE: 'Gürültülü Arama',
            NOISY_SEARCH_DESCRIPTION: 'Bir konteyner ararken %50 daha fazla gürültü yapmak.',
            
            THICK_SKINNED_TITLE: 'Kalın Derili',
            THICK_SKINNED_DESCRIPTION: 'Yakın dövüş saldırılarından %15 daha az hasar almak.',
            
            THIN_SKINNED_TITLE: 'İnce Derili',
            THIN_SKINNED_DESCRIPTION: 'Yakın dövüş saldırılarından %15 daha fazla hasar almak.',
            
            NIMBLE_FINGERS_TITLE: 'Çevik Parmaklar',
            NIMBLE_FINGERS_DESCRIPTION: 'Arama hızı 50% daha hızlı.',
            
            SAUSAGE_FINGERS_TITLE: 'Tombik Parmaklar',
            SAUSAGE_FINGERS_DESCRIPTION: 'Arama hızı 50% daha yavaş.',
            
            HEAVY_WEIGHT_TITLE: 'Alkole Dirençli',
            HEAVY_WEIGHT_DESCRIPTION: 'Çok daha az sarhoş olmak.',
            
            LIGHT_WEIGHT_TITLE: 'Alkole Dirençsiz',
            LIGHT_WEIGHT_DESCRIPTION: 'Çok fazla alkol içmenin etkisi arttırılmıştır. Etkilerin başladığı düşük alkol direnci.',
            
            LIGTH_STEP_TITLE: 'Sessiz Adım',
            LIGTH_STEP_DESCRIPTION: 'Ayak sesleri %30 daha sessiz.',
            
            HEAVY_STEP_TITLE: 'Gürültülü Adım',
            HEAVY_STEP_DESCRIPTION: 'Ayak sesleri %30 daha yüksek.'            
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
