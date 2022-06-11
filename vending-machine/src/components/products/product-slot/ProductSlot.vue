<!-- child class of product-grid -->

<script src= './product-slot.js'></script>
<style src= './product-slot.css' scoped></style>

<template>
    <div id='product-slot' @click='buy'>
        <h1>{{product.name}}</h1>
        <h3>${{product.price}}</h3>

        <div id='description'>
            <p>{{product.category}}</p>
            <p>qty: {{product.quantity}}</p>
        </div>
        
        
    </div>
</template>