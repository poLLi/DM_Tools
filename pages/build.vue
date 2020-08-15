<template>
    <b-container class="pt-8 mb-5">
        <b-row>
            <b-col sm="12">
                <b-alert show variant="danger" dismissible>
                    <strong>WARNING:</strong> This Tool is still <strong>WIP!</strong> Almost everything is subject to
                    change. <small>Current Verion: Pre-Alpha</small>
                </b-alert>
            </b-col>
            <b-col lg="4" class="no-select">
                <b-card class="shadow">
                    <b-card-title class="text-center bg-secondary p-2">
                        Occupation
                    </b-card-title>

                    <div class="occupationList">
                        <div v-for="occupation in occupations" :key="occupation.id">
                            <b-card :id="occupation.id" class="occupation" @click="changeOccupation(occupation)">
                                <b-card-title>
                                    {{ occupation.title }}
                                </b-card-title>

                                <b-tooltip
                                    :target="occupation.id"
                                    placement="right"
                                    boundary="viewport"
                                    noninteractive
                                    :delay="tooltip.delay"
                                >
                                    <p class="m-0 p-1">{{ occupation.description }}</p>
                                </b-tooltip>

                                <b-card-text>
                                    <p class="small text-secondary m-0 pb-2">Benefit: {{ occupation.benefit }}</p>
                                    <b-badge v-if="occupation.perkType == 'neutral'" class="float-right">
                                        Perk Points: {{ occupation.perkPoints }}
                                    </b-badge>
                                    <b-badge
                                        v-if="occupation.perkType == 'positive'"
                                        class="float-right"
                                        variant="success"
                                    >
                                        Perk Points: +{{ occupation.perkPoints }}
                                    </b-badge>
                                    <b-badge
                                        v-if="occupation.perkType == 'negative'"
                                        class="float-right"
                                        variant="danger"
                                    >
                                        Perk Points: -{{ occupation.perkPoints }}
                                    </b-badge>
                                </b-card-text>
                            </b-card>
                        </div>
                    </div>
                </b-card>
            </b-col>
            <b-col lg="4" class="no-select">
                <b-row class="mb-4">
                    <b-col>
                        <b-card class="shadow">
                            <b-card-title class="text-center bg-secondary p-2">
                                Character Data
                            </b-card-title>

                            <h3 class="section">Attributes</h3>
                            <span>Agility</span>
                            <b-progress
                                :value="character.attributes.agility"
                                max="10"
                                height="1.5rem"
                                show-value
                                class="mb-2 bg-dark attribute"
                            ></b-progress>
                            <span>Charisma</span>
                            <b-progress
                                :value="character.attributes.charisma"
                                max="10"
                                height="1.5rem"
                                show-value
                                class="mb-2 bg-dark attribute"
                            ></b-progress>
                            <span>Endurance</span>
                            <b-progress
                                :value="character.attributes.endurance"
                                max="10"
                                height="1.5rem"
                                show-value
                                class="mb-2 bg-dark attribute"
                            ></b-progress>
                            <span>Itelligence</span>
                            <b-progress
                                :value="character.attributes.intelligence"
                                max="10"
                                height="1.5rem"
                                show-value
                                class="mb-2 bg-dark attribute"
                            ></b-progress>
                            <span>Strength</span>
                            <b-progress
                                :value="character.attributes.strength"
                                max="10"
                                height="1.5rem"
                                show-value
                                class="mb-2 bg-dark attribute"
                            ></b-progress>

                            <hr />
                            <h3 class="section">Skills</h3>
                            <div class="d-flex justify-content-between">
                                <div class="flex-fill p-1">
                                    <span>Cooking</span>
                                    <b-progress
                                        :value="character.skills.cooking"
                                        max="100"
                                        height="1.5rem"
                                        show-value
                                        class="mb-2 bg-dark attribute"
                                    ></b-progress>
                                    <span>Farming</span>
                                    <b-progress
                                        :value="character.skills.farming"
                                        max="100"
                                        height="1.5rem"
                                        show-value
                                        class="mb-2 bg-dark attribute"
                                    ></b-progress>
                                    <span>Mechanic</span>
                                    <b-progress
                                        :value="character.skills.mechanic"
                                        max="100"
                                        height="1.5rem"
                                        show-value
                                        class="mb-2 bg-dark attribute"
                                    ></b-progress>
                                </div>
                                <div class="flex-fill p-1">
                                    <span>Crafting</span>
                                    <b-progress
                                        :value="character.skills.crafting"
                                        max="100"
                                        height="1.5rem"
                                        show-value
                                        class="mb-2 bg-dark attribute"
                                    ></b-progress>
                                    <span>Lockpicking</span>
                                    <b-progress
                                        :value="character.skills.lockpicking"
                                        max="100"
                                        height="1.5rem"
                                        show-value
                                        class="mb-2 bg-dark attribute"
                                    ></b-progress>
                                    <span>Medical</span>
                                    <b-progress
                                        :value="character.skills.medical"
                                        max="100"
                                        height="1.5rem"
                                        show-value
                                        class="mb-2 bg-dark attribute"
                                    ></b-progress>
                                </div>
                            </div>
                        </b-card>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-card class="shadow">
                            <b-card-title class="text-center bg-secondary p-2">
                                Perk Points: {{ perkPoints }}
                            </b-card-title>
                            <b-card-body>
                                <p>You need to have a balance of 0 or more perk points in order to finish the build.</p>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="4" class="no-select">
                <b-card class="shadow">
                    <b-card-title class="text-center bg-secondary p-2">
                        Perk Selection
                    </b-card-title>
                    <div class="perkList">
                        <div v-for="perk in perks" :key="perk.id">
                            <b-card
                                :id="perk.id"
                                class="perk mb-1"
                                body-class="pt-2 pb-2 pl-3 pr-3"
                                @click="togglePerk(perk)"
                            >
                                <b-tooltip
                                    :target="perk.id"
                                    placement="left"
                                    boundary="viewport"
                                    noninteractive
                                    :delay="tooltip.delay"
                                >
                                    <p class="m-0 p-1">{{ perk.description }}</p>
                                </b-tooltip>

                                <div class="d-flex justify-content-between">
                                    <div class="flex-grow-1 font-weight-bold">{{ perk.title }}</div>
                                    <div class="mr-3">
                                        <b-badge>{{ perk.type }}</b-badge>
                                    </div>
                                    <div>
                                        <b-badge v-if="perk.perkType == 'positive'" variant="success">
                                            Cost: +{{ perk.perkPoints }}
                                        </b-badge>
                                        <b-badge v-if="perk.perkType == 'negative'" variant="danger">
                                            Cost: -{{ perk.perkPoints }}
                                        </b-badge>
                                    </div>
                                </div>
                            </b-card>
                        </div>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            perkPoints: 10,
            acvtivOccupation: 'unemployed',
            activePerks: [],
            character: {
                attributes: {
                    agility: 4,
                    charisma: 4,
                    endurance: 4,
                    intelligence: 4,
                    strength: 4
                },
                skills: {
                    cooking: 10,
                    farming: 10,
                    mechanic: 10,
                    crafting: 10,
                    lockpicking: 10,
                    medical: 10
                }
            },
            occupations: [
                {
                    id: 'unemployed',
                    title: 'Unemployed',
                    description: 'You were a talented but quick learner that decided against pursuing employment.',
                    benefit: 'Spawn with the clothes on your back and a melee weapon.',
                    attributes: {
                        agility: 4,
                        charisma: 4,
                        endurance: 4,
                        intelligence: 4,
                        strength: 4
                    },
                    perkPoints: 8,
                    perkType: 'positive'
                },
                {
                    id: 'constructionWorker',
                    title: 'Constuction Worker',
                    description:
                        'You used to work on new housing projects all the time. This is the ideal choice if you like to build structures.',
                    benefit: 'Spawn with your work outfit and a melee weapon.',
                    attributes: {
                        agility: 4,
                        charisma: 4,
                        endurance: 4,
                        intelligence: 4,
                        strength: 4
                    },
                    perkPoints: 0,
                    perkType: 'neutral'
                },
                {
                    id: 'repairMan',
                    title: 'Repair Man',
                    description: 'You were once a repair man with a broad variety of skills.',
                    benefit: 'Spawn with casual attiere and a random melee weapon',
                    attributes: {
                        agility: 4,
                        charisma: 4,
                        endurance: 4,
                        intelligence: 4,
                        strength: 4
                    },
                    perkPoints: 0,
                    perkType: 'neutral'
                },
                {
                    id: 'farmer',
                    title: 'Farmer',
                    description:
                        'Making an honest living is never something to be ashamed of. Everybody still needs to eat.',
                    benefit: 'Spawn with some basic clothes and a small backpack with survival gear.',
                    attributes: {
                        agility: 4,
                        charisma: 4,
                        endurance: 4,
                        intelligence: 4,
                        strength: 4
                    },
                    perkPoints: 2,
                    perkType: 'positive'
                },
                {
                    id: 'chef',
                    title: 'Chef',
                    description:
                        'Your´ve always liked to spend time in the kitches, ever since you were a child. Now you need to use your cooking skills to survive.',
                    benefit: 'Spawn with your work outfit and a kitchen knife.',
                    attributes: {
                        agility: 4,
                        charisma: 4,
                        endurance: 4,
                        intelligence: 4,
                        strength: 4
                    },
                    perkPoints: 2,
                    perkType: 'positive'
                },
                {
                    id: 'doctor',
                    title: 'Doctor',
                    description:
                        'In theory the hippocratic oath still applies even after society has fallen apart. You once swore a duty to help those that are in need.',
                    benefit: 'Spawn with your work clothes, some medical supplies and a melee weapon.',
                    attributes: {
                        agility: 4,
                        charisma: 4,
                        endurance: 4,
                        intelligence: 4,
                        strength: 4
                    },
                    perkPoints: 4,
                    perkType: 'negative'
                },
                {
                    id: 'fireFighter',
                    title: 'Fire Fighter',
                    description:
                        'You were once a firefighter, bravely battling many of the fires that sprung up during the outbreake. You´re one of the few remaining survivors from the city.',
                    benefit: 'Spawn with your work outfit and a fireaxe',
                    attributes: {
                        agility: 6,
                        charisma: 7,
                        endurance: 6,
                        intelligence: 4,
                        strength: 7
                    },
                    perkPoints: 0,
                    perkType: 'neutral'
                },
                {
                    id: 'pliceOfficer',
                    title: 'Police Officer',
                    description: 'You were a police officer, once, enforcing the law. This is now a lawless world.',
                    benefit:
                        'Spawn with your work outfit complete with fleshlight and service pistol with a less then half empty magazine.',
                    attributes: {
                        agility: 6,
                        charisma: 7,
                        endurance: 6,
                        intelligence: 4,
                        strength: 7
                    },
                    perkPoints: 4,
                    perkType: 'negative'
                },
                {
                    id: 'securityGuard',
                    title: 'Security Guard',
                    description:
                        'You never really slept well at night, so you became a security guard at the mall. Might not be a bad thing once the power goes out for good.',
                    benefit: 'Spawn with your security outfit and a melee weapon.',
                    attributes: {
                        agility: 6,
                        charisma: 7,
                        endurance: 6,
                        intelligence: 4,
                        strength: 7
                    },
                    perkPoints: 2,
                    perkType: 'positive'
                }
            ],
            perks: [
                {
                    id: 'cpr',
                    title: 'CPR Training',
                    description: 'Gain the ability to bring people out of unconsciusness by performing CPR.',
                    type: 'Trait',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'negative'
                },
                {
                    id: 'astronomoer',
                    title: 'Astronomer',
                    description: 'Draws a compass on the screen at night when pressing the HUD promt key.',
                    type: 'Trait',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'negative'
                },
                {
                    id: 'observant',
                    title: 'Observant',
                    description: 'Perks are listed when looking at a player with the HUD promt active',
                    type: 'Trait',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 6,
                    perkType: 'negative'
                },
                {
                    id: 'herbalist',
                    title: 'Herbalist',
                    description: 'Allows you to easy identify poisonous berries and mushrooms.',
                    type: 'Trait',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'negative'
                },
                {
                    id: 'peanutAllergy',
                    title: 'Peanut Allergy',
                    description:
                        'Triggers a servere allergic reaction when consuming foods containing peanuts. (Spawn with on epi-pen).',
                    type: 'Trait',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 4,
                    perkType: 'positive'
                },
                {
                    id: 'paranoid',
                    title: 'Paranoid',
                    description: 'You will randomly hear gunshots that are not real.',
                    type: 'Trait',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 4,
                    perkType: 'positive'
                },
                {
                    id: 'universalReceiver',
                    title: 'Univeral Receiver',
                    description:
                        'Forces the blood type to AB+ which allows you to receive blood from anyone without triggering a hemolytic reaction.',
                    type: 'Trait',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 4,
                    perkType: 'positive'
                },
                {
                    id: 'unversalDonor',
                    title: 'Universal Donor',
                    description: 'Forces the blood type to O- which anyone can receive when in need of a transfusion.',
                    type: 'Trait',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 6,
                    perkType: 'positive'
                },
                {
                    id: 'jogger',
                    title: 'Jogger',
                    description: 'You used to enjoy running when it was just for fun. Gain +2 Agility',
                    type: 'Hobby',
                    effect: {
                        attribut: [
                            {
                                agility: 2,
                                type: 'positive'
                            }
                        ],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'negative'
                },
                {
                    id: 'nerd',
                    title: 'Nerd',
                    description: 'You used to play a lot of videogames in your spare time. Lose -2 Strength',
                    type: 'Hobby',
                    effect: {
                        attribut: [
                            {
                                strength: 2,
                                type: 'negative'
                            }
                        ],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'positive'
                },
                {
                    id: 'chessPlayer',
                    title: 'Chess Player',
                    description: 'You used to play competitive chess. Gain +2 Intelligence.',
                    type: 'Hobby',
                    effect: {
                        attribut: [
                            {
                                intelligence: 2,
                                type: 'positive'
                            }
                        ],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'negative'
                },
                {
                    id: 'partyBoy',
                    title: 'Party Boy',
                    description: 'You used to party... a lot. Lose -2 Intelligence.',
                    type: 'Hobby',
                    effect: {
                        attribut: [
                            {
                                intelligence: 2,
                                type: 'negative'
                            }
                        ],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'positive'
                },
                {
                    id: 'runner',
                    title: 'Runner',
                    description: 'You used to enjoy running marathons. Gain +300s sprint time and +1 Agility',
                    type: 'Hobby',
                    effect: {
                        attribut: [
                            {
                                agility: 1,
                                type: 'positive'
                            }
                        ],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'negative'
                },
                {
                    id: 'strengthTraining',
                    title: 'Strength Training',
                    description: 'Your life orients around lifting when you´re not at work. Gain +2 Strength.',
                    type: 'Hobby',
                    effect: {
                        attribut: [
                            {
                                strength: 2,
                                type: 'positive'
                            }
                        ],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'negative'
                },
                {
                    id: 'bartender',
                    title: 'Weekend Bartender',
                    description:
                        'You used to be a bartender on weekends, it  gave you an insight into human behavior. Gain +2 Chraisma.',
                    type: 'Hobby',
                    effect: {
                        attribut: [
                            {
                                charisma: 2,
                                type: 'positive'
                            }
                        ],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'negative'
                },
                {
                    id: 'wrestler',
                    title: 'Wrestler',
                    description:
                        'You used to be a wrestler when you were younger, it made you pretty hard to bring down. Gain +2 Endurance.',
                    type: 'Hobby',
                    effect: {
                        attribut: [
                            {
                                endurance: 2,
                                type: 'positive'
                            }
                        ],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'negative'
                },
                {
                    id: 'amateurCook',
                    title: 'Amateur Cook',
                    description:
                        'You like to cook fancy meals at home and aren´t afraid of getting behind the stove. Gain +25 bonus to Cooking.',
                    type: 'Skill',
                    effect: {
                        attribut: [],
                        skill: [
                            {
                                cooking: 25,
                                type: 'positive'
                            }
                        ]
                    },
                    perkPoints: 4,
                    perkType: 'negative'
                },
                {
                    id: 'awfulCook',
                    title: 'Awful Cook',
                    description: 'You´re terrible behind the stove. Reveive a -25 penalty to Cooking.',
                    type: 'Skill',
                    effect: {
                        attribut: [],
                        skill: [
                            {
                                cooking: 25,
                                type: 'negative'
                            }
                        ]
                    },
                    perkPoints: 4,
                    perkType: 'positive'
                },
                {
                    id: 'metalworker',
                    title: 'Metalworker',
                    description:
                        'You´ve tinkered around with metalworking and locksmithing. Gain a +25 bonus to Lockpicking.',
                    type: 'Skill',
                    effect: {
                        attribut: [],
                        skill: [
                            {
                                lockpicking: 25,
                                type: 'positive'
                            }
                        ]
                    },
                    perkPoints: 4,
                    perkType: 'negative'
                },
                {
                    id: 'greenThumb',
                    title: 'Green Thumb',
                    description: 'You enjoy gardening. Gain a +25 bonus to Farmin.',
                    type: 'Skill',
                    effect: {
                        attribut: [],
                        skill: [
                            {
                                farming: 25,
                                type: 'positive'
                            }
                        ]
                    },
                    perkPoints: 4,
                    perkType: 'negative'
                },
                {
                    id: 'hobbyist',
                    title: 'Hobbyist',
                    description:
                        'You enjoy model trains, playing with rockets and all sorts of different gadgets. Gain a +25 bonus to Crafting',
                    type: 'Skill',
                    effect: {
                        attribut: [],
                        skill: [
                            {
                                crafting: 25,
                                type: 'positive'
                            }
                        ]
                    },
                    perkPoints: 4,
                    perkType: 'negative'
                },
                {
                    id: 'gearhead',
                    title: 'Gearhead',
                    description: 'You sepend a lot of time restoring old cars. Gain a +25 bonus to Mechanic.',
                    type: 'Skill',
                    effect: {
                        attribut: [],
                        skill: [
                            {
                                mechanic: 25,
                                type: 'positive'
                            }
                        ]
                    },
                    perkPoints: 4,
                    perkType: 'negative'
                },
                {
                    id: 'volunteerFirefighter',
                    title: 'Volunteer Firefighter',
                    description: 'You were a volunteer firefighter when you were yunger. Gain a +25 bonus to Medical.',
                    type: 'Skill',
                    effect: {
                        attribut: [],
                        skill: [
                            {
                                medical: 25,
                                type: 'positive'
                            }
                        ]
                    },
                    perkPoints: 4,
                    perkType: 'negative'
                },
                {
                    id: 'bigBoned',
                    title: 'Big Boned',
                    description: 'Absulute unit. More limb health and +750ml max blood.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'negative'
                },
                {
                    id: 'osteoporosis',
                    title: 'Osteoporosis',
                    description: 'You take increased limb damage.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'positive'
                },
                {
                    id: 'brave',
                    title: 'Brave',
                    description: 'Less supression when taking fire.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'negative'
                },
                {
                    id: 'fearful',
                    title: 'Fearful',
                    description: 'Take more supression when taking fire.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'positive'
                },
                {
                    id: 'noFear',
                    title: 'No Fear',
                    description: 'You´ve seen it all. You do not fear death. -80% supression from taking fire.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 6,
                    perkType: 'negative'
                },
                {
                    id: 'frightful',
                    title: 'Frightful',
                    description: 'Additional +80% supression when being attacked.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 6,
                    perkType: 'positive'
                },
                {
                    id: 'fastMetabolism',
                    title: 'Fast Metabolism',
                    description: 'You metabolize food 50% faster.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'negative'
                },
                {
                    id: 'slowMetabolism',
                    title: 'Slow Metabolism',
                    description: 'You metabolize food 50% more slowly.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'positive'
                },
                {
                    id: 'ironStomach',
                    title: 'Iron Stomach',
                    description: 'Get sick less often when drinking and eating.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'negative'
                },
                {
                    id: 'weakStomach',
                    title: 'Weak Stomach',
                    description: 'Get sick more often when drinking and eating.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'positive'
                },
                {
                    id: 'silentSearch',
                    title: 'Silent Search',
                    description: 'Make 50% less noise when searching a container.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 4,
                    perkType: 'negative'
                },
                {
                    id: 'noisySearch',
                    title: 'Noisy Search',
                    description: 'Make 50% more noise when searching a container.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 4,
                    perkType: 'positive'
                },
                {
                    id: 'thickSkinned',
                    title: 'Thick Skinned',
                    description: 'Take 15% less damage from melee attacks.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'negative'
                },
                {
                    id: 'thinSkinned',
                    title: 'Thin Skinned',
                    description: 'Take 15% more damage from melee attacks.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'positive'
                },
                {
                    id: 'nimbleFingers',
                    title: 'Nimble Fingers',
                    description: 'Search containers 50% faster.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 4,
                    perkType: 'negative'
                },
                {
                    id: 'sausageFingers',
                    title: 'Sausage Fingers',
                    description: 'Search containers 50% more slowly.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 4,
                    perkType: 'positive'
                },
                {
                    id: 'heavyWeight',
                    title: 'Heavy Weight',
                    description: 'You get drunk far less easily.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'negative'
                },
                {
                    id: 'lightWeight',
                    title: 'Light Weight',
                    description:
                        'Impact of drinking too much alcohol is amplified. Lower threshold to start feeling the effects.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'positive'
                },
                {
                    id: 'lightStep',
                    title: 'Light Step',
                    description: 'Your footsteps are 30% quieter.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 4,
                    perkType: 'negative'
                },
                {
                    id: 'heavyStep',
                    title: 'Heavy Step',
                    description: 'Your footsteps are 30% louder.',
                    type: 'Stat',
                    effect: {
                        attribut: [],
                        skill: []
                    },
                    perkPoints: 2,
                    perkType: 'positive'
                }
            ],
            tooltip: {
                delay: {
                    show: 500,
                    hide: 10
                }
            }
        };
    },

    watch: {
        acvtivOccupation(newValue, oldValue) {
            if (oldValue !== '') {
                const card = document.querySelector('#' + oldValue);
                card.classList.remove('occupation-active');
            }

            const card = document.querySelector('#' + newValue);
            card.classList.add('occupation-active');
        },
        activePerks(newValue, oldValue) {
            oldValue.forEach((perk) => {
                const card = document.querySelector('#' + perk);
                card.classList.remove('perk-active');
            });

            newValue.forEach((perk) => {
                const card = document.querySelector('#' + perk);
                card.classList.add('perk-active');
            });
        }
    },

    mounted() {
        const card = document.querySelector('#' + this.acvtivOccupation);
        card.classList.add('occupation-active');
    },

    methods: {
        changeOccupation(target) {
            this.acvtivOccupation = target.id;
            this.calculatePoints();
            this.calculateAttributes();
        },

        togglePerk(target) {
            if (this.activePerks.includes(target.id)) {
                this.activePerks = this.activePerks.filter((e) => e !== target.id);
            } else {
                this.activePerks.push(target.id);
            }

            this.calculatePoints();
            this.calculateAttributes();
            this.calculateSkills();
        },

        calculatePoints() {
            // default Perkpoint value
            this.perkPoints = 10;

            // 1st - calc active occupation
            const occupation = this.occupations.filter((o) => o.id === this.acvtivOccupation);
            if (occupation[0].perkType === 'positive') {
                this.perkPoints += occupation[0].perkPoints;
            } else {
                this.perkPoints -= occupation[0].perkPoints;
            }

            // 2nd - calc active perks
            this.activePerks.forEach((perk) => {
                const obj = this.perks.filter((p) => p.id === perk);

                if (obj[0].perkType === 'positive') {
                    this.perkPoints += obj[0].perkPoints;
                } else {
                    this.perkPoints -= obj[0].perkPoints;
                }
            });
        },

        calculateAttributes() {
            // default Attribut Values
            const defaultAttributes = {
                agility: 4,
                charisma: 4,
                endurance: 4,
                intelligence: 4,
                strength: 4
            };
            this.character.attributes = defaultAttributes;

            // 1st - calc active occupation
            const occupation = this.occupations.filter((o) => o.id === this.acvtivOccupation);
            const newAttributes = {
                agility: occupation[0].attributes.agility,
                charisma: occupation[0].attributes.charisma,
                endurance: occupation[0].attributes.endurance,
                intelligence: occupation[0].attributes.intelligence,
                strength: occupation[0].attributes.strength
            };
            this.character.attributes = newAttributes;

            // 2nd - calc active perks
            this.activePerks.forEach((perk) => {
                const obj = this.perks.filter((p) => p.id === perk);

                if (obj[0].effect.attribut.length > 0) {
                    obj[0].effect.attribut.forEach((attr) => {
                        if (attr.type === 'positive') {
                            const key = Object.keys(attr);
                            this.character.attributes[key[0]] += attr[key[0]];
                            if (this.character.attributes[key[0]] < 0) this.character.attributes[key[0]] = 0;
                        } else {
                            const key = Object.keys(attr);
                            this.character.attributes[key[0]] -= attr[key[0]];
                            if (this.character.attributes[key[0]] < 0) this.character.attributes[key[0]] = 0;
                        }
                    });
                }
            });
        },

        calculateSkills() {
            // default Skills value
            const defaultSkills = {
                cooking: 10,
                farming: 10,
                mechanic: 10,
                crafting: 10,
                lockpicking: 10,
                medical: 10
            };
            this.character.skills = defaultSkills;

            // calc active perks
            this.activePerks.forEach((perk) => {
                const obj = this.perks.filter((p) => p.id === perk);

                if (obj[0].effect.skill.length > 0) {
                    obj[0].effect.skill.forEach((skill) => {
                        if (skill.type === 'positive') {
                            const key = Object.keys(skill);
                            this.character.skills[key[0]] += skill[key[0]];
                            if (this.character.skills[key[0]] < 0) this.character.skills[key[0]] = 0;
                        } else {
                            const key = Object.keys(skill);
                            this.character.skills[key[0]] -= skill[key[0]];
                            if (this.character.skills[key[0]] < 0) this.character.skills[key[0]] = 0;
                        }
                    });
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.no-select {
    user-select: none;
}
.attribute {
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.occupationList {
    max-height: 790px;
    overflow-y: scroll;
    padding-left: 6px;
    direction: rtl;

    &::-webkit-scrollbar-track {
        background-color: rgba(255, 255, 255, 0.1);
    }

    &::-webkit-scrollbar {
        width: 4px;
        background-color: rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar-thumb {
        background-color: #000;
    }

    .occupation {
        margin-bottom: 6px;
        border: 1px solid rgba(255, 255, 255, 0.1);

        &.occupation-active {
            background-color: rgba(0, 0, 0, 0.45);
        }
    }
}

.perkList {
    max-height: 790px;
    overflow-y: scroll;
    padding-right: 6px;

    &::-webkit-scrollbar-track {
        background-color: rgba(255, 255, 255, 0.1);
    }

    &::-webkit-scrollbar {
        width: 4px;
        background-color: rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar-thumb {
        background-color: #000;
    }

    .perk {
        margin-bottom: 6px;
        border: 1px solid rgba(255, 255, 255, 0.1);

        &.perk-active {
            background-color: rgba(0, 0, 0, 0.45);
        }
    }
}
</style>
