<template>
    <section class="full-height">
        <b-container>
            <div class="mb-5">
                <h2 class="title text-primary">{{ $t('DATA.CARD.DATABASE') }}: {{ $t('DATA.CATEGORY.EQUIPMENT') }}</h2>
                <p class="desc pl-4">{{ $t('DATA.CARD.DATABASE_DESCRIPTION_EQUIPMENT') }}</p>
            </div>

            <b-card v-for="item in items" :key="item.name" class="data-category mb-4">
                <h2 class="mb-4">
                    {{ $t('DATA.CATEGORY.TITLE') }}:
                    {{ $t('DATA.CATEGORY.' + item.name) }}
                </h2>
                <div class="data-list">
                    <div v-for="data in item.data" :key="data.id" class="data-item">
                        <div class="data-image">
                            <img src="https://via.placeholder.com/250" alt="Placeholder Image" />
                        </div>
                        <div class="data-info">
                            <div class="data-main">
                                <div class="data-title-head font-weight-light mt-3">{{ $t('DATA.CARD.NAME') }}:</div>
                                <p class="data-title-text text-primary font-weight-bold mb-2">
                                    {{ $t('DATA.EQUIPMENT.' + data.name) }}
                                </p>
                                <div class="data-title-head font-weight-light">{{ $t('DATA.CARD.DESCRIPTION') }}:</div>
                                <p class="text-muted small mb-2">
                                    {{ $t('DATA.EQUIPMENT.' + data.description) }}
                                </p>
                                <div class="data-title-head font-weight-light mt-3">
                                    {{ $t('DATA.CATEGORY.TITLE') }}:
                                </div>
                                <b-badge v-for="category in data.category" :key="category" class="mb-3 mr-1">
                                    {{ $t('DATA.CATEGORY.' + category) }}
                                </b-badge>
                            </div>
                            <div class="data-stat">
                                <div class="data-stat-head font-weight-light mt-3">{{ $t('DATA.CARD.STATS') }}:</div>
                                <p class="mb-3 p-0 font-weight-light">
                                    Size: <b-badge>{{ data.details.size }}</b-badge> <br />
                                    Weight: <b-badge>{{ data.details.weight }}</b-badge> <br />
                                    Rarity: <b-badge>{{ $t('DATA.RARITY.' + data.details.rarity) }}</b-badge>
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </b-card>
        </b-container>
    </section>
</template>

<script>
import upperBody from '~/assets/data/equipment/upper_body.json';
import lowerBody from '~/assets/data/equipment/lower_body.json';
import vests from '~/assets/data/equipment/vests.json';
import shoes from '~/assets/data/equipment/shoes.json';
import hats from '~/assets/data/equipment/hats.json';
import gloves from '~/assets/data/equipment/gloves.json';
import backpacks from '~/assets/data/equipment/backpacks.json';

export default {
    data() {
        return {
            items: [
                { name: 'EQUIPMENT_UPPER_BODY', data: upperBody },
                { name: 'EQUIPMENT_LOWER_BODY', data: lowerBody },
                { name: 'EQUIPMENT_VESTS', data: vests },
                { name: 'EQUIPMENT_BACKPACKS', data: backpacks },
                { name: 'EQUIPMENT_SHOES', data: shoes },
                { name: 'EQUIPMENT_HATS', data: hats },
                { name: 'EQUIPMENT_GLOVES', data: gloves }
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
