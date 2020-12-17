<template>
  <ProjectTemplate 

  :slideshow="[
   require('@/assets/img/template-projects/smart/smart_cover.png'),
   require('@/assets/img/template-projects/smart/smart_carousel_1.png'),
   require('@/assets/img/template-projects/smart/smart_carousel_2.png'),
   require('@/assets/img/template-projects/smart/smart_carousel_3.png'),
   require('@/assets/img/template-projects/smart/smart_carousel_4.jpg'),
   require('@/assets/img/template-projects/smart/smart_carousel_5.jpg'),
  ]"
  
  service="Brand Identity"

  title="Where Telco meets Child Protection"

  client="PLDT-SMART"

  statement="With the rise of Online Child Sexual Abuse & Exploitation, PLDT-SMART approached our team to endeavour a Better Today for Filipino Children."

  image1="smart/smart_1.png"
  image2="smart/smart_2.png"

  :began="['<p>Over the lockdown, it came to our attention that staying indoors for some meant being surrounded by unsafe environments. With this, we decided to launch “Kakampi Klub,” a campaign dedicated to promoting and raising funds for the unheard children affected by online sexual exploitation. Where, “Kakampi,” means teamplayer in Filipino, emphasizing how everyone needs to contribute in safeguarding our children and their future. We held multiple webinars and sessions with experts, lawmakers, and social workers,  to bring to light this issue amongst our community and supply families with food in order to combat OSAEC as a means of income for those affected. Together with PLDT-SMART we will be taking these efforts further together with the SaferKidsPH campaign.</p>']"

  :successful="['<p>With the issue being such a taboo in our society, we wanted to break the stigma and opted to approach this issue in a way that is digestible to attract the public in hopes of shedding more light on this prevalent problem. This was achieved through the use of bold and comprehensive publication materials that incorporated the use of bright colors and patterns introducing a  child-like layout of illustrations and bold patterns.</p>', '<p>Beyond this, we also partnered with Smart and a local farm-to-table Farm Fetch for the holidays by supporting a local community to create tote bags from upcycled flour sacks, spreading the purpose of sustainability throughout their clientele.</p>']"

  quote="“The ultimate test of a moral society is the kind of world that it leaves to its children.”"

  author="Dietrich Bonhoeffer"

  />
</template>

<script>
import ProjectTemplate from '../components/ProjectTemplate'
export default {
    components: {
        ProjectTemplate
    }
}
</script>

<style>

</style>