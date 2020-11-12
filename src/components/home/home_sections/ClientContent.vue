<template>
    <ClientList title="TAYO Clients:" :images="clients"/>
    <ClientList title="Our Partners Prior to TAYO:" :images="partners"/>
</template>

<script>
import ClientList from './ClientList'

export default {
    name: "ClientContent",
    components: {
        ClientList,
    },
    data() {
        return {
            clients: ['D&G', 'Smart'],
            partners: [
                'Adspin', 
                'Avida', 
                'Ayala-Malls', 
                'Bayanihan-Para-Sa-Magsasaka',
                'BBPB',
                'Called-To-Rescue',
                'Eco-Explorations',
                'For-the-Future',
                'Kids-Who-Farm',
                'Lokal-Lab',
                'Marine-Wildlife-Watch-of-the Philippines',
                'MUNI-PH',
                'Museo-Pambata',
                'Oceana',
                'Reef-Check',
                'Taya-Pinas',
                'UN-SDSN-Youth',
                'UNICEF-Philippines',
                'Where-To-Next',
                'WWF']
        }
    }
}
</script>

<style>

</style>