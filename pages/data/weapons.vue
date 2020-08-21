<template>
    <section class="full-height">
        <b-container>
            <div class="mb-5">
                <h2 class="title text-primary">{{ $t('DATA.CARD.DATABASE') }}: {{ $t('DATA.CATEGORY.WEAPONS') }}</h2>
                <p class="desc pl-4">{{ $t('DATA.CARD.DATABASE_DESCRIPTION_WEAPONS') }}</p>
            </div>

            <b-card v-for="item in items" :key="item.name" class="data-category mb-4">
                <div v-if="item.name === 'WEAPONS_RANGED'">
                    <h2 class="mb-4">
                        {{ $t('DATA.CATEGORY.TITLE') }}:
                        {{ $t('DATA.CATEGORY.' + item.name) }}
                    </h2>
                    <div v-for="data in item.data" :key="data.name">
                        <h4 class="mb-4 text-primary">
                            {{ $t('DATA.CATEGORY.' + data.name) }}
                        </h4>
                        <div class="data-list mb-4">
                            <div v-for="weapon in data.data" :key="weapon.id" class="data-item">
                                <div class="data-image">
                                    <img src="https://via.placeholder.com/250" alt="Placeholder Image" />
                                </div>
                                <div class="data-info">
                                    <div class="data-main">
                                        <div class="data-title-head font-weight-light mt-3">
                                            {{ $t('DATA.CARD.NAME') }}:
                                        </div>
                                        <p class="data-title-text text-primary font-weight-bold mb-2">
                                            {{ $t('DATA.WEAPON.' + weapon.name) }}
                                        </p>
                                        <div class="data-title-head font-weight-light">
                                            {{ $t('DATA.CARD.DESCRIPTION') }}:
                                        </div>
                                        <p class="text-muted small mb-2">
                                            {{ $t('DATA.WEAPON.' + weapon.description) }}
                                        </p>
                                        <div class="data-title-head font-weight-light mt-3">
                                            {{ $t('DATA.CATEGORY.TITLE') }}:
                                        </div>
                                        <b-badge v-for="category in weapon.category" :key="category" class="mb-3 mr-1">
                                            {{ $t('DATA.CATEGORY.' + category) }}
                                        </b-badge>
                                    </div>
                                    <div class="data-stat">
                                        <div class="data-stat-head font-weight-light mt-3">
                                            {{ $t('DATA.CARD.STATS') }}:
                                        </div>
                                        <p class="mb-3 p-0 font-weight-light">
                                            Ammo: <b-badge>{{ weapon.details.ammo }}</b-badge> <br />
                                            Size: <b-badge>{{ weapon.details.size }}</b-badge> <br />
                                            Weight: <b-badge>{{ weapon.details.weight }}</b-badge> <br />
                                            Rarity: <b-badge>{{ $t('DATA.RARITY.' + weapon.details.rarity) }}</b-badge>
                                            <br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="item.name !== 'WEAPONS_RANGED'">
                    <h2 class="mb-4">
                        {{ $t('DATA.CATEGORY.TITLE') }}:
                        {{ $t('DATA.CATEGORY.' + item.name) }}
                    </h2>
                    <div class="data-list">
                        <div v-for="weapon in item.data" :key="weapon.id" class="data-item">
                            <div class="data-image">
                                <img src="https://via.placeholder.com/250" alt="Placeholder Image" />
                            </div>
                            <div class="data-info">
                                <div class="data-main">
                                    <div class="data-title-head font-weight-light mt-3">
                                        {{ $t('DATA.CARD.NAME') }}:
                                    </div>
                                    <p class="data-title-text text-primary font-weight-bold mb-2">
                                        {{ $t('DATA.WEAPON.' + weapon.name) }}
                                    </p>
                                    <div class="data-title-head font-weight-light">
                                        {{ $t('DATA.CARD.DESCRIPTION') }}:
                                    </div>
                                    <p class="text-muted small mb-2">
                                        {{ $t('DATA.WEAPON.' + weapon.description) }}
                                    </p>
                                    <div class="data-title-head font-weight-light mt-3">
                                        {{ $t('DATA.CATEGORY.TITLE') }}:
                                    </div>
                                    <b-badge v-for="category in weapon.category" :key="category" class="mb-3 mr-1">
                                        {{ $t('DATA.CATEGORY.' + category) }}
                                    </b-badge>
                                </div>
                                <div class="data-stat">
                                    <div class="data-stat-head font-weight-light mt-3">
                                        {{ $t('DATA.CARD.STATS') }}:
                                    </div>
                                    <p class="mb-3 p-0 font-weight-light">
                                        Size: <b-badge>{{ weapon.details.size }}</b-badge> <br />
                                        Weight: <b-badge>{{ weapon.details.weight }}</b-badge> <br />
                                        Rarity: <b-badge>{{ $t('DATA.RARITY.' + weapon.details.rarity) }}</b-badge>
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </b-card>
        </b-container>
    </section>
