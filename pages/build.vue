<template>
    <b-container class="pt-10 mb-5">
        <b-row>
            <b-col sm="12">
                <h2 class="text-center">Character Buider</h2>
                <br />
                <b-alert show variant="danger" dismissible>
                    <strong>WARNING:</strong> This Tool is still heavy WIP! Almost everything is suject to changes.
                </b-alert>
                <br />
            </b-col>
            <b-col lg="4">
                <b-card class="shadow-sm">
                    <b-card-title class="text-center bg-primary p-2">
                        Occupation
                    </b-card-title>

                    <div v-for="occupation in occupations" :key="occupation.id">
                        <b-card :id="occupation.id" class="occupation" @click="changeOccupation(occupation.id)">
                            <b-card-title class="text-primary">
                                {{ occupation.title }}
                            </b-card-title>

                            <b-tooltip :target="occupation.id" placement="right" noninteractive :delay="tooltip.delay">
                                <p class="m-0 p-1">{{ occupation.description }}</p>
                            </b-tooltip>

                            <b-card-text>
                                <p class="small text-secondary m-0 pb-2">Benefit: {{ occupation.benefit }}</p>
                                <b-badge class="float-right">Perk Points: {{ occupation.perkPoints }}</b-badge>
                            </b-card-text>
                        </b-card>
                    </div>
                </b-card>
            </b-col>
            <b-col lg="4">
                <b-row class="mb-4">
                    <b-col>
                        <b-card class="shadow-sm">
                            <b-card-title class="text-center bg-primary p-2">
                                Character Data
                            </b-card-title>

                            <h3 class="section">Atributes</h3>
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
                                :value="character.attributes.itelligence"
                                max="10"
                                height="1.5rem"
                                show-value
                                class="mb-2 bg-dark attribute"
                            ></b-progress>
                            <span>Strength</span>
                            <b-progress
                                :value="character.attributes.strenght"
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
                        <b-card class="shadow-sm">
                            <b-card-title class="text-center bg-primary p-2">
                                Perk Points: {{ character.perkpoints }}
                            </b-card-title>
                            <b-card-body>
                                <p>You need to have a balance of 0 or more perk points in order to finish the build.</p>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
            <b-col lg="4">
                <b-card class="shadow-sm">
                    <b-card-title class="text-center bg-primary p-2">
                        Perk Selection
                    </b-card-title>
                    <b-card-body>
                        asdsadasdsadsa
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            character: {
                perkpoints: 10,
                attributes: {
                    agility: 4,
                    charisma: 4,
                    endurance: 4,
                    itelligence: 4,
                    strenght: 4
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
            acvtivOccupation: 'unemployed',
            occupations: [
                {
                    id: 'unemployed',
                    title: 'Unemployed',
                    description: 'You were a talented but quick learner that decided against pursuing employment.',
                    benefit: 'Spawn with the clothes on your back and a melee weapon.',
                    perkPoints: +8
                },
                {
                    id: 'constructionWorker',
                    title: 'Constuction Worker',
                    description:
                        'You used to work on new housing projects all the time. This is the ideal choice if you like to build structures.',
                    benefit: 'Spawn with your work outfit and a melee weapon.',
                    perkPoints: 0
                },
                {
                    id: 'repairMan',
                    title: 'Repair Man',
                    description: 'You were once a repair man with a broad variety of skills.',
                    benefit: 'Spawn with casual attiere and a random melee weapon',
                    perkPoints: 0
                },
                {
                    id: 'farmer',
                    title: 'Farmer',
                    description:
                        'Making an honest living is never something to be ashamed of. Everybody still needs to eat.',
                    benefit: 'Spawn with some basic clothes and a small backpack with survival gear.',
                    perkPoints: +2
                },
                {
                    id: 'chef',
                    title: 'Chef',
                    description:
                        'Your´ve always liked to spend time in the kitches, ever since you were a child. Now you need to use your cooking skills to survive.',
                    benefit: 'Spawn with your work outfit and a kitchen knife.',
                    perkPoints: +2
                },
                {
                    id: 'doctor',
                    title: 'Doctor',
                    description:
                        'In theory the hippocratic oath still applies even after society has fallen apart. You once swore a duty to help those that are in need.',
                    benefit: 'Spawn with your work clothes, some medical supplies and a melee weapon.',
                    perkPoints: -4
                },
                {
                    id: 'fireFighter',
                    title: 'Fire Fighter',
                    description:
                        'You were once a firefighter, bravely battling many of the fires that sprung up during the outbreake. You´re one of the few remaining survivors from the city.',
                    benefit: 'Spawn with your work outfit and a fireaxe',
                    perkPoints: 0
                },
                {
                    id: 'pliceOfficer',
                    title: 'Police Officer',
                    description: 'You were a police officer, once, enforcing the law. This is now a lawless world.',
                    benefit:
                        'Spawn with your work outfit complete with fleshlight and service pistol with a less then half empty magazine.',
                    perkPoints: -4
                },
                {
                    id: 'securityGuard',
                    title: 'Security Guard',
                    description:
                        'You never really slept well at night, so you became a security guard at the mall. Might not be a bad thing once the power goes out for good.',
                    benefit: 'Spawn with your security outfit and a melee weapon.',
                    perkPoints: +2
                }
            ],
            activePerks: [''],
            perk: [
                { id: 'cpr', Title: 'CPR Training', Type: 'Trait', Cost: -2 },
                { id: 'astronomoer', Title: 'Astronomer', Type: 'Trait', Cost: -2 },
                { id: 'observant', Title: 'Observant', Type: 'Trait', Cost: -6 },
                { id: 'herbalist', Title: 'Herbalist', Type: 'Trait', Cost: -2 }
            ],
            tooltip: {
                delay: {
                    show: 500,
                    hide: 10
                }
            }
        };
    },

    methods: {
        changeOccupation(target) {
            let card = document.querySelector('#' + this.acvtivOccupation);
            card.classList.remove('occupation-activ');

            this.acvtivOccupation = target;

            card = document.querySelector('#' + target);
            card.classList.add('occupation-activ');
        },

        changeAttributes(occupation) {
            console.log('shit');
        }
    }
};
</script>

<style lang="scss" scoped>
.attribute {
    border: 1px solid rgba(255, 255, 255, 0.1);
}
.occupation {
    margin-bottom: 6px;
    border: 1px solid rgba(255, 255, 255, 0.1);

    &.occupation-activ {
        background-color: rgba(0, 0, 0, 0.25);
    }
}

.card-occupation {
    max-height: 850px;
    overflow-y: scroll;
}
</style>
