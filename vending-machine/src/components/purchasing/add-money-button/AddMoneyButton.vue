<script src='./add-money-button.js'></script>
<style src='./add-money-button.css' scoped></style>

<template>
<!-- v-on:click= or @click is same thing -->
    <div id='add-money-button' @click="addMoney">
        <h1>{{value}}</h1>
    </div>
</template>
