<template>
    <article id="mission">
        <h1 class="mission-header section-header">{{ missionHeader }}</h1>
        <div class="mission-content">
            <p class="mission-statement" v-html="missionStatement"></p>
            <p class="mission-details" v-html="missionDetails"></p>
        </div>
    </article>
</template>

<script>
export default {
    name: "HomeMission",
    data() {
        return {
            missionHeader: "TAYO: For and by our generation",
            missionDetails: "We collaborate to innovate brands to disrupt and change the world, through design and sustainable strategies. We integrate culture in innovating purpose, evolve with the times, and collaborate to innovate — all for the benefit of the people and the planet. <strong>Generations are evolving, and you should too. Innovate your brand for the futures to come.</strong>",
            missionStatement: "Our mission is to <span class='mission-statement__strong'>cultivate collaboration & innovation</span> amongst people."
        }
    }
}
</script>

<style>
    #mission {
        padding-bottom: 150px;
        max-width: 80%;
        margin: auto;
    }

    .mission-content {
        display: flex;
        justify-content: space-between;
    }

    .mission-statement {
        width: 450px;
        font-size: 32px;
        line-height: 48px;
    }

    .mission-statement__strong {
        color: #375998;
        font-weight: 700;
    }

    .mission-details {
        width: 568px;
    }
    
</style>