<template>
    <div>
        <app-header />
        <Nuxt />
    </div>
</template>

<script>
import Header from '../components/Header';

export default {
    components: {
        appHeader: Header
    }
};
</script>
