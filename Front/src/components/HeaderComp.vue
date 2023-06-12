<template>
    <v-row class="header">
        <v-col class="navs common" cols="7">
            <a href="#">Home</a>
            <a href="#">Portfolio</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
        </v-col>
        <v-col class="search common" cols="5">
            <label>
                <input type="text" placeholder="search" />
                <img :src="require('@/assets/search.svg')" alt="" />
            </label>
        </v-col>
        <v-col class="mobile-btn" cols="3" @click="toggle">{{ menu }}</v-col>
        <v-col class="mobile-menu" v-if="active">
            <div class="bg" @click="toggle"></div>
            <div class="nav">
                <a href="#">Home</a>
                <a href="#">Portfolio</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <label>
                    <input type="text" placeholder="search" />
                    <img :src="require('@/assets/search.svg')" alt="" />
                </label>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        active: false,
        menu: "Menu",
    }),
    methods: {
        toggle() {
            this.active = !this.active;
            if (this.active) this.menu = "Close";
            else this.menu = "Menu";
        },
    },
};
</script>

<style scoped>
a {
    color: #5b5b5b;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
}

.navs {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.search {
    display: flex;
    justify-content: flex-end;
}

label {
    background: #fafafa;
    border: 1px solid #a8a8a8;
    display: flex;
    align-items: center;
}

img {
    padding: 4px;
    cursor: pointer;
}

input {
    outline: none;
    height: 100%;
    padding: 4px;
}

.header {
    align-items: center;
    position: relative;
}

.mobile-btn {
    display: none;
}

.mobile-btn {
    justify-content: flex-end;
    padding: 10px;
}

.mobile-menu {
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: flex-end;
}

.mobile-menu.navs {
    height: auto !important;
}

.bg {
    background: #000;
    opacity: 0.7;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.mobile-menu .navs {
    flex-direction: column;
}

.nav {
    background: #fff;
    max-width: 50vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.nav > * {
    margin: 10px;
}

@media screen and (max-width: 960px) {
    .navs.common,
    .search.common {
        display: none;
    }
    .header {
        justify-content: flex-end;
    }
    .mobile-btn {
        display: flex;
    }
}
</style>