</template>

<script>
import handguns from '~/assets/data/weapons/ranged/handguns.json';
import smg from '~/assets/data/weapons/ranged/smg.json';
import rifles from '~/assets/data/weapons/ranged/rifles.json';
import shotguns from '~/assets/data/weapons/ranged/shotguns.json';
import lmg from '~/assets/data/weapons/ranged/lmg.json';
import snipers from '~/assets/data/weapons/ranged/snipers.json';

import melee from '~/assets/data/weapons/melee.json';
import throwables from '~/assets/data/weapons/throwables.json';

export default {
    data() {
        return {
            items: [
                {
                    name: 'WEAPONS_RANGED',
                    data: [
                        { name: 'WEAPONS_RANGED_HANDGUN', data: handguns },
                        { name: 'WEAPONS_RANGED_SMG', data: smg },
                        { name: 'WEAPON_RANGED_RIFLE', data: rifles },
                        { name: 'WEAPON_RANGED_SHOTGUN', data: shotguns },
                        { name: 'WEAPON_RANGED_LMG', data: lmg },
                        { name: 'WEAPON_RANGED_SNIPER', data: snipers }
                    ]
                },
                { name: 'WEAPONS_MELEE', data: melee },
                { name: 'WEAPONS_TRHOWABLES', data: throwables }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.data-category {
    .data-list {
        list-style: none;
        padding: 0;

        .data-item {
            margin-bottom: 0.8rem;
            padding: 0;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 5px;

            display: grid;
            grid-template-columns: 150px 2fr 1fr;
            grid-template-rows: 1fr;

            .data-image {
                grid-column: 1/2;
                align-self: center;
                justify-self: center;

                img {
                    width: 120px;
                }
            }

            .data-info {
                display: grid;
                grid-column: 2/4;

                grid-template-columns: 3fr 1fr;
                grid-template-rows: 1fr 1fr;

                .data-main {
                    padding-left: 5px;

                    grid-row: 1/3;
                    grid-column: 1/2;

                    .data-title-text {
                        font-size: 1.2rem;
                    }
                }

                .data-stat {
                    align-self: center;
                    padding-right: 5px;

                    grid-row: 1/3;
                    grid-column: 2/3;
                }

                .data-title-head {
                    font-size: 0.8rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    width: 200px;
                }

                .data-stat-head {
                    font-size: 0.8rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    width: 200px;
                    // float: right;
                }
            }
        }
    }
}

@media (max-width: 992px) {
    .data-item {
        grid-template-rows: 1fr 1fr;
    }

    .data-image {
        padding-top: 6px !important;
        grid-row: 1/2 !important;
        grid-column: 1/4 !important;
    }

    .data-info {
        display: block !important;
        padding-bottom: 6px;
        grid-row: 2/3 !important;
        grid-column: 1/4 !important;
    }

    .data-main {
        padding: 5px 12px 0 12px !important;
        grid-row: 1/2 !important;
        grid-column: 1/3 !important;
    }

    .data-stat {
        padding: 5px 12px 0 12px !important;
        grid-row: 2/3 !important;
        grid-column: 1/3 !important;
    }

    .data-stat {
        text-align: left !important;
        padding: 5px 0 0 12px !important;
    }
}
</style>
