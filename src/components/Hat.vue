<template>
    <div class="header">
        <div class="imageDiv">
            <button @click="$router.push('/')">
            <img src="../assets/skjera.png" width="115px">
            </button>
        </div>
    </div>

</template>


<style type="text/css">
.header {
    background-color: rgb(49, 44, 44);
    height: 10vh;
    display: flex; 
    align-items: center;
    justify-content: center;
    
}

.imageDiv {
    margin-top:3px;

}
</style>