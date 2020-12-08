<template>
    <main> 
        <form>
            <h1>Request For Portfolio</h1>
            <div class="input-info">
            <p>Full Name</p>
            <input type="text" class="full-width">
            </div>
            <div class="input-grid">
                <div class="input-info">
                    <p>Email</p>
                    <input type="email">
                </div>
                <div class="input-info">
                    <p>Phone</p>
                    <input type="text">
                </div>
            </div>
            <div class="input-grid">
                <div class="input-info">
                    <p>Job/Position</p>
                    <input type="email">
                </div>
                <div class="input-info">
                    <p>Company</p>
                    <input type="text">
                </div>
            </div>
            <div class="input-info">
            <p>Reason for Request</p>
            <textarea class="full-width"></textarea>
            </div>
            <button>Send Message</button>
            <span>Expect a response within seven (7) working days.</span>
        </form>
    </main>
</template>

<script>
export default {
}
</script>

<style scoped>
    main {
        padding: 80px 10% 80px 10%;
    }

    form {
        width: 100%;
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
        display: inline-block;
        background: transparent;
        font-size: 14px;
        line-height: 1.2;
        padding: 10px;
        width: 100%;
        border: 2px solid #d2d2d2;
        border-radius: 5px;
        margin: 0 0 20px 0;
        opacity: 0.5;
    }   

    .input-grid {
        display: flex;
        flex-direction: row;
    }

    .input-grid .input-info {
        width: 100%;
    }

    .input-grid .input-info:first-child{
        padding: 0 32px 0 0;
    }

    /* p {
        width: 40%;
        display: inline-block;
    } */

    textarea {
        height: 168px;
        margin-bottom: 72px;
        width: 100%;
    }

    button {
        display: block;
        width: 208px;
        height: 64px;
        background-color: #EAA200;
        color: #FFFFFF;
    }

    form span {
        display: block;
        margin: 20px 0 0 0;
        font-size: 16px;
        line-height: 32px;
        color: #333333;
        opacity: 0.5;
    }

    .full-width {
        width: 100%;
    }

    /* textarea {
        rows: '4';
    } */

    @media screen and (max-width: 768px) {
        .input-grid {
            flex-direction: column;
        }

        .input-grid .input-info:first-child{
            padding: 0;
        }

        textarea {
            height: 168px;
            margin-bottom: 36px;
            width: 100%;
        }
    }
</style>