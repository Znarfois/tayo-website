<template>
    <Project 

    :isKfk="true"
    logo='kfk/KFK_LOGO.png'
    title='Kids for Kids PH'
    header='kfk/KFK_COVER.png'
    image1='kfk/KFK_WHAT.png'
    image2='kfk/KFK_WHY.png'
    image3='kfk/KFK_VOL.png'
    volunteersCount="998"
    color='#375998'

    :who="[

    '<p>Kids for Kids was founded by Tasha and Bella Tanjutco back in 2015 as a fun way to give back to those in need. It began as a small group of friends that grew into a community of game-changers. Continuing the work started is Annika Rafer, the current Director of Kids for Kids.</p>'

    ]"

    :what="[
    
    '<p>Kids for Kids is a Youth Empowerment and Charity Organization that aims to inspire and educate a legacy of peacemakers, worldshapers, and changmakers. It is composed of volunteers and project teams that keep ensure the organization continues to catalyze positive perspectives and actions in our world.<p>'
        
    ]"

    :why="[
    '<p>We believe anyone can create change no matter how young, and no matter what passion. We want more young people to realize all that is needed are opportunities to discover ways you can utilize your passion to create change.</p>', 

    '<p><strong>We want to empower the youth<br>to empower the nation.</strong></p>']"

    :volunteer="[
    
    '<p>Kids for Kids gives opportunities to volunteers to use their passions in order to make the change they see in this world! We have different committees depending on our projects, which usually revolve around helping different communities in the Philippines through campaigns, outreaches and more! We also have opportunities for our volunteers to learn from one another through different workshops and bonding sessions too! Everyone is welcome!</p>'
    
    ]"/>

</template>

<script>
import Project from '../components/WWA_Project'
export default {
    components: {
        Project
    }
}

</script>

