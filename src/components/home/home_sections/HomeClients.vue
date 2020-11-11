<template>
<section id="clients">
    <div class="clients-sections">
        <h1 class="section-header clients-header">Our Clients</h1>
        <p class="body-2 clients-subheading">{{ subheading }}</p>
        <ClientContent />
    </div>
</section>
</template>

<script>
import ClientContent from './ClientContent'
export default { 
    name: "HomeClients",
    components: {
        ClientContent,
    },
    data() {
        return {
            subheading: "TAYO Sustainable Strategies & Creative Consultancy caters to different NGOs, companies, and startups that are looking to take the next big step in sustainability and creativity for positive change."
        }
    }
}
</script>

<style>
#clients {
    margin-bottom: 120px;
}

#clients .clients-sections {
    max-width: 80%;
    margin: auto;
}

#clients .clients-header {
    padding-bottom: 10px;
}

.clients-subheading {
    width: 510px;
    text-align: center;
    margin: auto;
    margin-bottom: 1rem;
}

</style>