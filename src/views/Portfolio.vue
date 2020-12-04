<template>
    <main> 
        <form>
            <h1>Request For Portfolio</h1>
            <p>Full Name</p>
            <input type="text">
            <p>Email</p>
            <input type="email">
            <p>Phone</p>
            <input type="text">
            <p>Job/Position</p>
            <input type="email">
            <p>Company</p>
            <input type="text">
            <p>Reason for Request</p>
            <textarea></textarea>
            <button>Send Message</button>
        </form>
    </main>
</template>

<script>
export default {
}
</script>

<style scoped>
    main {
        padding: 80px 0 80px 10%;
    }

    form {
        width: 100vw;
    }

    p {
        font-size: 20px;
        line-height: 40px;
    }

    h1 {
        font-size: 32px;
        line-height: 48px;
        margin: 0 0 14px 0;
    }

    input, textarea{
        display: block;
        background: transparent;
        font-size: 14px;
        line-height: 1.2;
        padding: 10px;
        width: 46vw;
        border: 2px solid #d2d2d2;
        border-radius: 5px;
        margin: 0 0 20px 0;
        opacity: 0.5;
    }   

    textarea {
        height: 14%;
        margin-bottom: 20px
    }

    button {
        width: 208px;
        height: 64px;
        background-color: #EAA200;
        color: #FFFFFF;
    }

    /* textarea {
        rows: '4';
    } */
</style>