<template>
    <v-col cols="12" md="6" lg="3" class="block">
        <div>
            <div class="img"><img :src="data.img" alt="" /></div>
            <div class="body">{{ data.body }}</div>
            <div class="btn">
                <button>more...</button>
            </div>
        </div>
    </v-col>
</template>

<script>
export default {
    props: ["data"],
};
</script>

<style scoped>
.img {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-bottom: 10px;
}

img {
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
}

.body {
    text-indent: 3rem;
}

.block {
    display: flex;
    justify-content: center;
}

.block:first-child {
    justify-content: flex-start;
    padding-left: 0;
}

.block:last-child {
    justify-content: flex-end;
    padding-right: 0;
}

.block > div {
    background: #fff;
    padding: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.7);
}

@media screen and (max-width: 1280px) {
    .block:nth-child(2n-1) {
        justify-content: flex-start;
        padding-left: 0;
    }

    .block:nth-child(2n) {
        justify-content: flex-end;
        padding-right: 0;
    }
}

@media screen and (max-width: 960px) {
    div.block:nth-child(n) {
        padding: 10px;
    }
}
</style>
