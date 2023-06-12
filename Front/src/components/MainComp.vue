<template>
    <v-row>
        <v-col class="main" cols="12">
            <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt=""
            />
        </v-col>
    </v-row>
</template>

<style scoped>
.main {
    max-height: 80vh;
    min-height: 50vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
}
</style>
