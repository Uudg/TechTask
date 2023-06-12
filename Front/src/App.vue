<template>
    <v-app>
        <LogoComp />
        <v-container class="content">
            <HeaderComp />
            <MainComp />
            <v-row class="blocks">
                <BlockComp v-for="el in blocks" :key="el.id" :data="el" />
            </v-row>
            <WelcomeComp :blocks="blocks" />
            <FooterComp />
        </v-container>
    </v-app>
</template>

<script>
import LogoComp from "./components/LogoComp.vue";
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";
import BlockComp from "./components/BlockComp.vue";
import MainComp from "./components/MainComp.vue";
import WelcomeComp from "./components/WelcomeComp.vue";

export default {
    name: "App",

    components: {
        LogoComp,
        HeaderComp,
        FooterComp,
        BlockComp,
        MainComp,
        WelcomeComp,
    },

    data: () => ({
        blocks: [
            {
                id: 1,
                img: "https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                body: "	Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. ipsum dolor sit amet, consectetuer Duis autem vel Lorem ipsum Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. ipsum dolor sit amet, consectetuer ",
            },
            {
                id: 2,
                img: "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
                body: "	Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. ipsum dolor sit amet, consectetuer Duis autem vel Lorem ipsum Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. ipsum dolor sit amet, consectetuer ",
            },
            {
                id: 3,
                img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1544&q=80",
                body: "	Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. ipsum dolor sit amet, consectetuer Duis autem vel Lorem ipsum Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. ipsum dolor sit amet, consectetuer ",
            },
            {
                id: 4,
                img: "https://images.unsplash.com/photo-1534800891164-a1d96b5114e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=759&q=80",
                body: "	Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. ipsum dolor sit amet, consectetuer Duis autem vel Lorem ipsum Lorem ipsum dolor sit amet, uer uer Duis autem vel eum iriure Duis autemvel eum iriure dolor. ipsum dolor sit amet, consectetuer ",
            },
        ],
    }),
};
</script>

<style>
.v-application {
    min-height: 100vh;
    font-family: Arial, Helvetica, sans-serif;

    background: rgb(224, 214, 218);
    background: radial-gradient(
        circle,
        rgba(224, 214, 218, 1) 0%,
        rgba(163, 160, 166, 1) 44%,
        rgba(112, 118, 126, 1) 100%
    );
}

.content > *:not(.blocks) {
    background: #fff;
    padding: 10px 0;
    margin-bottom: 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.7);
}

.btn {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    text-decoration: underline;
    padding-bottom: 10px;
}
</style>
