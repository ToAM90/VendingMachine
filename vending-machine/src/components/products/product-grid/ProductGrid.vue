<script src= './product-grid.js'></script>
<style src= './product-grid.css' scoped></style>

<template>
    <div id='product-grid'>
        <!-- loop through all products and display them -->
        <product-slot 
        v-for="product in $store.state.products" 
        :key="product.slotId"
        v-bind:product='product'
        ></product-slot>
    </div>
</template>