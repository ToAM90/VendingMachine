<script src='./message-toast.js'></script>
<style src='./message-toast.css' scoped></style>

<template>
    <div id='message-toast'  class="alert alert-dismissible alert-warning" v-if="$store.state.isMessageVisible">
        <p>{{ $store.state.message }}</p>
    </div>
</template>
