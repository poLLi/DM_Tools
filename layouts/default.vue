<template>
    <div>
        <app-header />
        <Nuxt />
        <app-footer />
    </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';

export default {
    components: {
        appHeader: Header,
        appFooter: Footer
    }
};
</script>
