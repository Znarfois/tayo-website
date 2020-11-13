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
        margin: auto;
        margin-bottom: 150px;
        max-width: 80%;
    }

    .mission-content {
        display: flex;
        justify-content: space-between;
    }

    .mission-statement {
        max-width: 450px;
        font-size: 32px;
        line-height: 48px;
    }

    .mission-statement__strong {
        color: #375998;
        font-weight: 700;
    }

    .mission-details {
        max-width: 568px;
    }

    @media (max-width: 320px) {
        #mission {
            max-width: 90%;
            margin-bottom: 0;
            margin: 70px auto;

        }

        .mission-content {
            display: block;
        }
        
        .mission-statement, .mission-details {
            font-size: 16px;
            line-height: 32px;
        }

        .mission-statement {
            margin-bottom: 20px;
            width: 240px;
        }
    }
    
</style>