<template>
    <v-row class="welcome">
        <v-col cols="12" md="4" class="imgs">
            <div class="line">
                <div class="img">
                    <img :src="blocks[0].img" alt="" />
                </div>
                <div class="img">
                    <img :src="blocks[1].img" alt="" />
                </div>
            </div>
            <div class="line">
                <div class="img">
                    <img :src="blocks[2].img" alt="" />
                </div>
                <div class="img">
                    <img :src="blocks[3].img" alt="" />
                </div>
            </div>
        </v-col>
        <v-col cols="12" md="8" class="body">
            <h3>Welcome to the site</h3>
            <p>
                Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure
                Duis autemvel eum iriure dolor. ipsum dolor sit amet,
                consectetuer Duis autem vel Lorem ipsum Lorem ipsum dolor sit
                amet, uer uer Duis autem vel eum iriure Duis autemvel eum iriure
                dolor. ipsum dolor sit amet, consectetuer Lorem ipsum dolor sit
                amet, uer uer Duis autem vel eum iriure Duis autemvel eum iriure
                dolor. ipsum dolor sit amet, consectetuer Duis autem vel Lorem
                ipsum Lorem ipsum dolor sit amet, uer uer Duis autem vel eum
                iriure Duis autemvel eum iriure dolor. ipsum dolor sit amet,
                consectetuer Lorem ipsum dolor sit amet, uer uer Duis autem vel
                eum iriure Duis autemvel eum iriure dolor. ipsum dolor sit amet,
                sectetuer.
            </p>
            <div class="btn">
                <button>more...</button>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    props: ["blocks"],
};
</script>

<style scoped>
.welcome {
    align-items: center;
}

.imgs {
    display: flex;
    flex-direction: column;
    height: 260px;
    justify-content: center;
}

.line {
    display: flex;
    flex-direction: row;
    height: 130px;
    overflow: hidden;
    position: relative;
}

.line:first-child {
    margin-bottom: 10px;
}

.img {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.img:first-child {
    margin-right: 10px;
}

img {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
}

h3 {
    font-size: 2rem;
    margin-bottom: 20px;
}

p {
    text-indent: 2rem;
}

.body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
